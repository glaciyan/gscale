import React from "react";
import RarityStars from "./RarityStars";
import Image from "../lib/next-native-image";
import { Character } from "../lib/MyTypes";

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
                priority
                className="bg-gscale-dark-background-secondary rounded-t-md w-[100px] h-[100px]"
                src={`/images/characters/mugshot/${character.id}.png`}
                alt={character.name}
            />
            <div className="flex items-center justify-center bg-gscale-dark-background-primary py-0.5 rounded-b-md">
                <RarityStars rarity={character.rarity} className="h-5" />
            </div>
        </div>
    );
};
