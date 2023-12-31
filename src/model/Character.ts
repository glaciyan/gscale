import { BaseCharacter } from "./BaseCharacter";
import { CharacterItems } from "./CharacterItems";
import { GElement } from "./GElement";
import { OptimizedImage } from "./OptimizedImage";
import { Item } from "./Item";
import { ItemWithAmount } from "./ItemWithAmount";
import { BasePath, ConstructPath } from "~/util/ImageUtils";
import { GWeapon } from "./GWeapon";
import { AscensionLevel } from "./AscensionLevel";
import StartGoalRange from "./StartGoalRange";

export class Character extends BaseCharacter {
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
    items: CharacterItems,
  ) {
    super(name, normalizedName, element, weapon, sub, constellation, description, altName, noPic, speculated);
    this.items = items;
  }

  items: CharacterItems;

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
    return ConstructPath(BasePath.Card, this.noPic ? "nopic" : this.normalizedName, "card");
  }

  getMugshotImage(): OptimizedImage {
    return ConstructPath(BasePath.Mugshot, this.noPic ? "nopic" : this.normalizedName, "mugshot");
  }
}
