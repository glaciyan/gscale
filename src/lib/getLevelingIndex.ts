import { compareAscension } from "./compareAscension";
import { AscensionLevel } from "./interfaces/AscensionLevel";

export default (level: AscensionLevel): number => {
  function f(at: number) {
    return compareAscension(level, { level: at, ascended: false }).isGreaterOrEqual();
  }

  if (f(90)) return 7;
  if (f(80)) return 6;
  if (f(70)) return 5;
  if (f(60)) return 4;
  if (f(50)) return 3;
  if (f(40)) return 2;
  if (f(20)) return 1;
  return 0;
};
