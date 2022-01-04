const fs = require("fs");

// run `yarn data:tsc` to create the required files
const Characters = require("./jsdata/data/Characters.js").Characters;
const Items = require("./jsdata/data/Items.js").Items;
const ItemGroups = require("./jsdata/data/ItemGroups.js").ItemGroups;
const Elements = require("./jsdata/data/Elements.js").Elements;
const DaysOfWeek = require("./jsdata/data/DaysOfWeek.js").DaysOfWeek;
const WeaponTypes = require("./jsdata/data/WeaponTypes.js").WeaponTypes;
const ItemAvailability = require("./jsdata/data/ItemAvailability.js").ItemAvailability;
const Travelers = require("./jsdata/data/Travelers.js").Travelers;

const generateFile = (object, name) => {
  const keys = Object.keys(object);

  fs.writeFileSync(
    `./src/lib/data/keys/${name}.ts`,
    `
type ${name} = ${keys.map((key) => `"${key}"`).join(" | ")};
export default ${name};`
  );
};

const main = async () => {
  generateFile(Characters, "CharactersKey");
  generateFile(Items, "ItemsKey");
  generateFile(ItemGroups, "ItemGroupsKey");
  generateFile(Elements, "ElementsKey");
  generateFile(DaysOfWeek, "DaysOfWeekKey");
  generateFile(WeaponTypes, "WeaponTypesKey");
  generateFile(ItemAvailability, "ItemAvailabilityKey");
  generateFile(Travelers, "TravelersKey");
};

main();
