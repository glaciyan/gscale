import Image from "next/image";
import { CharacterProperties } from "../interfaces";
import RarityStars from "./RarityStars";
import { toId } from "../lib";
import cn from "classnames";

export default function CharacterCard({
    characterName,
    character,
    className,
    compact = false,
}: {
    characterName: string;
    character: CharacterProperties;
    className?: string;
    compact?: boolean;
}) {
    return (
        <div
            className={cn(
                "bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow",
                className
            )}
        >
            {compact ? null : (
                <div className="flex items-center overflow-hidden bg-gscale-dark-background-secondary">
                    <Image
                        src={`/images/characters/card/${toId(
                            characterName
                        )}.png`}
                        layout="intrinsic"
                        height="300"
                        width="480"
                        quality="85"
                        alt={`Genshin Impact Character ${characterName}`}
                    />
                </div>
            )}
            <div className="px-4 py-3">
                <div className="flex items-center">
                    <span
                        className={`text-genshin-element-${toId(
                            character.element
                        )} mr-1`}
                    >
                        {character.element}
                    </span>
                    <span className="text-gscale-dark-text-secondary mr-0.5 opacity-80">
                        {character.weapon}
                    </span>
                    <RarityStars
                        rarity={character.rarity}
                        className="inline w-auto h-5"
                    />
                </div>

                <h3 className="mt-1 text-lg font-medium text-gscale-dark-text-primary">
                    {characterName}
                </h3>
            </div>
        </div>
    );
}
