const { exec } = require("child_process");
const fs = require("fs");
const crypto = require("crypto");
const lastHashes = JSON.parse(fs.readFileSync("./scripts/hashes.json").toString());

const builtImages = [];

function writeHashesFile() {
    fs.writeFileSync("./scripts/hashes.json", JSON.stringify(builtImages, null, 4));
}

function filterFilesNeedingBuild(from) {
    const hashes = fs.readdirSync(from).map((f) => {
        const file = fs.readFileSync(`${from}/${f}`);
        const hashSum = crypto.createHash("sha1");
        hashSum.update(file);

        return { name: `${from}/${f}`, hash: hashSum.digest("hex") };
    });

    builtImages.push(...hashes);

    console.log(hashes);

    // return file names which have been changed or are missing
    return hashes
        .filter((val) => {
            return lastHashes.find((h) => `${from}/${h?.name}` === `${from}/${val.name}`)?.hash !== val.hash;
        })
        .map((m) => m.name);
}

function build(source, command) {
    const missing = filterFilesNeedingBuild(source);
    console.log(`\n\nMissing Images\n---\n${missing}\n---\n`);

    missing.map((file) => {
        console.log(`Building ${file}`);
        exec(`yarn ${command} ${source}/${file}`, (err, stdout, stderr) => {
            if (err) {
                console.error(`Couldn't build ${file}\n--error--\n${stderr}\n---end of error---`);
            } else console.log(`Done building ${file}`);
        });
    });
}

build("./src/data/images/characters/card", "images:characters:build");
build("./src/data/images/characters/mugshot", "images:mugshot:build");
build("./src/data/images/materials", "images:items:build");

writeHashesFile();
