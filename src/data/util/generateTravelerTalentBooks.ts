import { IItemGroup } from "../contracts/IItemGroup";
import { ITravelerTalentBooks } from "../contracts/ITravelerTalentBooks";

export function generateTravelerTalentBooks(
    first: IItemGroup,
    second: IItemGroup,
    third: IItemGroup
): ITravelerTalentBooks {
    return {
        2: first,
        3: second,
        4: third,
        5: first,
        6: second,
        7: third,
        8: first,
        9: second,
        10: third,
    };
}
