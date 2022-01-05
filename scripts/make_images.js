const { exec } = require("child_process");
const fs = require("fs");
const crypto = require("crypto");
const lastHashes = JSON.parse(fs.readFileSync("./scripts/hashes.json").toString());

async function main() {
  await build("./src/lib/data/images/characters/card", "images:characters:build");
  await build("./src/lib/data/images/characters/mugshot", "images:mugshot:build");
  await build("./src/lib/data/images/materials", "images:items:build");
  await build("./src/lib/data/images/weapons", "images:weapons:build");

  writeHashesFile();
}

const builtImages = [];

function writeHashesFile() {
  fs.writeFileSync("./scripts/hashes.json", JSON.stringify(builtImages, null, 4));
  console.log("Wrote hashes");
}

function filterFilesNeedingBuild(from) {
  const hashes = fs.readdirSync(from).map((f) => {
    const file = fs.readFileSync(`${from}/${f}`);
    const hashSum = crypto.createHash("sha1");
    hashSum.update(file);

    return { name: `${from}/${f}`, hash: hashSum.digest("hex") };
  });

  builtImages.push(...hashes);

  // return file names which have been changed or are missing
  return hashes
    .filter((val) => {
      return lastHashes.find((h) => `${from}/${h?.name}` === `${from}/${val.name}`)?.hash !== val.hash;
    })
    .map((m) => m.name);
}

function build(source, command) {
  const missing = filterFilesNeedingBuild(source);

  return new Promise((resolve, reject) => {
    if (missing.length === 0) resolve();
    else {
      console.log(`Building ${source} with ${command} (${missing.length} missing or changed images)`);
      exec(`npm run ${command} ${missing.join(" ")}`, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
          console.log(`Finished ${command}`);
          resolve();
        }
      });
    }
  });
}

main();
