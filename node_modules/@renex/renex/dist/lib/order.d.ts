import BigNumber from "bignumber.js";
import { BN } from "bn.js";
import { OrderStatus } from "../index";
declare const CoExp_base: import("lib/record").RecordInterface<{
    co: number;
    exp: number;
}>;
export declare class CoExp extends CoExp_base {
}
export declare function priceToCoExp(price: BN): CoExp;
export declare function volumeToCoExp(volume: BN): CoExp;
export declare function priceFloatToCoExp(price: BigNumber): CoExp;
export declare function volumeFloatToCoExp(volume: BigNumber): CoExp;
/**
 * Convert order state returned from the Orderbook contract into an OrderStatus enum.
 *
 * The state returned by the Orderbook does not provide settlement status information.
 * A separate call to the RenExSettlement contract is needed to determine the order status
 * during settlement.
 *
 * @throws {ErrUnknownOrderStatus} Will throw when the state is neither 0, 1, or 2.
 * @param {number} state The state of the order returned from the Orderbook.
 * @returns {OrderStatus} The order status.
 */
export declare function orderbookStateToOrderStatus(state: number): OrderStatus;
/**
 * Convert settlement status returned from the RenExSettlement contract into an OrderStatus enum.
 *
 * The RenExSettlement contract can return 4 different values: 0, 1, 2, and 3.
 * Status 0 means that the order has not yet been submitted for settlement.
 * Status 1 means that the order has been submitted for settlement but has not yet been settled.
 * Status 2 means the order has been settled.
 * Status 3 means the order has been slashed.
 *
 * @throws {ErrUnknownOrderStatus} Will throw when the state is neither 0, 1, 2, or 3.
 * @param {number} status The status of the order returned from the RenExSettlement contract.
 * @returns {OrderStatus} The order status.
 */
export declare function settlementStatusToOrderStatus(status: number): OrderStatus;
export {};
