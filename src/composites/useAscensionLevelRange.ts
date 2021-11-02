import { AscensionLevel } from "~/interfaces/AscensionLevel";
import { compareAscension } from "../lib/compareAscension";

export function useAscensionLevelRange() {
    const start = ref<AscensionLevel>({ level: 1, ascended: false });
    const goal = ref<AscensionLevel>({ level: 1, ascended: false });

    watch(start, (value) => {
        if (compareAscension(value, goal.value) === 1) {
            goal.value = value;
        }
    });

    watch(goal, (value) => {
        if (compareAscension(value, start.value) === -1) {
            start.value = value;
        }
    });

    return {
        start,
        goal,
    };
}
