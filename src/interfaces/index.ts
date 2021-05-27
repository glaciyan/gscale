export interface CharacterProperties {
    rarity: number;
    element: string;
    weapon: string;
    sub: string;
    ascension: string;
    local: string;
    common: string;
    weekly: string;
    book: string;
}

export interface Characters {
    [name: string]: CharacterProperties;
}
