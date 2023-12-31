import { BaseCharacter } from "~/model/BaseCharacter";
import getAllCharacterItems from "../lib/item/getAllCharacterItems";

export interface CharacterSearchModel extends BaseCharacter {
  items: string[];
}

export const generateSearchModel = (character: BaseCharacter): CharacterSearchModel => {
  (character as any).items = getAllCharacterItems(character).map((i) => i.name);
  return character as CharacterSearchModel;
};
