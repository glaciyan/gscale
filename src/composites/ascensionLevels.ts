import { AscensionLevel } from "~/interfaces/AscensionLevel";
import { compareAscension } from "../lib/compareAscension";

export function ascensionLevels() {
    const start = ref<AscensionLevel>({ level: 1, ascended: false });
    const goal = ref<AscensionLevel>({ level: 1, ascended: false });

    watch(start, () => {
        if (compareAscension(start.value, goal.value) === 1) {
            goal.value = start.value;
        }
    });

    watch(goal, () => {
        if (compareAscension(goal.value, start.value) === -1) {
            start.value = goal.value;
        }
    });

    return {
        start,
        goal,
    };
}
