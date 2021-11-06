import { IdIndex } from "./contracts/UsingId";
import { IWeaponType } from "./contracts/IWeaponType";

export const WeaponTypes: IdIndex<IWeaponType> = {
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
