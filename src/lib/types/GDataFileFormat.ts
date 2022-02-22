import { z } from "zod";
import { Categories } from "../data/contracts/IItem";
import { PhysicalItemGroupsKey } from "../data/keys/ItemGroupsKey";
import { Build } from "../offlineDatabase/db";

export class GDataFileFormat {
  format = "gscale_builds_download";
  source = "gscale.cc";

  constructor(public version: number, public data: { builds: Build[] }) {}

  static fromJson(jsonContent: string): GDataFileFormat {
    const parsed = JSON.parse(jsonContent);
    if (parsed.format && parsed.format === "gscale_builds_download") {
      if (parsed.version) {
        switch (parsed.version) {
          case 1:
            const validated = schema.parse(parsed);
            return new GDataFileFormat(1, validated.data);
          default:
            throw "Invalid version";
        }
      }
    }

    throw "Invalid format";
  }
}

const schema = z.object({
  format: z.string(),
  source: z.string(),
  version: z.number(),
  data: z.object({
    builds: z.array(
      z.object({
        type: z.string(),
        entityId: z.string(),
        level: z.object({
          start: z.object({ level: z.number(), ascended: z.boolean() }),
          goal: z.object({ level: z.number(), ascended: z.boolean() }),
        }),
        normal: z.object({
          start: z.number(),
          goal: z.number(),
          upgraded: z.boolean(),
        }),
        elemental: z.object({
          start: z.number(),
          goal: z.number(),
          upgraded: z.boolean(),
        }),
        burst: z.object({
          start: z.number(),
          goal: z.number(),
          upgraded: z.boolean(),
        }),
        completed: z
          .array(
            z.object({
              item: z.object({
                name: z.string(),
                normalizedName: z.string(),
                rarity: z.number(),
                groupId: z.enum(PhysicalItemGroupsKey).optional(),
                category: z.enum(Categories),
              }),
              amount: z.number(),
            })
          )
          .optional(),
      })
    ),
  }),
});
