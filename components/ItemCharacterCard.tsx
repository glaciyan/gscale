import React from "react";
import Img from "react-optimized-image";
import { Character } from "../lib/MyTypes";
import RarityStars from "./RarityStars";

interface ItemCharacterCardProps {
    character: Character;
    className?: string;
}

export const ItemCharacterCard: React.FC<ItemCharacterCardProps> = ({
    character,
    className = "",
}) => {
    return (
        <div className={`w-max ${className}`}>
            <Img
                className="bg-gscale-dark-background-secondary rounded-t-md"
                src={require(`../public/images/characters/mugshot/${character.id}.png?width=100?height=100`)}
                alt={character.name}
            />
            <div className="flex items-center justify-center bg-gscale-dark-background-primary py-0.5 rounded-b-md">
                <RarityStars rarity={character.rarity} className="h-5" />
            </div>
        </div>
    );
};
