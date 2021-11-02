export function useTalentLevelRange() {
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
