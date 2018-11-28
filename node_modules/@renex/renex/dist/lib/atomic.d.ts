import Web3 from "web3";
import { AtomicConnectionStatus, OrderStatus } from "../types";
import { EncodedData } from "./encodedData";
export declare const ErrorAtomNotLinked = "Atom back-end not linked to wallet";
export declare const ErrorUnableToConnect = "Unable to connect go Atom back-end";
export declare const ErrorAddressNotAuthorized = "Ethereum address not authorized for Atom";
export declare const ErrorUnableToRetrieveStatus = "Unable to retrieve order status";
export declare const ErrorUnableToRetrieveBalances = "Unable to retrieve Atomic balances";
interface WhoamiResponse {
    whoAmI: {
        challenge: string;
        version: string;
        network: string;
        authorizedAddresses: string[];
        supportedCurrencies: string[];
    };
    signature: string;
}
interface BalanceObject {
    address: string;
    amount: string;
}
interface BalancesResponse {
    ethereum: BalanceObject;
    bitcoin: BalanceObject;
}
export declare function checkSigner(web3: Web3, response: WhoamiResponse): string;
export declare function challengeSwapper(): Promise<WhoamiResponse>;
export declare function _connectToAtom(response: WhoamiResponse, ingressURL: string, address: string): Promise<AtomicConnectionStatus>;
export declare function _authorizeAtom(web3: Web3, ingressURL: string, atomAddress: string, address: string): Promise<void>;
export declare function submitOrderToAtom(orderID: EncodedData): Promise<void>;
export declare function getOrderStatus(orderID: EncodedData): Promise<OrderStatus>;
export declare function getAtomicBalances(): Promise<BalancesResponse>;
export {};
