import { Ref } from "vue-demi";
import { AscensionLevel } from "~/lib/interfaces/AscensionLevel";
import standardTemplates from "~/assets/standardTemplates.json";
import StartGoalRange from "~/lib/interfaces/StartGoalRange";

interface Template {
  name: string;
  asc: Partial<StartGoalRange<AscensionLevel>>;
  normal: Partial<StartGoalRange<number>>;
  em: Partial<StartGoalRange<number>>;
  burst: Partial<StartGoalRange<number>>;
}

export function useLevelSelectorTemplate(
  ascStart: Ref<AscensionLevel>,
  ascGoal: Ref<AscensionLevel>,
  normal: StartGoalRange<number>,
  elemental: StartGoalRange<number>,
  burst: StartGoalRange<number>
) {
  return {
    templates: standardTemplates.map((template: Template) => {
      return {
        name: template.name,
        applyTemplate: () => {
          if (template.asc.start) ascStart.value = template.asc.start;
          if (template.asc.goal) ascGoal.value = template.asc.goal;

          if (template.normal.start) normal.start = template.normal.start;
          if (template.normal.goal) normal.goal = template.normal.goal;

          if (template.em.start) elemental.start = template.em.start;
          if (template.em.goal) elemental.goal = template.em.goal;

          if (template.burst.start) burst.start = template.burst.start;
          if (template.burst.goal) burst.goal = template.burst.goal;
        },
      };
    }),
  };
}
