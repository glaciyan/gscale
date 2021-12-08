import { getById } from "../util/getById";
import { Characters } from "../Characters";
import { Travelers } from "../Travelers";
import { Items } from "../Items";

export default {
  getCharacter(id: string) {
    return getById(Characters, id);
  },
  getTraveler(id: string) {
    return getById(Travelers, id);
  },
  getItem(id: string) {
    return getById(Items, id);
  },
};
