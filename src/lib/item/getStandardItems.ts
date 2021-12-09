import { IBaseCharacter } from "../data/contracts/IBaseCharacter";
import { ICharacter } from "../data/contracts/ICharacter";
import { IStandardAscensionItems, IStandardTalentItems } from "../data/contracts/IStandardCharacterItems";
import { ITraveler } from "../data/contracts/ITraveler";
import { Items } from "../data/Items";

export const getStandardAscensionItems = (character: IBaseCharacter): IStandardAscensionItems => {
  if (character.isTraveler) {
    const traveler = character as ITraveler;
    return {
      gemGroup: traveler.gemGroup,
      local: traveler.local,
      commonGroup: traveler.ascensionCommonGroup,
      boss: Items.none,
    };
  } else {
    return character as ICharacter;
  }
};

export const getStandardTalentItems = (
  character: IBaseCharacter,
  level: number,
  normalTalent: boolean
): IStandardTalentItems => {
  if (character.isTraveler) {
    const traveler = character as ITraveler;
    return {
      commonGroup: normalTalent ? traveler.normalTalentCommonGroup : traveler.talentCommonGroup,
      bookGroup: normalTalent ? traveler.normalTalentBooks[level] : traveler.talentBooks[level],
      weekly: normalTalent ? traveler.normalTalentBoss : traveler.talentBoss,
    };
  } else {
    return character as ICharacter;
  }
};
