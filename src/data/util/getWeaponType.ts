import { IWeaponType } from "../contracts/IWeaponType";
import { getById } from "./getById";
import { weaponTypes } from "../WeaponTypes";

export function getWeaponType(id: string): IWeaponType | undefined {
    return getById(weaponTypes, id);
}
