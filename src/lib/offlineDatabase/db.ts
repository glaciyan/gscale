import Dexie, { Table } from "dexie";
import { ItemWithAmount } from "../data/entities/ItemWithAmount";
import { AscensionLevel } from "../interfaces/AscensionLevel";
import StartGoalRange from "../interfaces/StartGoalRange";

export interface Builds {
  id?: number;
  order?: number;
  completed?: Array<ItemWithAmount>;
  type: string;
  characterId: string;
  level: StartGoalRange<AscensionLevel>;
  normal: StartGoalRange<number>;
  elemental: StartGoalRange<number>;
  burst: StartGoalRange<number>;
}

export class CustomDexie extends Dexie {
  builds!: Table<Builds>;

  constructor() {
    super("buildsDB");
    this.version(2).stores({
      builds: "++id, order, *completed, type, characterId, level, normal, elemental, burst",
    });
  }
}

export const db = new CustomDexie();
