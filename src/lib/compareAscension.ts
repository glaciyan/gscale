import { AscensionLevel } from "~/lib/interfaces/AscensionLevel";

/**
 * Compare 2 ascension levels
 * @returns 1: first is greater than second, 0: first and second is equal, -1: first is smaller than second
 */
export function compareAscension(first: AscensionLevel, second: AscensionLevel): number {
  // greater from level
  if (first.level > second.level) {
    return 1;
  }

  if (first.level === second.level) {
    // equal
    if (first.ascended === second.ascended) {
      return 0;
    }

    // greater because first is ascended and second isn't
    if (first.ascended && !second.ascended) {
      return 1;
    }

    // smaller because first isn't ascended but second is
    if (!first.ascended && second.ascended) {
      return -1;
    }
  }

  // otherwise first is smaller
  return -1;
}
