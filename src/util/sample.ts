/**
 * Returns a random element of array.
 */
export default function (array: any[]): any {
  const length = array == null ? 0 : array.length;
  return length ? array[Math.floor(Math.random() * length)] : undefined;
}
