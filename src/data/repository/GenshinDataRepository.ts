import { getById } from "../util/getById";
import { Characters } from "../Characters";

export default {
    getCharacter(id: string) {
        return getById(Characters, id);
    },
};
