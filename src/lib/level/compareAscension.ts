import { AscensionLevel } from "~/lib/types/AscensionLevel";

class CompareAscensionResult {
  constructor(value: number) {
    this.value = value;
  }

  value: number;

  isGreater() {
    return this.value === 1;
  }

  isEqual() {
    return this.value === 0;
  }

  isLess() {
    return this.value === -1;
  }

  isGreaterOrEqual() {
    return this.isGreater() || this.isEqual();
  }

  isLessOrEqual() {
    return this.isLess() || this.isEqual();
  }
}

const Greater = () => new CompareAscensionResult(1);
const Equal = () => new CompareAscensionResult(0);
const Less = () => new CompareAscensionResult(-1);

/**
 * Compare 2 ascension levels
 * @returns 1: first is greater than second, 0: first and second is equal, -1: first is smaller than second
 */
export function compareAscension(first: AscensionLevel, second: AscensionLevel): CompareAscensionResult {
  // greater from level
  if (first.level > second.level) {
    return Greater();
  }

  if (first.level === second.level) {
    // equal
    if (first.ascended === second.ascended) {
      return Equal();
    }

    // greater because first is ascended and second isn't
    if (first.ascended && !second.ascended) {
      return Greater();
    }

    // smaller because first isn't ascended but second is
    if (!first.ascended && second.ascended) {
      return Less();
    }
  }

  // otherwise first is smaller
  return Less();
}
