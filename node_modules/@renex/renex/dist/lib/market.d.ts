import RenExSDK from "../index";
import { OrderedMap } from "immutable";
import { MarketCode, MarketDetails } from "../types";
export declare const MarketPairs: OrderedMap<MarketCode, MarketDetails>;
export declare function fetchMarkets(sdk: RenExSDK): Promise<MarketDetails[]>;
