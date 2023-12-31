export function range(size: number, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}
