export function getItemImage(name: string) {
  const path = `/images/materials/${name}`;

  return {
    png: `${path}.png`,
    webp: `${path}.webp`,
  };
}
