import { Characters } from "../data/Characters";
import { db } from "../offlineDatabase/db";

export default async () => {
  await db.builds.bulkAdd(
    Object.values(Characters).map((character) => {
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
