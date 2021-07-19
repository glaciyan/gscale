import React from "react";
import RarityStars from "./RarityStars";
import { Character } from "../lib/MyTypes";
import { PreloadImage } from "./PreloadNextImage";

interface ItemCharacterCardProps {
    character: Character;
    className?: string;
}

export const CharacterRarityMugshot: React.FC<ItemCharacterCardProps> = ({
    character,
    className = "",
}) => {
    return (
        <div className={`w-max ${className}`}>
            <PreloadImage
                src={`/images/characters/mugshot/${
                    character.imageId ?? character.id
                }.png`}
            />
            <img
                width={100}
                height={100}
                className="bg-gscale-dark-background-secondary rounded-t-md w-[100px] h-[100px]"
                src={`/images/characters/mugshot/${
                    character.imageId ?? character.id
                }.png`}
                alt={character.name}
            />
            <div className="flex items-center justify-center bg-gscale-dark-background-primary py-0.5 rounded-b-md">
                <RarityStars rarity={character.rarity} className="h-5" />
            </div>
        </div>
    );
};
