import { AscensionLevel } from "~/lib/interfaces/AscensionLevel";
import { compareAscension } from "../lib/level/compareAscension";

export function useAscensionLevelRange() {
  const start = ref<AscensionLevel>({ level: 1, ascended: false });
  const goal = ref<AscensionLevel>({ level: 1, ascended: false });

  watch(start, (value) => {
    if (compareAscension(value, goal.value).isGreater()) {
      goal.value = value;
    }
  });

  watch(goal, (value) => {
    if (compareAscension(value, start.value).isLess()) {
      start.value = value;
    }
  });

  return {
    start,
    goal,
  };
}
