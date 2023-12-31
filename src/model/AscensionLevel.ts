export interface AscensionLevel {
  level: number;
  ascended: boolean;
}

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

/**
 * Calculates the index used for slicing the Ascension Item Table in the calculator.
 */
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

/**
 * Calculates the index used for slicing the XP Cost Table in the calculator.
 */
export function getLevelIndex(level: AscensionLevel): number {
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
