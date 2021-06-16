import React from "react";
import { Character } from "../data/characters";
import { toId } from "../lib";
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

    const local = ci.local(1).name;
    const common = ci.common(1, 1).name;
    const boss = ci.boss(1).name;
    const gem = ci.gem(5, 1).name;
    const book = ci.book(4, 1).name;
    const weekly = ci.weekly(1).name;

    return (
        <div
            className={`hidden py-6 border-t-2 border-gscale-dark-background-primary sm:block ${className}`}
        >
            <ShowcaseRow>
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(local)}.png`}
                    imageName={local}
                />
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(common)}.png`}
                    imageName={common}
                />
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(boss)}.png`}
                    imageName={boss}
                />
            </ShowcaseRow>
            <ShowcaseRow className="flex">
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(gem)}.png`}
                    imageName={gem}
                />
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(book)}.png`}
                    imageName={book}
                />
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(weekly)}.png`}
                    imageName={weekly}
                />
            </ShowcaseRow>
        </div>
    );
};
