// import { toId } from ".";
// import itemOrder from "./itemOrder";
// import { itemsTyped, items } from "../data/items";
// import { getItemFromGroup } from "./ItemHelper";
// import { getGem } from "./ItemHelper";
// import { BuildItem, Character } from "./MyTypes";

// export class ItemGen {
//     character: Character;

//     constructor(character: Character) {
//         this.character = character;
//     }

//     gem(rarity: 2 | 3 | 4 | 5, amount: number): BuildItem {
//         return {
//             ...getGem(this.character.element, rarity),
//             amount: amount,
//             order: itemOrder.gem + rarity,
//         };
//     }

//     local(amount: number): BuildItem {
//         return {
//             ...itemsTyped[toId(this.character.local)],
//             amount: amount,
//             order: itemOrder.local,
//         };
//     }

//     common(rarity: 1 | 2 | 3, amount: number): BuildItem {
//         return {
//             ...getItemFromGroup(this.character.common, rarity),
//             amount: amount,
//             order: itemOrder.common + rarity,
//         };
//     }

//     boss(amount: number): BuildItem {
//         return {
//             ...itemsTyped[toId(this.character.ascension)],
//             amount: amount,
//             order: itemOrder.boss,
//         };
//     }

//     weekly(amount: number): BuildItem {
//         return {
//             ...itemsTyped[toId(this.character.weekly)],
//             amount: amount,
//             order: itemOrder.talentBoss,
//         };
//     }

//     book(rarity: 2 | 3 | 4, amount: number): BuildItem {
//         return {
//             ...getItemFromGroup(this.character.book, rarity),
//             amount: amount,
//             order: itemOrder.book + rarity,
//         };
//     }
// }
