#!/usr/bin/env node

var createFile = require('create-file');
var chalk = require('chalk');
var program = require('commander');
var co = require('co');
var promptly = require('promptly');
var fs = require('fs');

var Wallet = require('ethereumjs-wallet');
const WalletSubprovider = require("ethereumjs-wallet/provider-engine");

const Web3 = require("web3");
const ProviderEngine = require("web3-provider-engine");
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc');

const { RenExSDK } = require("@renex/renex");

async function main() {
    switch (process.argv[2]) {
        case "init":
            if (process.argv.length !== 4) {
                throw new Error("Invalid number of arguments");
            }
            var password1 = "";
            var password2 = " ";
            while (password1 !== password2) {
                password1 = await promptly.password(chalk.bold.cyan('Enter your password: '));
                password2 = await promptly.password(chalk.bold.cyan('Re-enter your password: '));
            }

            var key = Buffer.from(process.argv[3], 'hex');
            var wallet = Wallet.fromPrivateKey(key);
            createFile('encrypted_keystore.json', wallet.toV3String(password1), function (err) { });
            console.log(chalk.bold.green("\nStored encrypted keystore in ./encrypted_keystore.json\n"))
            break;
        case "get-balances":
            if (process.argv.length !== 4) {
                throw new Error("Invalid number of arguments");
            }
            const password = await promptly.password(chalk.bold.cyan('Enter your password: '));
            const wallet = Wallet.fromV3(fs.readFileSync('encrypted_keystore.json').toString(), password, true);

            const providerEngine = new ProviderEngine();
            providerEngine.addProvider(new WalletSubprovider(wallet));
            providerEngine.addProvider(new RpcSubprovider({
                rpcUrl: `https://kovan.infura.io/${process.env.INFURA_KEY}`,
            }));
            // Start the engine manually since it does not start automatically
            providerEngine.start();

            if (require.main === module) {
                console.log(`Provider was set up with public address: ${wallet.getAddress().toString("hex")}`);
                // Stop the provider engine when we're done with the provider
                var sdk = new RenExSDK(providerEngine, { network: "testnet", autoNormalizeOrders: true, storageProvider: "memory" });
                var web3 = new Web3(providerEngine);
                var accounts = await web3.eth.getAccounts();
                // Set the account to use with the RenEx SDK
                var mainAccount = accounts[0];
                sdk.setAddress(mainAccount);

                var token = process.argv[3]
                while (token !== "ETH" && token !== "DGX" && token !== "TUSD" && token !== "REN" && token !== "ZRX" && token !== "OMG") {
                    token = await promptly.prompt(chalk.bold.cyan('Enter a valid token [ETH, DGX, TUSD, REN, ZRX, OMG]: '));
                }
                console.log(`\n\nGetting balances for: ${mainAccount}`);

                const balances = await sdk.fetchBalances([token]);

                console.log(chalk.bold.green(`\nToken balance: ${JSON.stringify(balances.get(token))}`));

                providerEngine.stop();
            }
            break;
        case "open-order":
            if (process.argv.length !== 3) {
                throw new Error("Invalid number of arguments");
            }
            const password = await promptly.password(chalk.bold.cyan('Enter your password: '));
            const wallet = Wallet.fromV3(fs.readFileSync('encrypted_keystore.json').toString(), password, true);

            const providerEngine = new ProviderEngine();
            providerEngine.addProvider(new WalletSubprovider(wallet));
            providerEngine.addProvider(new RpcSubprovider({
                rpcUrl: `https://kovan.infura.io/${process.env.INFURA_KEY}`,
            }));
            // Start the engine manually since it does not start automatically
            providerEngine.start();

            if (require.main === module) {
                console.log(`Provider was set up with public address: ${wallet.getAddress().toString("hex")}`);
                // Stop the provider engine when we're done with the provider
                var sdk = new RenExSDK(providerEngine, { network: "testnet", autoNormalizeOrders: true, storageProvider: "memory" });
                var web3 = new Web3(providerEngine);
                var accounts = await web3.eth.getAccounts();
                // Set the account to use with the RenEx SDK
                var mainAccount = accounts[0];
                sdk.setAddress(mainAccount);

                var token = ''
                while (token !== "DGX/ETH" && token !== "TUSD/ETH" && token !== "REN/ETH" && token !== "ZRX/ETH" && token !== "OMG/ETH") {
                    token = await promptly.prompt(chalk.bold.cyan('Enter the token [DGX, TUSD, REN, ZRX, OMG]: '));
                    token = token + "/ETH"
                }
                var parity = ''
                while (parity != 'buy' && parity !== 'sell') {
                    parity = await promptly.prompt(chalk.bold.cyan('Is this a buy order: (y/n)'));
                    if (parity === 'Y' || parity === 'y') {
                        parity = 'buy'
                    }
                    if (parity === 'N' || parity === 'n') {
                        parity = 'sell'
                    }
                }
                var price = await promptly.prompt(chalk.bold.cyan('Enter the price: '));
                var volume = await promptly.prompt(chalk.bold.cyan('Enter the volume: '));
                var order = {
                    symbol: token,
                    side: parity,         // buying REN for ETH
                    price: price,  // ETH for 1 REN
                    volume: volume,          // REN
                };
                var { traderOrder } = await sdk.openOrder(order);
                console.log(`Successfully opened order : ${traderOrder.id}`);

                providerEngine.stop();
            }
        case "cancel-order":
            if (process.argv.length !== 4) {
                throw new Error("Invalid number of arguments");
            }
            const password = await promptly.password(chalk.bold.cyan('Enter your password: '));
            const wallet = Wallet.fromV3(fs.readFileSync('encrypted_keystore.json').toString(), password, true);

            const providerEngine = new ProviderEngine();
            providerEngine.addProvider(new WalletSubprovider(wallet));
            providerEngine.addProvider(new RpcSubprovider({
                rpcUrl: `https://kovan.infura.io/${process.env.INFURA_KEY}`,
            }));
            // Start the engine manually since it does not start automatically
            providerEngine.start();

            if (require.main === module) {
                console.log(`Provider was set up with public address: ${wallet.getAddress().toString("hex")}`);
                // Stop the provider engine when we're done with the provider
                var sdk = new RenExSDK(providerEngine, { network: "testnet", autoNormalizeOrders: true, storageProvider: "memory" });
                var web3 = new Web3(providerEngine);
                var accounts = await web3.eth.getAccounts();
                // Set the account to use with the RenEx SDK
                var mainAccount = accounts[0];
                sdk.setAddress(mainAccount);

                await sdk.cancelOrder(process.argv[3]);
                console.log(`Successfully cancelled order`);

                providerEngine.stop();
            }
            break;
        default:
            throw new Error(chalk.bold.red("\nInvalid argument!\n"));
    }
}

main().catch(function (error) {
    console.error(error);
});