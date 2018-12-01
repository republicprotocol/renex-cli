#!/usr/bin/env node

var chalk = require('chalk');
var promptly = require('promptly');
var fs = require('fs');
var path = require("path");
var os = require("os");

var Wallet = require('ethereumjs-wallet');
const WalletSubprovider = require("ethereumjs-wallet/provider-engine");

const ProviderEngine = require("web3-provider-engine");
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc');

const { RenExSDK } = require("@renex/renex");

// Create our main data path
const dataPath = path.join(os.homedir(), ".config/renex-cli");
if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath);
}

const storagePath = path.join(dataPath, "data");
const keystorePath = path.join(dataPath, "keystore.json");

const providerEngine = new ProviderEngine();

async function setupSDK(unlock) {
    const walletString = fs.readFileSync(keystorePath).toString();
    if (unlock) {
        const password = await promptly.password(chalk.bold.cyan('Enter your password: '));
        const wallet = Wallet.fromV3(walletString, password, true);
        providerEngine.addProvider(new WalletSubprovider(wallet));
    }
    providerEngine.addProvider(new RpcSubprovider({
        rpcUrl: `https://kovan.infura.io/${process.env.INFURA_KEY}`,
    }));
    // Start the engine manually since it does not start automatically
    providerEngine.start();

    const options = {
        network: "testnet",
        autoNormalizeOrders: true,
        storageProvider: storagePath,
    }
    var sdk = new RenExSDK(providerEngine, options);
    sdk.setAddress(JSON.parse(walletString).address);
    return sdk;
}

async function encrypt() {
    var password1 = "";
    var password2 = " ";
    while (password1 !== password2) {
        password1 = await promptly.password(chalk.bold.cyan('Enter your password: '));
        password2 = await promptly.password(chalk.bold.cyan('Re-enter your password: '));
    }

    var key = Buffer.from(process.argv[3], 'hex');
    var wallet = Wallet.fromPrivateKey(key);

    fs.writeFileSync(keystorePath, wallet.toV3String(password1), function (err) { });
    console.log(chalk.bold.green("\nStored encrypted keystore in " + keystorePath + "\n"))
}

async function load(filePath) {
    fs.copyFileSync(filePath, keystorePath, console.error);
    console.log(chalk.bold.green("\nSuccessfully loaded keystore to:" + keystorePath + "\n"))
}

async function getBalances(token) {
    token = token.toUpperCase()
    if (!["ETH", "DGX", "TUSD", "REN", "ZRX", "OMG"].includes(token)) {
        throw new Error("Invalid token");
    }

    const sdk = await setupSDK();
    console.log(`\n\nGetting balances for: ${sdk.getAddress()}`);
    const balances = await sdk.fetchBalances([token]);

    console.log(chalk.bold.green(`\nToken balance: ${JSON.stringify(balances.get(token))}`));
}

async function openOrder(buyOrSell, token) {
    token = token.toUpperCase()
    if (!["DGX", "TUSD", "REN", "ZRX", "OMG"].includes(token)) {
        throw new Error("Invalid token");
    }
    var price = await promptly.prompt(chalk.bold.cyan('Enter the price: '));
    var volume = await promptly.prompt(chalk.bold.cyan('Enter the volume: '));
    var order = {
        symbol: token + "/ETH",
        side: buyOrSell,
        price: price,  // ETH for 1 REN
        volume: volume,          // REN
    };

    const sdk = await setupSDK(true);
    var { traderOrder } = await sdk.openOrder(order);
    console.log(`Successfully opened order : ${traderOrder.id}`);
}

async function cancelOrder() {
    const sdk = await setupSDK(true);
    await sdk.cancelOrder(process.argv[3]);
    console.log(`Successfully cancelled order`);
}

async function listOrders() {
    const sdk = await setupSDK();
    var orders = await sdk.fetchTraderOrders({ refresh: true });
    orders.forEach(function (order) {
        console.log("\n" + order.id + " >>> " + order.status);
        console.log(JSON.stringify(order.orderInputs));
    });
}

async function main() {
    try {
        switch (process.argv[2]) {
            case "load":
                if (process.argv.length !== 4) {
                    throw new Error("Invalid number of arguments");
                }
                await load(process.argv[3]);
                break;
            case "encrypt":
                if (process.argv.length !== 4) {
                    throw new Error("Invalid number of arguments");
                }
                await encrypt();
                break;
            case "balance":
                if (process.argv.length !== 4) {
                    throw new Error("Invalid number of arguments");
                }
                await getBalances(process.argv[3]);
                break;
            case "buy":
            case "sell":
                if (process.argv.length !== 4) {
                    throw new Error("Invalid number of arguments");
                }
                await openOrder(process.argv[2], process.argv[3]);
                break;
            case "cancel":
                if (process.argv.length !== 4) {
                    throw new Error("Invalid number of arguments");
                }
                await cancelOrder();
                break;
            case "list":
                await listOrders();
                break;
            default:
                throw new Error(chalk.bold.red("\nInvalid argument!\n"));
        }
    } catch (error) {
        console.error(error);
    }
    providerEngine.stop();
}

main().catch(function (error) {
    console.error(error);
});