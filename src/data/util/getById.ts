import { IdIndex } from "../contracts/UsingId";

export function getById<T>(from: IdIndex<T>, id: string): T | undefined {
    const matchingIdObject = Object.entries(from).find(([key]) => key === id);
    if (matchingIdObject === undefined) return undefined;

    const [, value] = matchingIdObject;
    return value;
}
