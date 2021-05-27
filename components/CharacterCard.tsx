import Image from "next-native-image";
import { CharacterProperties } from "../interfaces";
import RarityStars from "./RarityStars";
import { toId } from "../lib";
import Link from "next/link";
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
        <Link href={`/characters/${characterName.toLowerCase()}`}>
            <a
                className={cn(
                    "block bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow-md w-[240px] h-[230px]",
                    className
                )}
            >
                {compact ? null : (
                    <div className="aspect-w-5 aspect-h-3 bg-gscale-dark-background-secondary">
                        <Image
                            src={`/images/characters/card/${toId(
                                characterName
                            )}.png`}
                            layout="native"
                            width="400"
                            quality="85"
                            className="object-cover w-full h-full"
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

                    <div className="mt-1 text-lg text-gscale-dark-text-primary hover:underline">
                        {characterName}
                    </div>
                </div>
            </a>
        </Link>
    );
}
