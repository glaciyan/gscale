import { compareAscension } from "./compareAscension";
import { AscensionLevel } from "../interfaces/AscensionLevel";

// TODO prettier is a problem in this file
export function getAscensionStage(level: AscensionLevel): number {
  if (
    compareAscension(level, { level: 20, ascended: true }).isGreaterOrEqual() &&
    compareAscension(level, { level: 40, ascended: false }).isLessOrEqual()
  ) {
    return 1;
  } else if (
    compareAscension(level, { level: 40, ascended: true }).isGreaterOrEqual() &&
    compareAscension(level, { level: 50, ascended: false }).isLessOrEqual()
  ) {
    return 2;
  } else if (
    compareAscension(level, { level: 50, ascended: true }).isGreaterOrEqual() &&
    compareAscension(level, { level: 60, ascended: false }).isLessOrEqual()
  ) {
    return 3;
  } else if (
    compareAscension(level, { level: 60, ascended: true }).isGreaterOrEqual() &&
    compareAscension(level, { level: 70, ascended: false }).isLessOrEqual()
  ) {
    return 4;
  } else if (
    compareAscension(level, { level: 70, ascended: true }).isGreaterOrEqual() &&
    compareAscension(level, { level: 80, ascended: false }).isLessOrEqual()
  ) {
    return 5;
  } else if (compareAscension(level, { level: 80, ascended: true }).isGreaterOrEqual()) {
    return 6;
  } else {
    return 0;
  }
}
