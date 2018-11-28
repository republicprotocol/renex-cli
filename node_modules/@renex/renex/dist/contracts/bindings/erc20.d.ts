import { BN } from "bn.js";
import { Log, PromiEvent, Provider, TransactionReceipt, Tx } from "web3/types";
export interface Transaction {
    receipt: TransactionReceipt;
    tx: string;
    logs: Log[];
}
declare type BigNumber = string | number | BN;
export interface ERC20Contract {
    totalSupply(options?: Tx): Promise<BigNumber>;
    balanceOf(who: string, options?: Tx): Promise<BigNumber>;
    transfer(to: string, value: BigNumber, options?: Tx): PromiEvent<Transaction>;
    allowance(owner: string, spender: string, options?: Tx): Promise<BigNumber>;
    transferFrom(from: string, to: string, value: BigNumber, options?: Tx): PromiEvent<Transaction>;
    approve(spender: string, value: BigNumber, options?: Tx): PromiEvent<Transaction>;
    address: string;
}
export interface ERC20Artifact {
    new (address: string): ERC20Contract;
    address: string;
    "new"(options?: Tx): Promise<ERC20Contract>;
    at(address: string): Promise<ERC20Contract>;
    deployed(): Promise<ERC20Contract>;
    setProvider(provider: Provider): void;
}
export {};
