import { AscensionLevel } from "~/model/AscensionLevel";
import standardTemplates from "~/assets/standardTemplates.json";
import StartGoalRange from "~/model/StartGoalRange";

interface Template {
  name: string;
  level: Partial<StartGoalRange<AscensionLevel>>;
  normal: Partial<StartGoalRange<number>>;
  em: Partial<StartGoalRange<number>>;
  burst: Partial<StartGoalRange<number>>;
}

export function useLevelSelectorTemplate(
  level: StartGoalRange<AscensionLevel>,
  normal: StartGoalRange<number>,
  elemental: StartGoalRange<number>,
  burst: StartGoalRange<number>
) {
  return {
    templates: standardTemplates.map((template: Template) => {
      return {
        name: template.name,
        applyTemplate: () => {
          if (template.level.start) level.start = template.level.start;
          if (template.level.goal) level.goal = template.level.goal;

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
