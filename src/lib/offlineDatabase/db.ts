import Dexie, { Table } from "dexie";
import { ItemWithAmount } from "../types/ItemWithAmount";
import { Items } from "../data/Items";
import GenshinDataRepository from "../data/repository/GenshinDataRepository";
import { AscensionLevel } from "../types/AscensionLevel";
import StartGoalRange from "../types/StartGoalRange";
import * as Legacy from "../legacy";
import { toId } from "../toId";
import { Talent } from "../types/Talent";

export interface Build {
  id?: number;
  order?: number;
  completed?: Array<ItemWithAmount>;
  type: string;
  entityId: string;
  level: StartGoalRange<AscensionLevel>;
  normal: Talent;
  elemental: Talent;
  burst: Talent;
}

export class CustomDexie extends Dexie {
  builds!: Table<Build>;

  constructor() {
    super("buildsDB");
    this.version(2)
      .stores({
        builds: "++id, order, *completed, type, entityId, level, normal, elemental, burst",
      })
      .upgrade((tx) => {
        return tx
          .table("builds")
          .toCollection()
          .modify((build) => {
            // new 2.0 level format as object
            build.level.start = Legacy.fromLegacyLevel(build.level.start);
            build.level.goal = Legacy.fromLegacyLevel(build.level.goal);

            // more generic name
            build.entityId = build.characterId;
            delete build.characterId;

            // full item object
            if (build.completed) {
              build.completed = build.completed.map(
                (item: { name: string; amount: number }): ItemWithAmount => ({
                  item: GenshinDataRepository.getItem(toId(item.name)) ?? Items.none,
                  amount: item.amount,
                })
              );
            }
          });
      });

    this.version(3).stores({
      builds: "++id, order, orderChanged, *completed, type, entityId, level, normal, elemental, burst",
    });
  }
}

export const db = new CustomDexie();
