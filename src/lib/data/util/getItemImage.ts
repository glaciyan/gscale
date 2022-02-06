import imageHashes from "~/assets/image_hashes.json";

export function getItemImage(name: string) {
  const path = `/images/materials/${name}`;

  // @ts-expect-error string access
  const hashes = imageHashes[`${name}_material`];

  return {
    png: `${path}.${hashes.png}.material.png`,
    webp: `${path}.${hashes.webp}.material.webp`,
  };
}
