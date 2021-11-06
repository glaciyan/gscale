import { IDayOfWeek } from "./IDayOfWeek";
import { IItemGroup } from "./IItemGroup";

export interface IItemAvailability {
    item: IItemGroup;
    days: IDayOfWeek[];
}
