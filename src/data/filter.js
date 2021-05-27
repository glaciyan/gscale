const fs = require("fs");

const characters = JSON.parse(fs.readFileSync("./Characters.json").toString());

const filtered = characters.map((c) => {
    return {
        name: c.name,
        rarity: c.rarity,
        constellation: c.constellation,
        description: c.description,
        weapon: c.weapontype,
        sub: c.substat,
        ascension: c.ascensionBoss,
        local: c.local,
        common: c.common,
        weekly: c.talentBoss,
        book: c.book,
    };
});

const order = [
    "eula",
    "yanfei",
    "rosaria",
    "hu tao",
    "xiao",
    "ganyu",
    "albedo",
    "zhongli",
    "xinyan",
    "tartaglia",
    "diona",
    "klee",
    "venti",
    "keqing",
    "mona",
    "qiqi",
    "diluc",
    "jean",
    "sucrose",
    "chongyun",
    "noelle",
    "bennett",
    "fischl",
    "ningguang",
    "xingqiu",
    "beidou",
    "xiangling",
    "razor",
    "barbara",
    "lisa",
    "kaeya",
    "amber",
];

const sorted = order.map((ord) => {
    return filtered.find((char) => char.name.toLowerCase() === ord);
});

fs.writeFileSync("out.json", JSON.stringify(sorted, null, 2));
