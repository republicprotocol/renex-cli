import { BN } from "bn.js";
import { List } from "immutable";
export declare const PRIME: BN;
export declare class Share {
    index: number;
    value: BN;
    constructor(index: number, value: BN);
}
/**
 * Split a secret into shares using the finite field defined by the PRIME
 * constant. The secret must be less than, or equal to, the PRIME constant.
 * @param {number} n The number of shares that the secret will be split into.
 * @param {number} k The number of shares required to reconstruct the secret.
 * @param {BN} secret The secret number that will be split into shares.
 * @returns {List<Share>} An immutable list of shares.
 */
export declare function split(n: number, k: number, secret: BN): List<Share>;
/**
 * Join shares into a secret using the finite field defined by the PRIME
 * constant. This function cannot determine the minimum number of shares
 * required.
 * @param {List<Share>} shares An immutable list of shares that will be used to
 *        reconstruct the secret.
 * @returns {BN} The reconstructed secret, or meaningless garbage when an
 *          insufficient number of shares is provided.
 */
export declare function join(shares: List<Share>): BN;
