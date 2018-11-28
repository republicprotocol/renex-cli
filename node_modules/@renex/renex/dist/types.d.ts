import BigNumber from "bignumber.js";
import { BN } from "bn.js";
import { StorageProvider } from "./storage/interface";
export { NetworkData } from "./lib/network";
export declare type NumberInput = number | string | BigNumber;
export interface Transaction {
    receipt: any;
    tx: string;
    logs: any[];
}
export declare type OrderID = string;
export declare enum OrderStatus {
    NOT_SUBMITTED = "NOT_SUBMITTED",
    FAILED_TO_SETTLE = "FAILED_TO_SETTLE",
    OPEN = "OPEN",
    CONFIRMED = "CONFIRMED",
    CANCELED = "CANCELED",
    SETTLED = "SETTLED",
    SLASHED = "SLASHED",
    EXPIRED = "EXPIRED"
}
export declare enum OrderSettlement {
    RenEx = "renex",
    RenExAtomic = "atomic"
}
export declare enum OrderType {
    MIDPOINT = "midpoint",
    LIMIT = "limit",
    MIDPOINT_IOC = "midpoint_ioc",
    LIMIT_IOC = "limit_ioc"
}
export declare enum OrderSide {
    BUY = "buy",
    SELL = "sell"
}
export declare enum Token {
    BTC = "BTC",
    ETH = "ETH",
    DGX = "DGX",
    TUSD = "TUSD",
    REN = "REN",
    ZRX = "ZRX",
    OMG = "OMG"
}
export declare enum MarketPair {
    ETH_BTC = "ETH/BTC",
    DGX_ETH = "DGX/ETH",
    TUSD_ETH = "TUSD/ETH",
    REN_ETH = "REN/ETH",
    ZRX_ETH = "ZRX/ETH",
    OMG_ETH = "OMG/ETH"
}
export interface MarketDetails {
    symbol: MarketCode;
    orderSettlement: OrderSettlement;
    quote: TokenCode;
    base: TokenCode;
}
export declare type TokenCode = string;
export declare type MarketCode = string;
export interface OrderInputs {
    symbol: MarketCode;
    side: OrderSide;
    price: NumberInput;
    volume: NumberInput;
    minVolume?: NumberInput;
    type?: OrderInputsAll["type"];
    expiry?: OrderInputsAll["expiry"];
}
export interface OrderInputsAll extends OrderInputs {
    price: BigNumber;
    volume: BigNumber;
    minVolume: BigNumber;
    type: OrderType;
    expiry: number;
}
export interface ComputedOrderDetails {
    receiveToken: TokenCode;
    spendToken: TokenCode;
    receiveVolume: BigNumber;
    spendVolume: BigNumber;
    date: number;
    feeAmount: BigNumber;
    feeToken: TokenCode;
    orderSettlement: OrderSettlement;
    nonce: BN;
}
export interface Order {
    readonly id: OrderID;
    readonly trader: string;
    status: OrderStatus;
    matchDetails?: MatchDetails;
}
export interface TraderOrder extends Order {
    readonly computedOrderDetails: ComputedOrderDetails;
    readonly orderInputs: OrderInputsAll;
    readonly transactionHash: string;
}
export interface OrderbookFilter {
    address?: string;
    status?: OrderStatus;
    limit?: number;
    start?: number;
}
export interface MatchDetails {
    orderID: string;
    matchedID: string;
    receivedVolume: BigNumber;
    spentVolume: BigNumber;
    fee: BigNumber;
    receivedToken: TokenCode;
    spentToken: TokenCode;
}
export interface TokenDetails {
    address: string;
    decimals: number;
    registered: boolean;
}
export interface BalanceDetails {
    free: BigNumber;
    used: BigNumber;
    nondeposited: BigNumber;
}
export interface AtomicBalanceDetails {
    free: BigNumber;
    used: BigNumber;
}
export declare enum BalanceActionType {
    Withdraw = "withdraw",
    Deposit = "deposit"
}
export declare enum TransactionStatus {
    Pending = "pending",
    Done = "done",
    Failed = "failed",
    Replaced = "replaced"
}
export interface BalanceAction {
    action: BalanceActionType;
    amount: BigNumber;
    time: number;
    status: TransactionStatus;
    token: TokenCode;
    trader: string;
    txHash: string;
    nonce: number | undefined;
}
export interface Options {
    network?: Config["network"];
    autoNormalizeOrders?: Config["autoNormalizeOrders"];
    storageProvider?: Config["storageProvider"];
}
export interface Config extends Options {
    network: string;
    autoNormalizeOrders: boolean;
    storageProvider: string | StorageProvider;
}
export interface SimpleConsole {
    error(message?: string): void;
    log(message?: string): void;
}
export declare const NullConsole: SimpleConsole;
export declare enum AtomicConnectionStatus {
    InvalidSwapper = "invalid_swapper",
    ChangedSwapper = "changed_swapper",
    NotConnected = "not_connected",
    NotAuthorized = "not_authorized",
    AtomNotAuthorized = "atom_not_authorized",
    ConnectedUnlocked = "connected_unlocked",
    ConnectedLocked = "connected_locked"
}
