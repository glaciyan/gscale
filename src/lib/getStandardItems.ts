import { IBaseCharacter } from "./data/contracts/IBaseCharacter";
import { ICharacter } from "./data/contracts/ICharacter";
import { IStandardAscensionItems } from "./data/contracts/IStandardCharacterItems";
import { ITraveler } from "./data/contracts/ITraveler";
import { Items } from "./data/Items";

export const getStandardAscensionItems = (character: IBaseCharacter): Partial<IStandardAscensionItems> => {
  switch (character.meta) {
    case "traveler":
      const traveler = character as ITraveler;
      return {
        gemGroup: traveler.gemGroup,
        local: traveler.local,
        commonGroup: traveler.ascensionCommonGroup,
        boss: Items.none,
      };
    default:
      return character as ICharacter;
  }
};

export const getStandardTalentItems = (character: IBaseCharacter, level: number, normalTalent: boolean) => {
  switch (character.meta) {
    case "traveler":
      const traveler = character as ITraveler;
      return {
        commonGroup: normalTalent ? traveler.normalTalentCommonGroup : traveler.talentCommonGroup,
        bookGroup: normalTalent ? traveler.normalTalentBooks[level] : traveler.talentBooks[level],
        weekly: normalTalent ? traveler.normalTalentBoss : traveler.talentBoss,
      };
    default:
      return character as ICharacter;
  }
};
