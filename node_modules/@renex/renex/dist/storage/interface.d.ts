import { BalanceAction, TraderOrder } from "../types";
export interface StorageProvider {
    setOrder(order: TraderOrder): Promise<void>;
    getOrder(orderID: string): Promise<TraderOrder | undefined>;
    getOrders(): Promise<TraderOrder[]>;
    setBalanceAction(balanceItem: BalanceAction): Promise<void>;
    getBalanceAction(txHash: string): Promise<BalanceAction | undefined>;
    getBalanceActions(): Promise<BalanceAction[]>;
}
