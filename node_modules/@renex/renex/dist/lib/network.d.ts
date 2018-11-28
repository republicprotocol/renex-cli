export interface NetworkData {
    network: string;
    ingress: string;
    infura: string;
    etherscan: string;
    ethNetwork: string;
    ethNetworkLabel: string;
    ledgerNetworkId: number;
    contracts: [{
        darknodeRegistry: string;
        orderbook: string;
        renExTokens: string;
        renExBalances: string;
        renExSettlement: string;
        wyre: string;
    }];
    tokens: {
        DGX: string;
        TUSD: string;
        REN: string;
        OMG: string;
        ZRX: string;
    };
}
export declare const networks: {
    mainnet: NetworkData;
    testnet: NetworkData;
};
