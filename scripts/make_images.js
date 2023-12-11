import { exec } from "child_process";
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { createHash } from "crypto";
const lastHashes = JSON.parse(readFileSync("./scripts/hashes.json").toString());

async function main() {
  await build("./src/lib/data/images/characters/card", "images:characters:build", "card");
  await build("./src/lib/data/images/characters/mugshot", "images:mugshot:build", "mugshot");
  await build("./src/lib/data/images/materials", "images:items:build", "material");
  // await build("./src/lib/data/images/weapons", "images:weapons:build");

  writeHashesFile();
  (await import("./file_hash.mjs")).main();
}

const builtImages = [];

function writeHashesFile() {
  writeFileSync("./scripts/hashes.json", JSON.stringify(builtImages, null, 4));
  console.log("Wrote hashes");
}

function filterFilesNeedingBuild(from) {
  const hashes = readdirSync(from).map((f) => {
    const file = readFileSync(`${from}/${f}`);
    const hashSum = createHash("sha1");
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

function build(source, command, postfix) {
  const missing = filterFilesNeedingBuild(source);

  return new Promise((resolve, reject) => {
    if (missing.length === 0) resolve();
    else {
      // TODO clean already built images if they already exists
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
