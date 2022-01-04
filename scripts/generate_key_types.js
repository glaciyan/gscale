const fs = require("fs");
const Characters = require("./jsdata/data/Characters.js").Characters;

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
};

main();
