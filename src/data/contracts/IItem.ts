import { UsingId } from "./UsingId";

export interface IItem extends UsingId {
    name: string;
    rarity: number;
    groupId?: string;
}
