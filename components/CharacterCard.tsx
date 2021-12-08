import cn from "classnames";
import Link from "next/link";
import { upperCaseFirst } from "upper-case-first";
import { Character } from "../lib/MyTypes";
import { CLSPicture } from "./CLSPicture";
import RarityStars from "./RarityStars";

export default function CharacterCard({
    character,
    className,
}: {
    character: Character;
    className?: string;
}) {
    return (
        <Link href={`/build/${character.id}`}>
            <a
                title={`Build ${character.name}`}
                className={cn(
                    `relative group bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg ring-genshin-element-${character.element} transition-all hover:ring`,
                    className
                )}
            >
                <div
                    className="bg-gscale-dark-background-secondary flex relative items-center justify-center overflow-hidden"
                    id={character.id}
                >
                    <CLSPicture
                        name={`/images/characters/card/${
                            character.imageId ?? character.id
                        }`}
                        width="480"
                        height="300"
                        loading="lazy"
                        alt={`${character.name}`}
                        className={`absolute inset-0 p-0 m-auto block max-w-full max-h-full min-h-full min-w-full`}
                    />
                </div>
                <div className="py-3 px-4">
                    <div className="flex flex-wrap items-center">
                        <span
                            className={`text-genshin-element-${character.element} mr-1`}
                        >
                            {upperCaseFirst(character.element)}
                        </span>
                        <span className="text-gscale-dark-text-secondary mr-0.5 opacity-80">
                            {upperCaseFirst(character.weapon)}
                        </span>
                        <RarityStars
                            rarity={character.rarity}
                            className="h-5 w-auto inline"
                        />
                    </div>

                    <span className="font-medium mt-1 text-lg text-gscale-dark-text-primary w-max hover:underline">
                        {character.name}
                    </span>
                </div>
            </a>
        </Link>
    );
}
