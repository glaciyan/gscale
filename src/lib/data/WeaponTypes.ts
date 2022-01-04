import { IWeaponType } from "./contracts/IWeaponType";
import WeaponTypesKey from "./keys/WeaponTypesKey";

export const WeaponTypes: { [key in WeaponTypesKey]: IWeaponType } = {
  bow: {
    name: "Bow",
    normalizedName: "bow",
  },
  sword: {
    name: "Sword",
    normalizedName: "sword",
  },
  claymore: {
    name: "Claymore",
    normalizedName: "claymore",
  },
  catalyst: {
    name: "Catalyst",
    normalizedName: "catalyst",
  },
  polearm: {
    name: "Polearm",
    normalizedName: "polearm",
  },
};
