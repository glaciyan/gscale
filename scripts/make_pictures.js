const { exec } = require("child_process");
const fs = require("fs");

function filterMissing(from, dest) {
    const fromFiles = fs.readdirSync(from);
    const destFiles = fs.readdirSync(dest);

    return fromFiles.filter((val) => !destFiles.includes(val));
}

function build(source, dist, command) {
    const missing = filterMissing(source, dist);
    console.log(`Missing Images\n---\n${missing}\n---\n`);

    missing.map((file) => {
        console.log(`Building ${file}`);
        exec(`yarn ${command} ${source}/${file}`, (err, stdout, stderr) => {
            if (err) {
                console.error(
                    `Couldn't build ${file}\n--error--\n${stderr}\n---end of error---`
                );
            } else console.log(`Done building ${file}`);
        });
    });
}

function buildCharacterImages() {
    const sources = "./images/characters/card";
    const destination = "./public/images/characters/card";

    build(sources, destination, "images:characters:build");
}

function buildItemImages() {
    const sources = "./images/materials";
    const destination = "./public/images/materials";

    build(sources, destination, "images:characters:build");
}

buildCharacterImages();
buildItemImages();