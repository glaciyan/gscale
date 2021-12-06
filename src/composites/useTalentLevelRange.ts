import type { Ref } from "vue";
import type StartGoalRange from "~/lib/interfaces/StartGoalRange";

export function useTalentLevelRange(): StartGoalRange<Ref<number>> {
  const start = ref(1);
  const goal = ref(1);

  watch(start, (value) => {
    if (value > goal.value) {
      goal.value = value;
    }
  });

  watch(goal, (value) => {
    if (value < start.value) {
      start.value = value;
    }
  });

  return {
    start,
    goal,
  };
}
