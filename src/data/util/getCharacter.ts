import { getById } from "./getById";
import { characters } from "../Characters";

export function getCharacter(id: string) {
    return getById(characters, id);
}
