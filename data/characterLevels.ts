export default {
    20: { level: 20, ascended: false },
    21: { level: 20, ascended: true },
    40: { level: 40, ascended: false },
    41: { level: 40, ascended: true },
    50: { level: 50, ascended: false },
    51: { level: 50, ascended: true },
    60: { level: 60, ascended: false },
    61: { level: 60, ascended: true },
    70: { level: 70, ascended: false },
    71: { level: 70, ascended: true },
    80: { level: 80, ascended: false },
    81: { level: 80, ascended: true },
    90: { level: 90, ascended: false },
};

export function getAscensionLevel(level: Levels) {
    if (level <= 20) return -1;
    else if (level >= 21 && level <= 40) return 0;
    else if (level >= 41 && level <= 50) return 1;
    else if (level >= 51 && level <= 60) return 2;
    else if (level >= 61 && level <= 70) return 3;
    else if (level >= 71 && level <= 80) return 4;
    else if (level >= 81) return 5;
    else return -1;
}

export type Levels =
    | 20
    | 21
    | 40
    | 41
    | 50
    | 51
    | 60
    | 61
    | 70
    | 71
    | 80
    | 81
    | 90;
