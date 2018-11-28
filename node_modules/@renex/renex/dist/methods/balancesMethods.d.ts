import RenExSDK from "../index";
import { BalanceDetails, TokenDetails } from "../types";
export declare const getTokenDetails: (sdk: RenExSDK, token: string) => Promise<TokenDetails>;
export declare const balances: (sdk: RenExSDK, tokens: string[]) => Promise<Map<string, BalanceDetails>>;
