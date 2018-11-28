import RenExSDK, { NumberInput, TransactionStatus } from "../index";
export declare const transfer: (sdk: RenExSDK, addr: string, token: string, valueBig: NumberInput) => Promise<void>;
export declare const getGasPrice: (sdk: RenExSDK) => Promise<number | undefined>;
/**
 * Returns the status of a transaction from its transaction hash.
 *
 * @param {RenExSDK} sdk
 * @param {string} txHash
 * @returns {Promise<TransactionStatus>} One of "pending", "confirmed",
 *          "failed", or "replaced"
 */
export declare const getTransactionStatus: (sdk: RenExSDK, txHash: string) => Promise<TransactionStatus>;
