import { IWeaponType } from "./contracts/IWeaponType";
import { getById } from "./util/getById";

const weaponTypes: IWeaponType[] = [
    {
        id: "bow",
        name: "Bow",
    },
    {
        id: "sword",
        name: "Sword",
    },
];

export default weaponTypes;

export function getWeaponType(id: string): IWeaponType | undefined {
    return getById(weaponTypes, id);
}
