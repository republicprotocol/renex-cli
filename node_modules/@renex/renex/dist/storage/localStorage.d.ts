import { BalanceAction, OrderID, TraderOrder } from "../types";
import { StorageProvider } from "./interface";
declare class LocalStorage implements StorageProvider {
    private orders;
    private balanceActions;
    constructor(address?: string);
    setOrder(order: TraderOrder): Promise<void>;
    getOrder(orderID: OrderID): Promise<TraderOrder | undefined>;
    getOrders(): Promise<TraderOrder[]>;
    setBalanceAction(balanceAction: BalanceAction): Promise<void>;
    getBalanceAction(txHash: string): Promise<BalanceAction | undefined>;
    getBalanceActions(): Promise<BalanceAction[]>;
}
export default LocalStorage;
