import RenExSDK from "../index";
import { BalanceAction, TraderOrder } from "../types";
export declare const fetchTraderOrders: (sdk: RenExSDK, options?: {
    refresh: boolean;
}) => Promise<TraderOrder[]>;
export declare const fetchBalanceActions: (sdk: RenExSDK, options?: {
    refresh: boolean;
}) => Promise<BalanceAction[]>;
