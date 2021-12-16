import { IBaseCharacter } from "../data/contracts/IBaseCharacter";
import getAllCharacterItems from "../item/getAllCharacterItems";

export interface CharacterSearchModel extends IBaseCharacter {
  items: string[];
}

export const generateSearchModel = (character: IBaseCharacter): CharacterSearchModel => {
  (character as any).items = getAllCharacterItems(character).map((i) => i.name);
  return character as CharacterSearchModel;
};
