import { IItemGroup } from "../contracts/IItemGroup";
import { TravelerTalentBooks } from "../../types/TravelerTalentBooks";

export function generateTravelerTalentBooks(
  first: IItemGroup,
  second: IItemGroup,
  third: IItemGroup
): TravelerTalentBooks {
  return {
    1: first,
    2: second,
    3: third,
    4: first,
    5: second,
    6: third,
    7: first,
    8: second,
    9: third,
  };
}
