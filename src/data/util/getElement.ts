import { IElement } from "../contracts/IElement";
import { getById } from "./getById";
import { elements } from "../Elements";

export function getElement(id: string): IElement | undefined {
    return getById(elements, id);
}
