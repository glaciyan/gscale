import { IBaseCharacter } from "../contracts/IBaseCharacter";
import imageHashes from "~/assets/image_hashes.json";

export function getCharacterImage(character: IBaseCharacter, type: "card" | "mugshot") {
  let basePath;

  switch (type) {
    case "card":
      basePath = "/images/characters/card";
      break;
    case "mugshot":
      basePath = "/images/characters/mugshot";
      break;
  }

  let imageName;

  if (character.isTraveler) imageName = "traveler";
  else if (character.noPic) imageName = "nopic";
  else imageName = character.normalizedName;

  const fileName = `${basePath}/${imageName}`;

  // @ts-expect-error string access
  const hashes = imageHashes[`${imageName}_${type}`];

  const png = `${fileName}.${hashes.png}.${type}.png`;
  const webp = `${fileName}.${hashes.webp}.${type}.webp`;

  return { png, webp };
}
