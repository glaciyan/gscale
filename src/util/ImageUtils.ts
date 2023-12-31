import imageHashes from "~/assets/image_hashes.json";

export const BasePath = {
  Card: "/images/characters/card",
  Mugshot: "/images/characters/mugshot",
  Item: "/images/materials",
};

export function ConstructPath(basePath: string, normalizedName: string, type: string) {
  const fileName = `${basePath}/${normalizedName}`;

  // @ts-expect-error string access
  const hashes = imageHashes[`${normalizedName}_${type}`];

  const png = `${fileName}.${hashes.png}.${type}.png`;
  const webp = `${fileName}.${hashes.webp}.${type}.webp`;

  return { png, webp };
}

export function ConstructItemPath(normalizedNamed: string) {
  return ConstructPath(BasePath.Item, normalizedNamed, "material");
}
