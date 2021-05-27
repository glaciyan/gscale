export interface CharacterProperties {
    name: string;
    rarity: number;
    constellation: string;
    description: string;
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
