import { IReservationItemUsage } from "./icompute-item-usage";

export interface IComputeItemInput {
    region: string;
    unit: string;
    sku:string;
    usage: IReservationItemUsage[];
}
