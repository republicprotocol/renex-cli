import { BN } from "bn.js";
import { Log, PromiEvent, Provider, TransactionReceipt, Tx } from "web3/types";
export interface Transaction {
    receipt: TransactionReceipt;
    tx: string;
    logs: Log[];
}
declare type BigNumber = string | number | BN;
export interface RenExBalancesContract {
    brokerVerifierContract(options?: Tx): Promise<string>;
    rewardVaultContract(options?: Tx): Promise<string>;
    renounceOwnership(options?: Tx): PromiEvent<Transaction>;
    owner(options?: Tx): Promise<string>;
    traderBalances(index_0: string, index_1: string, options?: Tx): Promise<BigNumber>;
    SIGNAL_DELAY(options?: Tx): Promise<BigNumber>;
    settlementContract(options?: Tx): Promise<string>;
    transferOwnership(_newOwner: string, options?: Tx): PromiEvent<Transaction>;
    ETHEREUM(options?: Tx): Promise<string>;
    traderWithdrawalSignals(index_0: string, index_1: string, options?: Tx): Promise<BigNumber>;
    VERSION(options?: Tx): Promise<string>;
    updateRenExSettlementContract(_newSettlementContract: string, options?: Tx): PromiEvent<Transaction>;
    updateRewardVaultContract(_newRewardVaultContract: string, options?: Tx): PromiEvent<Transaction>;
    updateBrokerVerifierContract(_newBrokerVerifierContract: string, options?: Tx): PromiEvent<Transaction>;
    transferBalanceWithFee(_traderFrom: string, _traderTo: string, _token: string, _value: BigNumber, _fee: BigNumber, _feePayee: string, options?: Tx): PromiEvent<Transaction>;
    deposit(_token: string, _value: BigNumber, options?: Tx): PromiEvent<Transaction>;
    withdraw(_token: string, _value: BigNumber, _signature: string, options?: Tx): PromiEvent<Transaction>;
    signalBackupWithdraw(_token: string, options?: Tx): PromiEvent<Transaction>;
    address: string;
}
export interface RenExBalancesArtifact {
    new (address: string): RenExBalancesContract;
    address: string;
    "new"(_VERSION: string, _rewardVaultContract: string, _brokerVerifierContract: string, options?: Tx): Promise<RenExBalancesContract>;
    at(address: string): Promise<RenExBalancesContract>;
    deployed(): Promise<RenExBalancesContract>;
    setProvider(provider: Provider): void;
}
export {};
