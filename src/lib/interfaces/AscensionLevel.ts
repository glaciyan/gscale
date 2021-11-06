export interface AscensionLevel {
  level: number;
  ascended: boolean;
}

export const Levels: AscensionLevel[] = [
  { level: 1, ascended: false },
  { level: 20, ascended: false },
  { level: 20, ascended: true },
  { level: 40, ascended: false },
  { level: 40, ascended: true },
  { level: 50, ascended: false },
  { level: 50, ascended: true },
  { level: 60, ascended: false },
  { level: 60, ascended: true },
  { level: 70, ascended: false },
  { level: 70, ascended: true },
  { level: 80, ascended: false },
  { level: 80, ascended: true },
  { level: 90, ascended: false },
];
