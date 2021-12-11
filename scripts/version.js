const fs = require("fs");
const package = JSON.parse(fs.readFileSync("./package.json"));
const lastCommit = require("child_process").execSync("git rev-parse --short HEAD").toString().trim();

const versionFile = `export default {
  version: "${package.version}",
  commit: "${lastCommit}"
}`;

fs.writeFileSync("./src/version.ts", versionFile);
