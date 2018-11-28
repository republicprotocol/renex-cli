import RenExSDK from "../index";
import { BigNumber } from "bignumber.js";
import { BN } from "bn.js";
import { TokenCode, TokenDetails } from "../types";
export declare function toSmallestUnit(amount: BigNumber, tokenDetails: TokenDetails): BigNumber;
export declare function fromSmallestUnit(amount: BigNumber, tokenDetails: TokenDetails): BigNumber;
export declare function supportedTokens(sdk: RenExSDK): Promise<TokenCode[]>;
export declare function tokenToID(token: TokenCode): number;
export declare function idToToken(token: number): TokenCode;
/**
 * Combine two 32-bit token identifiers into a single 64-bit number.
 *
 * @param {number} leftToken 32-bit token identifier.
 * @param {number} rightToken 32-bit token identifier.
 * @returns {BN} 64-bit market identifier.
 */
export declare function generateTokenPairing(leftToken: number, rightToken: number): BN;
/**
 * Split a 64-bit number into two 32-bit token identifiers.
 *
 * @param {BN} pair The 64-bit token pair.
 * @returns {[number, number]} Two 32-bit token identifiers.
 */
export declare function splitTokenPairing(pair: BN): [number, number];
