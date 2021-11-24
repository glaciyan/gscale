import { Ref } from "vue-demi";
import { AscensionLevel } from "~/lib/interfaces/AscensionLevel";
import standardTemplates from "~/assets/standardTemplates.json";

interface LevelTemplate<T> {
  start: T;
  goal: T;
}

interface Template {
  name: string;
  asc: Partial<LevelTemplate<AscensionLevel>>;
  normal: Partial<LevelTemplate<number>>;
  em: Partial<LevelTemplate<number>>;
  burst: Partial<LevelTemplate<number>>;
}

export function useLevelSelectorTemplate(
  ascStart: Ref<AscensionLevel>,
  ascGoal: Ref<AscensionLevel>,
  normalStart: Ref<number>,
  normalGoal: Ref<number>,
  emStart: Ref<number>,
  emGoal: Ref<number>,
  burstStart: Ref<number>,
  burstGoal: Ref<number>
) {
  return {
    templates: standardTemplates.map((template: Template) => {
      return {
        name: template.name,
        applyTemplate: () => {
          if (template.asc.start) ascStart.value = template.asc.start;
          if (template.asc.goal) ascGoal.value = template.asc.goal;

          if (template.normal.start) normalStart.value = template.normal.start;
          if (template.normal.goal) normalGoal.value = template.normal.goal;

          if (template.em.start) emStart.value = template.em.start;
          if (template.em.goal) emGoal.value = template.em.goal;

          if (template.burst.start) burstStart.value = template.burst.start;
          if (template.burst.goal) burstGoal.value = template.burst.goal;
        },
      };
    }),
  };
}
