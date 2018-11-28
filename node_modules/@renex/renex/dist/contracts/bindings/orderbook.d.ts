import { BN } from "bn.js";
import { Log, PromiEvent, Provider, TransactionReceipt, Tx } from "web3/types";
export interface Transaction {
    receipt: TransactionReceipt;
    tx: string;
    logs: Log[];
}
declare type BigNumber = string | number | BN;
export interface OrderbookContract {
    renounceOwnership(options?: Tx): PromiEvent<Transaction>;
    ren(options?: Tx): Promise<string>;
    owner(options?: Tx): Promise<string>;
    orders(index_0: string, options?: Tx): Promise<{
        state: BigNumber;
        trader: string;
        confirmer: string;
        settlementID: BigNumber;
        priority: BigNumber;
        blockNumber: BigNumber;
        matchedOrder: string;
        0: BigNumber;
        1: string;
        2: string;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
    }>;
    darknodeRegistry(options?: Tx): Promise<string>;
    settlementRegistry(options?: Tx): Promise<string>;
    transferOwnership(_newOwner: string, options?: Tx): PromiEvent<Transaction>;
    VERSION(options?: Tx): Promise<string>;
    updateDarknodeRegistry(_newDarknodeRegistry: string, options?: Tx): PromiEvent<Transaction>;
    openOrder(_settlementID: BigNumber, _signature: string, _orderID: string, options?: Tx): PromiEvent<Transaction>;
    confirmOrder(_orderID: string, _matchedOrderID: string, options?: Tx): PromiEvent<Transaction>;
    cancelOrder(_orderID: string, options?: Tx): PromiEvent<Transaction>;
    orderState(_orderID: string, options?: Tx): Promise<BigNumber>;
    orderMatch(_orderID: string, options?: Tx): Promise<string>;
    orderPriority(_orderID: string, options?: Tx): Promise<BigNumber>;
    orderTrader(_orderID: string, options?: Tx): Promise<string>;
    orderConfirmer(_orderID: string, options?: Tx): Promise<string>;
    orderBlockNumber(_orderID: string, options?: Tx): Promise<BigNumber>;
    orderDepth(_orderID: string, options?: Tx): Promise<BigNumber>;
    ordersCount(options?: Tx): Promise<BigNumber>;
    getOrders(_offset: BigNumber, _limit: BigNumber, options?: Tx): Promise<{
        0: string[];
        1: string[];
        2: BigNumber[];
    }>;
    address: string;
}
export interface OrderbookArtifact {
    new (address: string): OrderbookContract;
    address: string;
    "new"(_VERSION: string, _renAddress: string, _darknodeRegistry: string, _settlementRegistry: string, options?: Tx): Promise<OrderbookContract>;
    at(address: string): Promise<OrderbookContract>;
    deployed(): Promise<OrderbookContract>;
    setProvider(provider: Provider): void;
}
export {};
