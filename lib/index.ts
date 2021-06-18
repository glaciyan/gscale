export function toId(name: string) {
    return name.trim().replace(/'/g, "").replace(/[ -]/g, "_").toLowerCase();
}

// combines objects inside of an array based of a given field(distinction) and sums up the specified numberField
export function sumObjectArray(array: any[], distinction: string, numberField: string) {
    const out: any[] = [];
    array.forEach((arrayItem) => {
        const match = out.find((value) => value[distinction] === arrayItem[distinction]);

        if (match) {
            match[numberField] += arrayItem[numberField];
        } else {
            out.push(arrayItem);
        }
    });

    return out;
}

export function getAscensionLevel(level: number): number {
    if (level >= 21 && level <= 40) return 1;
    else if (level >= 41 && level <= 50) return 2;
    else if (level >= 51 && level <= 60) return 3;
    else if (level >= 61 && level <= 70) return 4;
    else if (level >= 71 && level <= 80) return 5;
    else if (level >= 81) return 6;
    else return 0;
}
