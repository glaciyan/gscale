import { AscensionLevel } from "~/lib/interfaces/AscensionLevel";
import StartGoalRange from "~/lib/interfaces/StartGoalRange";
import { compareAscension } from "../lib/level/compareAscension";

export function useAscensionLevelRange(): StartGoalRange<AscensionLevel> {
  const range = reactive<StartGoalRange<AscensionLevel>>({
    start: { level: 1, ascended: false },
    goal: { level: 1, ascended: false },
  });

  watch(
    () => range.start,
    (start) => {
      if (compareAscension(start, range.goal).isGreater()) {
        range.goal = start;
      }
    }
  );

  watch(
    () => range.goal,
    (goal) => {
      if (compareAscension(goal, range.start).isLess()) {
        range.start = goal;
      }
    }
  );

  return range;
}
