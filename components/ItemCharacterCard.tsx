import React from "react";
// import Img from "react-optimized-image";
import Image from "next-native-image";
import { Character } from "../data/characters";
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
            <Image
                layout="native"
                width={128}
                className="bg-gscale-dark-background-secondary rounded-t-md w-28 h-28"
                src={`/images/characters/mugshot/${character.id}.png`}
                alt={character.name}
            />
            <div className="flex items-center justify-center bg-gscale-dark-background-primary py-0.5 rounded-b-md">
                <RarityStars rarity={character.rarity} className="h-5" />
            </div>
        </div>
    );
};
