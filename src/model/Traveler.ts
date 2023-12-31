import { BasePath, ConstructPath } from "~/util/ImageUtils";
import { AscensionLevel } from "./AscensionLevel";
import { BaseCharacter } from "./BaseCharacter";
import { GElement } from "./GElement";
import { GWeapon } from "./GWeapon";
import { Item } from "./Item";
import { ItemWithAmount } from "./ItemWithAmount";
import { OptimizedImage } from "./OptimizedImage";
import StartGoalRange from "./StartGoalRange";
import { TravelerAscensionItems } from "./TravelerAscensionItems";
import { TravelerTalentItems } from "./TravelerTalentItems";

export class Traveler extends BaseCharacter {
  constructor(
    name: string,
    normalizedName: string,
    element: GElement,
    weapon: GWeapon,
    sub: string,
    constellation: string,
    description: string,
    altName: string,
    noPic: boolean,
    speculated: boolean,
    ascensionItems: TravelerAscensionItems,
    normalAttackItems: TravelerTalentItems,
    elementalAttackItems: TravelerTalentItems,
    burstAttackItems: TravelerTalentItems,
  ) {
    super(name, normalizedName, element, weapon, sub, constellation, description, altName, noPic, speculated);
    this.ascensionItems = ascensionItems;
    this.normalAttackItems = normalAttackItems;
    this.elementalAttackItems = elementalAttackItems;
    this.burstAttackItems = burstAttackItems;
  }

  ascensionItems: TravelerAscensionItems;
  normalAttackItems: TravelerTalentItems;
  elementalAttackItems: TravelerTalentItems;
  burstAttackItems: TravelerTalentItems;

  getItems(): Item[] {
    throw new Error("Method not implemented.");
  }
  calculateAscension(range: StartGoalRange<AscensionLevel>): ItemWithAmount[] {
    throw new Error("Method not implemented.");
  }
  calculateNormalTalent(range: StartGoalRange<number>): ItemWithAmount[] {
    throw new Error("Method not implemented.");
  }
  calculateElementalTalent(range: StartGoalRange<number>): ItemWithAmount[] {
    throw new Error("Method not implemented.");
  }
  calculateBurstTalent(range: StartGoalRange<number>): ItemWithAmount[] {
    throw new Error("Method not implemented.");
  }
  getCardImage(): OptimizedImage {
    return ConstructPath(BasePath.Card, "traveler", "card");
  }
  getMugshotImage(): OptimizedImage {
    return ConstructPath(BasePath.Mugshot, "traveler", "mugshot");
  }
}
