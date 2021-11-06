import { getById } from "../util/getById";
import { Characters } from "../Characters";
import { Travelers } from "../Travelers";

export default {
    getCharacter(id: string) {
        return getById(Characters, id);
    },
    getTraveler(id: string) {
        return getById(Travelers, id);
    },
};
