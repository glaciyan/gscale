import Image from "next/image";
import { CharacterProperties } from "../interfaces";
import { useMediaQuery } from "react-responsive";
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
    const elementId = toId(character.element);
    const nameId = toId(characterName);

    const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });

    const cardHoverDialog = (
        <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-full group-hover:h-full">
            <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-0 group-hover:bg-opacity-80 bg-gscale-dark-background-ternary">
                <button
                    onClick={buildCharacter}
                    className={`btn focus:outline-none shadow hover:bg-opacity-90 opacity-0 font-medium group-hover:opacity-100 bg-genshin-dark-element-${elementId} text-gscale-dark-text-primary`}
                >
                    Build {characterName}
                </button>
                <button
                    onClick={maxCharacter}
                    className={`btn mt-3 focus:outline-none shadow hover:ring-opacity-90 ring-2 hover:bg-opacity-30 hover:bg-gscale-dark-background-ternary ring-inset ring-genshin-dark-element-${elementId} text-genshin-dark-element-${elementId} opacity-0 font-medium group-hover:opacity-100`}
                >
                    Lvl 1 to Max
                </button>
            </div>
        </div>
    );

    function buildCharacter() {
        console.log("building " + nameId);
    }

    function maxCharacter() {
        console.log("maxxing " + nameId);
    }

    return (
        <div
            onClick={() => {
                if (isMobile) {
                    buildCharacter();
                }
            }}
            className={cn(
                `relative group bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg ring-genshin-element-${elementId} hover:ring`,
                className
            )}
        >
            {compact ? null : (
                <div className="relative flex items-center justify-center overflow-hidden bg-gscale-dark-background-secondary">
                    <Image
                        src={`/images/characters/card/${nameId}.png`}
                        layout="intrinsic"
                        height="300"
                        width="480"
                        quality="85"
                        alt={`Genshin Impact Character ${characterName}`}
                    />
                    {!isMobile ? cardHoverDialog : null}
                </div>
            )}
            <div className="px-4 py-3">
                <div className="flex flex-wrap items-center">
                    <span className={`text-genshin-element-${elementId} mr-1`}>
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
