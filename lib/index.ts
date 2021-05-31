export function toId(name: string) {
    return name.replace(/'/g, "").replace(/[ -]/g, "_").toLowerCase();
}

export function additionOrCreate(
    array: { id: string; amount: number }[],
    id: string,
    amount: number
) {
    const sameIdEntry = array.find((entry) => entry.id === id);

    if (sameIdEntry !== undefined) {
        sameIdEntry.amount += amount;
    } else {
        array.push({ id: id, amount: amount });
    }
}
