import { PromiEvent } from "web3/types";
import RenExSDK from "../index";
import { BalanceAction, NumberInput, Transaction, TransactionStatus } from "../types";
export declare const updateBalanceActionStatus: (sdk: RenExSDK, txHash: string) => Promise<TransactionStatus>;
export declare const updateAllBalanceActionStatuses: (sdk: RenExSDK, balanceActions?: BalanceAction[] | undefined) => Promise<Map<string, TransactionStatus>>;
export declare const onTxHash: (tx: PromiEvent<Transaction>) => Promise<{
    txHash: string;
    promiEvent: PromiEvent<Transaction>;
}>;
export declare const deposit: (sdk: RenExSDK, value: NumberInput, token: string) => Promise<{
    balanceAction: BalanceAction;
    promiEvent: PromiEvent<Transaction> | null;
}>;
export declare const withdraw: (sdk: RenExSDK, value: NumberInput, token: string, withoutIngressSignature: boolean) => Promise<{
    balanceAction: BalanceAction;
    promiEvent: PromiEvent<Transaction> | null;
}>;
