export function getCharacterImage(normalizedName: string, type: "card" | "mugshot") {
    let basePath;

    switch (type) {
        case "card":
            basePath = "/images/characters/card";
            break;
        case "mugshot":
            basePath = "/images/characters/mugshot";
            break;
    }

    if (normalizedName.startsWith("traveler")) normalizedName = "traveler";

    const fileName = `${basePath}/${normalizedName}`;

    const png = `${fileName}.png`;
    const webp = `${fileName}.webp`;

    return { png, webp };
}
