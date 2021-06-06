export const characterLevels = {
    1: { level: 1, ascended: false },
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

// data from https://genshin-impact.fandom.com/wiki/Character_EXP
export const costsTo = [
    { level: 20, xp: 120175, mora: 24200, accurate: [6, 0, 1] },
    { level: 40, xp: 578325, mora: 115800, accurate: [28, 3, 4] },
    { level: 50, xp: 579100, mora: 116000, accurate: [29, 0, 0] },
    { level: 60, xp: 854125, mora: 171000, accurate: [42, 3, 0] },
    { level: 70, xp: 1195925, mora: 239200, accurate: [59, 3, 1] },
    { level: 80, xp: 1611875, mora: 322400, accurate: [80, 2, 2] },
    { level: 90, xp: 3423125, mora: 684800, accurate: [171, 0, 4] },
];

export type Levels = 20 | 21 | 40 | 41 | 50 | 51 | 60 | 61 | 70 | 71 | 80 | 81 | 90;
