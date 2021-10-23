import { useRoute } from "vue-router";
import { getCharacter, GICharacter } from "../data/characters";

export default function () {
    const route = useRoute();
    const character =
        getCharacter(route.params.character as string) ??
        (getCharacter("jeffrey") as GICharacter);

    return {
        character,
    };
}
