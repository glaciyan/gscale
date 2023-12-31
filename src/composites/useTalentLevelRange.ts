import { Talent } from "~/model/Talent";

export function useTalentLevelRange(): Talent {
  const range = reactive<Talent>({
    start: 1,
    goal: 1,
    upgraded: false,
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
