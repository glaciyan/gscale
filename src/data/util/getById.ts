import { IdIndex } from "../contracts/UsingId";

// Get an object by key or undefined if nothing was found
export function getById<T>(from: IdIndex<T>, id: string): T | undefined {
    const matchingKeyObject = Object.entries(from).find(([key]) => key === id);
    if (matchingKeyObject === undefined) return undefined;

    const [, value] = matchingKeyObject;
    return value;
}
