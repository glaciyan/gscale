import { IBaseCharacter } from "../contracts/IBaseCharacter";

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

  const png = `${fileName}.png`;
  const webp = `${fileName}.webp`;

  return { png, webp };
}
