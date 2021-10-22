import { UsingId } from "./contracts/id";

interface GIWeaponType extends UsingId {
    name: string;
}

const weaponTypes: GIWeaponType[] = [
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
