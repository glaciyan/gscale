import React from "react";
import { Character } from "../data/characters";
import { ItemGen } from "../lib/ItemGen";
import MiniItemCard from "./ItemCard";

interface CharacterItemShowcaseProps {
    character: Character;
    className: string;
}

function ShowcaseRow({ children }: any) {
    return <div className="flex justify-center">{children}</div>;
}

export const CharacterItemShowcase: React.FC<CharacterItemShowcaseProps> = ({
    character,
    className,
}) => {
    const ci = new ItemGen(character);

    const local = ci.local(1);
    const common = ci.common(1, 1);
    const boss = ci.boss(1);
    const gem = ci.gem(5, 1);
    const book = ci.book(4, 1);
    const weekly = ci.weekly(1);

    return (
        <div
            className={`hidden py-6 border-t-2 border-gscale-dark-background-primary sm:block ${className}`}
        >
            <ShowcaseRow>
                <MiniItemCard item={local} />
                <MiniItemCard item={common} />
                <MiniItemCard item={boss} />
            </ShowcaseRow>
            <ShowcaseRow className="flex">
                <MiniItemCard item={gem} />
                <MiniItemCard item={book} />
                <MiniItemCard item={weekly} />
            </ShowcaseRow>
        </div>
    );
};
