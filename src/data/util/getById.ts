import { UsingId } from "../contracts/UsingId";

export function getById<T extends UsingId>(
    from: T[],
    id: string | number
): T | undefined {
    return from.find((f) => f.id === id);
}
