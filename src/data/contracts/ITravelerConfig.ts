import { IElement } from "./IElement";
import { IItem } from "./IItem";
import { IItemGroup } from "./IItemGroup";
import { ITravelerTalentBooks } from "./ITravelerTalentBooks";

export interface ITravelerConfig {
    element: IElement;

    talentCommonGroup: IItemGroup;
    talentBooks: ITravelerTalentBooks;
    talentBoss: IItem;
}
