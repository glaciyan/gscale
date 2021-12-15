import type StartGoalRange from "~/lib/types/StartGoalRange";

export function useTalentLevelRange(): StartGoalRange<number> {
  const range = reactive({
    start: 1,
    goal: 1,
  });

  watch(
    () => range.start,
    (start) => {
      if (start > range.goal) {
        range.goal = start;
      }
    }
  );

  watch(
    () => range.goal,
    (goal) => {
      if (goal < range.start) {
        range.start = goal;
      }
    }
  );

  return range;
}
