import { INamed } from "./INamed";
import { GElement } from "./GElement";
import { Item } from "./Item";
import { ItemWithAmount } from "./ItemWithAmount";
import { OptimizedImage } from "./OptimizedImage";
import { GWeapon } from "./GWeapon";
import { AscensionLevel } from "./AscensionLevel";
import StartGoalRange from "./StartGoalRange";

export abstract class BaseCharacter implements INamed {
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
  ) {
    this.name = name;
    this.normalizedName = normalizedName;
    this.element = element;
    this.weapon = weapon;
    this.sub = sub;
    this.constellation = constellation;
    this.description = description;
    this.altName = altName;
    this.noPic = noPic;
    this.speculated = speculated;
  }

  name: string;
  normalizedName: string;
  element: GElement;
  weapon: GWeapon;
  sub: string;
  constellation: string;
  description: string;
  altName?: string;
  noPic?: boolean;
  speculated?: boolean;

  abstract getItems(): Item[];

  abstract calculateAscension(range: StartGoalRange<AscensionLevel>): ItemWithAmount[];

  abstract calculateNormalTalent(range: StartGoalRange<number>): ItemWithAmount[];

  abstract calculateElementalTalent(range: StartGoalRange<number>): ItemWithAmount[];

  abstract calculateBurstTalent(range: StartGoalRange<number>): ItemWithAmount[];

  abstract getCardImage(): OptimizedImage;

  abstract getMugshotImage(): OptimizedImage;
}
