import * as NodeRSAType from "node-rsa";
import Web3 from "web3";
import { BN } from "bn.js";
import { List, Map } from "immutable";
import * as shamir from "./shamir";
import { DarknodeRegistryContract } from "../contracts/bindings/darknode_registry";
import { OrderbookContract } from "../contracts/bindings/orderbook";
import { OrderID, OrderInputsAll, OrderStatus, SimpleConsole, TokenCode } from "../types";
import { EncodedData } from "./encodedData";
export declare enum OrderSettlement {
    RenEx = 1,
    RenExAtomic = 2
}
export declare enum OrderType {
    MIDPOINT = 0,
    LIMIT = 1,
    MIDPOINT_IOC = 2,
    LIMIT_IOC = 3
}
export declare enum OrderParity {
    BUY = 0,
    SELL = 1
}
declare const Tuple_base: import("lib/record").RecordInterface<{
    c: number;
    q: number;
}>;
export declare class Tuple extends Tuple_base {
}
declare const Order_base: import("lib/record").RecordInterface<{
    signature: string;
    id: string;
    type: OrderType;
    parity: OrderParity;
    orderSettlement: OrderSettlement;
    expiry: number;
    tokens: BN;
    price: BN;
    volume: BN;
    minimumVolume: BN;
    nonce: BN;
}>;
export declare class Order extends Order_base {
}
declare const AtomAuthorizationRequest_base: import("lib/record").RecordInterface<{
    atomAddress: string;
    signature: string;
}>;
export declare class AtomAuthorizationRequest extends AtomAuthorizationRequest_base {
}
declare const OpenOrderRequest_base: import("lib/record").RecordInterface<{
    address: string;
    orderFragmentMappings: Map<string, List<OrderFragment>>[];
}>;
export declare class OpenOrderRequest extends OpenOrderRequest_base {
}
declare const WithdrawRequest_base: import("lib/record").RecordInterface<{
    address: string;
    tokenID: number;
}>;
export declare class WithdrawRequest extends WithdrawRequest_base {
}
declare const OrderFragment_base: import("lib/record").RecordInterface<{
    id: string;
    orderId: string;
    orderType: OrderType;
    orderParity: OrderParity;
    orderSettlement: OrderSettlement;
    orderExpiry: number;
    tokens: string;
    price: string[];
    volume: string[];
    minimumVolume: string[];
    nonce: string;
    index: number;
}>;
export declare class OrderFragment extends OrderFragment_base {
}
declare const Pod_base: import("lib/record").RecordInterface<{
    id: string;
    darknodes: List<string>;
    orderFragments: List<OrderFragment>;
}>;
export declare class Pod extends Pod_base {
}
export declare function randomNonce(randomBN: () => BN): BN;
export declare function authorizeSwapper(ingressURL: string, request: AtomAuthorizationRequest): Promise<boolean>;
export declare function checkAtomAuthorization(ingressURL: string, address: string, expectedEthAddress: string): Promise<boolean>;
export declare function createOrder(orderInputs: OrderInputsAll, nonce?: BN): Order;
export declare function submitOrderFragments(ingressURL: string, request: OpenOrderRequest): Promise<EncodedData>;
export declare function requestWithdrawalSignature(ingressURL: string, address: string, token: TokenCode): Promise<EncodedData>;
export declare function getOrders(orderbook: OrderbookContract, startIn?: number, limitIn?: number): Promise<List<[OrderID, OrderStatus, string]>>;
export declare function getOrderID(web3: Web3, order: Order): EncodedData;
export declare function buildOrderMapping(web3: Web3, darknodeRegistryContract: DarknodeRegistryContract, order: Order, simpleConsole: SimpleConsole): Promise<Map<string, List<OrderFragment>>>;
export declare function encryptForDarknode(darknodeKey: NodeRSAType | null, share: shamir.Share, byteCount: number): EncodedData;
export {};
