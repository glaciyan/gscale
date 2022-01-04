import { INamed } from "../contracts/INamed";

// Get an object by normalizedName, undefined if nothing was found
export function getById<T extends INamed>(from: { [key: string]: T }, id: string): T | undefined {
  const matchingKeyObject = Object.entries(from).find(([, named]) => named.normalizedName === id);
  if (matchingKeyObject === undefined) return undefined;

  const [, value] = matchingKeyObject;
  return value;
}
