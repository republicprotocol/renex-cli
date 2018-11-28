import { BalanceAction, OrderID, TraderOrder } from "../types";
import { StorageProvider } from "./interface";
export declare class MemoryStorage implements StorageProvider {
    private orders;
    private balanceActions;
    constructor();
    setOrder(order: TraderOrder): Promise<void>;
    getOrder(orderID: OrderID): Promise<TraderOrder | undefined>;
    getOrders(): Promise<TraderOrder[]>;
    setBalanceAction(balanceAction: BalanceAction): Promise<void>;
    getBalanceAction(txHash: string): Promise<BalanceAction | undefined>;
    getBalanceActions(): Promise<BalanceAction[]>;
}
