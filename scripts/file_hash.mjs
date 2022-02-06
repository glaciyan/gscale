import fs from "fs";
import { createHash } from "crypto";
import path from "path";

export const getAssetHash = (file) => createHash("sha256").update(fs.readFileSync(file)).digest("hex").substring(0, 8);

export const getAssetName = (file) => {
  const dir = path.dirname(file);

  const extname = path.extname(file);
  const baseName = path.basename(file, extname);
  const hash = getAssetHash(file);

  return path.join(dir, `${baseName}.${hash}${extname}`);
};

const hashMap = new Map();

const addHashesToFilesInDir = (dir) => {
  const withPath = (fileName) => path.join(dir, fileName);

  const fileNames = fs.readdirSync(dir);
  const renames = fileNames.map((fileName) => {
    const name = path.basename(fileName, fileName.endsWith("png") ? ".png" : ".webp");

    return {
      oldPath: withPath(fileName),
      newPath: getAssetName(withPath(fileName)),
      hash: getAssetHash(withPath(fileName)),
      name,
    };
  });

  renames.forEach(({ oldPath, newPath, name, hash }) => {
    fs.renameSync(oldPath, newPath);

    const hashObj = hashMap.get(name);
    if (hashObj) {
      if (hashObj.png && oldPath.endsWith("webp")) {
        hashMap.set(name, Object.assign(hashObj, { webp: hash }));
      } else if (hashObj.webp && oldPath.endsWith("png")) {
        hashMap.set(name, Object.assign(hashObj, { png: hash }));
      }
    } else {
      hashMap.set(name, Object.fromEntries([[path.extname(oldPath).substring(1), hash]]));
    }
  });
};

async function main() {
  addHashesToFilesInDir("./public/images/characters/card");
  addHashesToFilesInDir("./public/images/characters/mugshot");
  addHashesToFilesInDir("./public/images/materials");

  fs.writeFileSync("./src/assets/image_hashes.json", JSON.stringify(Object.fromEntries(hashMap)));
}

main();
