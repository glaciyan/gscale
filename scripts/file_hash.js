import fs from "fs";
import { createHash } from "crypto";
import path from "path";

const hashesOutPath = "./src/assets/image_hashes.json";

const oldImageHashes = JSON.parse(fs.readFileSync(hashesOutPath, { flag: "a+" }).toString());

export const getAssetHash = (file) => createHash("sha256").update(fs.readFileSync(file)).digest("hex").substring(0, 8);

export const getAssetName = (file, postfix) => {
  const dir = path.dirname(file);

  const extname = path.extname(file);
  const baseName = path.basename(file, extname);
  const hash = getAssetHash(file);

  return path.join(dir, `${baseName}.${hash}.${postfix}${extname}`);
};

const hashMap = new Map(Object.entries(oldImageHashes));

function cleanup(props) {
  fs.readdirSync(props.dir)
    .filter((name) => name.split(".").length > 2)
    .filter((name) => {
      const [basename, hash, postfix, extension] = name.split(".");
      if (basename === props.name && postfix === props.postfix && extension === props.extension.substring(1)) {
        console.log(`cleaning up ${basename}.${hash}.${postfix}.${extension}`);
        return true;
      } else return false;
    })
    .forEach((name) => {
      fs.rmSync(path.join(props.dir, name));
    });
}

const addHashesToFilesInDir = (dir, postfix) => {
  const withPath = (fileName) => path.join(dir, fileName);

  if (fs.existsSync(dir)) fs.mkdirSync(dir)

  // get all the files which dont have postfixes
  const fileNames = fs.readdirSync(dir).filter((name) => name.split(".").length <= 2);
  const renames = fileNames.map((fileName) => {
    const extension = fileName.endsWith("png") ? ".png" : ".webp";
    const name = path.basename(fileName, extension);

    // delete files from the directiry which have the same name, postfix and extension but different hash
    cleanup({ dir, name, postfix, extension });

    return {
      oldPath: withPath(fileName),
      newPath: getAssetName(withPath(fileName), postfix),
      hash: getAssetHash(withPath(fileName)),
      name,
    };
  });

  renames.forEach(({ oldPath, newPath, name, hash }) => {
    console.log(oldPath, "->", newPath);
    fs.renameSync(oldPath, newPath);

    const mapName = `${name}_${postfix}`;

    const hashObj = hashMap.get(mapName);
    if (hashObj) {
      if (hashObj.png && oldPath.endsWith("webp")) {
        hashMap.set(mapName, Object.assign(hashObj, { webp: hash }));
      } else if (hashObj.webp && oldPath.endsWith("png")) {
        hashMap.set(mapName, Object.assign(hashObj, { png: hash }));
      }
    } else {
      hashMap.set(mapName, Object.fromEntries([[path.extname(oldPath).substring(1), hash]]));
    }
  });
};

export async function main() {
  console.log("checking file hashes");
  addHashesToFilesInDir("./public/images/characters/card", "card");
  addHashesToFilesInDir("./public/images/characters/mugshot", "mugshot");
  addHashesToFilesInDir("./public/images/materials", "material");

  fs.writeFileSync(hashesOutPath, JSON.stringify(Object.fromEntries(hashMap), null, 2));
}
