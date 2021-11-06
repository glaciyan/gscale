- needs to handle a character not having a category of items (e.g. traveler not having a boss material for ascension)
- needs to handle unknown items (can probably just handle unkown as any other item)
- adding another abstraction layer when the calculator wants to access materials of a character and for getting the amount

```js
const table = getAmountTable
const character
const level = 2

const materialTypes = character.getMaterialsFor(level)

table.getAmountsFor(materialTypes)
```
