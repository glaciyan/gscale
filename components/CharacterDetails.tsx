import React from "react";
import Img from "react-optimized-image";
import { Character } from "../data/characters";
import Truncate from "react-truncate";
import RarityStars from "./RarityStars";

interface CharacterDetailsProps {
    character: Character;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
    return (
        <div className="flex-grow buildpagepadding rounded-t-md sm:rounded-tl-md lg:rounded-l-md bg-gscale-dark-background-ternary500 lg:flex-grow-0">
            <div className="mb-6 overflow-hidden rounded-md sm:-mt-2 w-max">
                <Img
                    className="bg-gscale-dark-background-secondary"
                    src={require(`../public/images/characters/mugshot/${character.id}.png?width=100?height=100`)}
                />
                <div className="flex items-center justify-center bg-gscale-dark-background-primary py-0.5">
                    <RarityStars rarity={character.rarity} className="h-5" />
                </div>
            </div>
            <div>
                <div className="font-bold text-gscale-dark-text-primary">
                    {character.name}
                </div>
                <div className="text-gscale-dark-text-secondary">
                    {character.constellation}
                </div>
                <Truncate
                    lines={4}
                    width={230}
                    ellipsis={"..."}
                    className="block mt-1 text-sm leading-4 text-gscale-dark-text-ternary font"
                    title={character.description}
                >
                    {character.description}
                </Truncate>
            </div>
        </div>
    );
};
