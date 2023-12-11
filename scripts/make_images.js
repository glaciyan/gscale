import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "fs";
import { createHash } from "crypto";
import Sharp from "sharp";
import path from "path";
import { main as fileHash } from "./file_hash.js";
const lastHashes = JSON.parse(readFileSync("./scripts/hashes.json", { flag: "a+" }).toString());

const config = {
  "images:characters:build": {
    width: 240,
    outDir: "./public/images/characters/card",
  },
  "images:mugshot:build": {
    width: 100,
    outDir: "./public/images/characters/mugshot",
  },
  "images:items:build": {
    width: 40,
    outDir: "./public/images/materials",
  },
};

async function main() {
  await build("./src/lib/data/images/characters/card", config["images:characters:build"]);
  await build("./src/lib/data/images/characters/mugshot", config["images:mugshot:build"]);
  await build("./src/lib/data/images/materials", config["images:items:build"]);

  writeHashesFile();
  await fileHash();
}

const builtImages = [];

async function writeHashesFile() {
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

async function build(source, config) {
  const missing = filterFilesNeedingBuild(source);

  const outDir = config.outDir;
  mkdirSync(outDir, { recursive: true });

  if (missing.length === 0) return;
  else {
    // TODO clean already built images if they already exists
    console.log(`Building ${source} (${missing.length} missing or changed images)`);
    await Promise.all(
      missing.map(async (file) => {
        const name = path.parse(file).name;
        console.log(` - ${file}`);

        const webp = Sharp(file);
        const png = webp.clone();

        await webp
          .resize(config.width)
          .webp({ quality: 70, preset: "drawing" })
          .toFile(path.join(outDir, name + ".webp"));

        await png
          .resize(config.width)
          .png()
          .toFile(path.join(outDir, name + ".png"));
      })
    );
    // exec(`npm run ${command} ${missing.join(" ")}`, (err, stdout, stderr) => {
    //   if (err) {
    //     reject(err);
    //   } else {
    //     console.log(`Finished ${command}`);
    //     resolve();
    //   }
    // });
  }
}

main().then(() => console.log("done :)"));
