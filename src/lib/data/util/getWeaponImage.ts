export function getWeaponImage(name: string) {
  const path = `/images/weapons/${name}`;

  return {
    png: `${path}.png`,
    webp: `${path}.webp`,
  };
}
