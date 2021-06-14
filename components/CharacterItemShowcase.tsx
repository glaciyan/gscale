import React from "react";
import { Character } from "../data/characters";
import { toId } from "../lib";
import { ItemGen } from "../lib/ItemGen";
import MiniItemCard from "./MiniItemCard";

interface CharacterItemShowcaseProps {
    character: Character;
}

function ShowcaseRow({ children }: any) {
    return <div className="flex justify-center">{children}</div>;
}

export const CharacterItemShowcase: React.FC<CharacterItemShowcaseProps> = ({
    character,
}) => {
    const ci = new ItemGen(character);

    return (
        <div className="hidden py-6 border-t-2 border-gscale-dark-background-primary sm:block">
            <ShowcaseRow>
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(ci.local(1).name)}.png`}
                    imageName="common"
                />
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(ci.common(1, 1).name)}.png`}
                    imageName="common"
                />
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(ci.boss(1).name)}.png`}
                    imageName="common"
                />
            </ShowcaseRow>
            <ShowcaseRow className="flex">
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(ci.gem(5, 1).name)}.png`}
                    imageName="common"
                />
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(ci.book(4, 1).name)}.png`}
                    imageName="common"
                />
                <MiniItemCard
                    imageUrl={`/images/materials/${toId(ci.weekly(1).name)}.png`}
                    imageName="common"
                />
            </ShowcaseRow>
        </div>
    );
};
