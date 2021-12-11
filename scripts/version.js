const fs = require("fs");
const package = JSON.parse(fs.readFileSync("./package.json"));

const versionFile = `export default {
  version: "${package.version}",
}`;

fs.writeFileSync("./src/version.ts", versionFile);
