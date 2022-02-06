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

const addHashesToFilesInDir = (dir) => {
  const withPath = (fileName) => path.join(dir, fileName);

  const fileNames = fs.readdirSync(dir);
  const renames = fileNames.map((fileName) => {
    return {
      oldPath: withPath(fileName),
      newPath: getAssetName(withPath(fileName)),
    };
  });

  renames.forEach(({ oldPath, newPath }) => {
    fs.renameSync(oldPath, newPath);
    console.log(oldPath, "->", newPath);
  });
};

async function main() {
  addHashesToFilesInDir("./public/images/characters/card");
}

main();
