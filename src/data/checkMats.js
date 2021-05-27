const fs = require("fs");

const images = fs.readdirSync("../public/images/materials");

function toId(name) {
    return name.replace(/'/g, "").replace(/[ -]+/g, "_").toLowerCase();
}

function toImageName(name) {
    return toId(name) + ".png";
}

const materials = JSON.parse(fs.readFileSync("./materials.json").toString());

materials.forEach((element) => {
    if (images.findIndex((image) => image === toImageName(element.name)) < 0)
        throw `${toId(element.name) + ".png"} does not have picture`;
});

const materialNames = materials.map((material) => {
    return toImageName(material.name);
});

const found = new Set();

images.forEach((image, index) => {
    const found = materialNames.find((mat) => mat === image);
    if (!found) {
        console.log(image);
    }
});
