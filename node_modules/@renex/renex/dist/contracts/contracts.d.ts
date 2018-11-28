import { Provider } from "web3/types";
import { DarknodeRegistryArtifact } from "./bindings/darknode_registry";
import { ERC20Artifact } from "./bindings/erc20";
import { OrderbookArtifact } from "./bindings/orderbook";
import { RenExBalancesArtifact } from "./bindings/ren_ex_balances";
import { RenExSettlementArtifact } from "./bindings/ren_ex_settlement";
import { RenExTokensArtifact } from "./bindings/ren_ex_tokens";
import { WyreArtifact } from "./bindings/wyre";
export declare const ETH_CODE = 1;
export declare const withProvider: <T extends {
    setProvider(provider: Provider): void;
}>(provider: Provider, artifact: T) => T;
export declare const ERC20: ERC20Artifact;
export declare const DarknodeRegistry: DarknodeRegistryArtifact;
export declare const Orderbook: OrderbookArtifact;
export declare const RenExSettlement: RenExSettlementArtifact;
export declare const RenExBalances: RenExBalancesArtifact;
export declare const RenExTokens: RenExTokensArtifact;
export declare const Wyre: WyreArtifact;
