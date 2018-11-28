import BigNumber from "bignumber.js";
import { NumberInput } from "../types";
import { Tuple } from "./ingress";
/**
 * Calculate price tuple from a decimal string
 *
 * https://github.com/republicprotocol/republic-go/blob/smpc/docs/orders-and-order-fragments.md
 *
 */
export declare function priceToTuple(price: BigNumber, roundUp?: boolean): Tuple;
export declare const tupleToPrice: (t: Tuple) => BigNumber;
export declare const normalizePrice: (p: BigNumber, roundUp?: boolean | undefined) => BigNumber;
export declare function volumeToTuple(volume: BigNumber, roundUp?: boolean): Tuple;
export declare const tupleToVolume: (t: Tuple) => BigNumber;
export declare const normalizeVolume: (v: BigNumber, roundUp?: boolean | undefined) => BigNumber;
export declare function toOriginalType(converted: BigNumber, original: NumberInput): NumberInput;
