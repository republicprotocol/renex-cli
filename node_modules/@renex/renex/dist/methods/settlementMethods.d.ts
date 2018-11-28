import BigNumber from "bignumber.js";
import RenExSDK from "../index";
import { MatchDetails, OrderStatus } from "../types";
export declare const status: (sdk: RenExSDK, orderID64: string) => Promise<OrderStatus>;
/**
 * Returns the percentage fees required by the darknodes.
 */
export declare const darknodeFees: (sdk: RenExSDK) => Promise<BigNumber>;
export declare const matchDetails: (sdk: RenExSDK, orderID64: string) => Promise<MatchDetails>;
