export type Progression = { start: number; goal: number };

export interface LevelConfig {
    level: Progression;
    normal: Progression;
    elemental: Progression;
    burst: Progression;
}
