export function getMaterialImage(name: string) {
  const path = `/images/materials/${name}`;

  return {
    png: `${path}.png`,
    webp: `${path}.webp`,
  };
}
