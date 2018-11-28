import { BalanceAction, TraderOrder } from "../types";
export declare const serializeTraderOrder: (order: TraderOrder) => string;
export declare const deserializeTraderOrder: (orderString: string) => TraderOrder;
export declare const serializeBalanceAction: (balanceAction: BalanceAction) => string;
export declare const deserializeBalanceAction: (balanceActionString: string) => BalanceAction;
