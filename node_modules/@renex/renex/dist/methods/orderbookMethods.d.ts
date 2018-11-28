import { BigNumber } from "bignumber.js";
import { PromiEvent } from "web3/types";
import RenExSDK from "../index";
import { Order, OrderbookFilter, OrderInputs, OrderStatus, TraderOrder, Transaction } from "../types";
export declare const getMinEthTradeVolume: (sdk: RenExSDK) => Promise<BigNumber>;
export declare const openOrder: (sdk: RenExSDK, orderInputsIn: OrderInputs, simpleConsole?: import("types").SimpleConsole) => Promise<{
    traderOrder: TraderOrder;
    promiEvent: PromiEvent<Transaction> | null;
}>;
export declare const cancelOrder: (sdk: RenExSDK, orderID: string) => Promise<{
    promiEvent: PromiEvent<Transaction> | null;
}>;
export declare const getOrders: (sdk: RenExSDK, filter: OrderbookFilter) => Promise<Order[]>;
export declare const updateAllOrderStatuses: (sdk: RenExSDK, orders?: TraderOrder[] | undefined) => Promise<Map<string, OrderStatus>>;
export declare const getOrderBlockNumber: (sdk: RenExSDK, orderID: string) => Promise<number>;
