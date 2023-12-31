import { db } from "../../offlineDatabase/db";
import { CharactersViewModel } from "../../data/CharactersViewModel";

export default async () => {
  await db.builds.bulkAdd(
    CharactersViewModel.map((character) => {
      return {
        type: "character",
        entityId: character.normalizedName,
        level: {
          start: { level: 1, ascended: false },
          goal: { level: 90, ascended: false },
        },
        normal: {
          start: 1,
          goal: 10,
          upgraded: false,
        },
        elemental: {
          start: 1,
          goal: 10,
          upgraded: false,
        },
        burst: {
          start: 1,
          goal: 10,
          upgraded: false,
        },
      };
    })
  );
};
