import { IElement } from "../contracts/IElement";
import { IItem } from "../contracts/IItem";
import { IItemGroup } from "../contracts/IItemGroup";
import { ITraveler } from "../contracts/ITraveler";
import { ITravelerConfig } from "../contracts/ITravelerConfig";
import { ITravelerTalentBooks } from "../contracts/ITravelerTalentBooks";
import { IWeaponType } from "../contracts/IWeaponType";
import { ItemGroups } from "../ItemGroups";
import { Items } from "../Items";
import { WeaponTypes } from "../WeaponTypes";

export class Traveler implements ITraveler {
  constructor(config: ITravelerConfig) {
    this.meta = "traveler";

    this.name = "Traveler";
    this.normalizedName = `traveler_${config.element.normalizedName}`;
    this.element = config.element;
    this.weaponType = WeaponTypes.sword;
    this.rarity = 5;
    this.sub = "ATK";
    this.constellation = "Viator/Viatrix";
    this.description =
      "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.";

    this.local = Items.windwheel_aster;
    this.gemGroup = ItemGroups.traveler_gem;
    this.ascensionCommonGroup = ItemGroups.mask;

    this.talentCommonGroup = config.talentCommonGroup;
    this.talentBoss = config.talentBoss;

    this.talentBooks = config.talentBooks;
    this.normalTalentBooks = config.normalTalentBooks;
  }

  name: string;
  normalizedName: string;
  weaponType: IWeaponType;
  rarity: 4 | 5;
  sub: string;
  constellation: string;
  description: string;
  element: IElement;

  local: IItem;
  gemGroup: IItemGroup;
  ascensionCommonGroup: IItemGroup;

  talentCommonGroup: IItemGroup;
  talentBoss: IItem;

  talentBooks: ITravelerTalentBooks;
  normalTalentBooks: ITravelerTalentBooks;

  meta: string;
}
