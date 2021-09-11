import { IComputeItemInput } from "./icompute-item-input";
import { IReservationItemInput } from "./ireservations-item-input";

export interface IComputeInput {
    totalComputeUsage?: IComputeItemInput[];
    totalSpotUsage?:any;
    reservationsDetails?:IReservationItemInput[];
    savingPlansDetails?:any;
}
