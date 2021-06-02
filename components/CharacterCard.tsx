import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import RarityStars from "./RarityStars";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import buildDB from "../lib/buildsDatabase";
import _ from "lodash";

export default function CharacterCard({
    character,
    className,
    compact = false,
}: {
    character: any;
    className?: string;
    compact?: boolean;
}) {
    const isProbablyTouch = useMediaQuery({ maxDeviceWidth: 1023 });
    const route = useRouter();
    const elementId = character.element;

    function maxChar() {
        buildDB.builds
            .add({
                characterId: character.id,
                level: { start: 1, goal: 90 },
                normal: { start: 1, goal: 10 },
                elemental: { start: 1, goal: 10 },
                burst: { start: 1, goal: 10 },
            })
            .then(() => {
                route.push("/builds");
            });
    }

    const cardHoverDialog = (
        <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-full group-hover:h-full">
            <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-0 group-hover:bg-opacity-80 bg-gscale-dark-background-ternary">
                <Link href={`/build/${character.id}`}>
                    <a
                        className={`btn focus:outline-none shadow hover:bg-opacity-90 opacity-0 font-medium group-hover:opacity-100 bg-genshin-dark-element-${elementId} text-gscale-dark-text-primary`}
                    >
                        Build {character.name}
                    </a>
                </Link>
                <button
                    onClick={maxChar}
                    className={`btn mt-3 focus:outline-none shadow hover:ring-opacity-90 ring-2 hover:bg-opacity-30 hover:bg-gscale-dark-background-ternary ring-inset ring-genshin-dark-element-${elementId} text-genshin-dark-element-${elementId} opacity-0 font-medium group-hover:opacity-100`}
                >
                    Lvl 1 to Max
                </button>
            </div>
        </div>
    );

    const card = (
        <>
            {compact ? null : (
                <div className="relative flex items-center justify-center overflow-hidden bg-gscale-dark-background-secondary">
                    <Image
                        src={`/images/characters/card/${character.id}.png`}
                        layout="intrinsic"
                        height="300"
                        width="480"
                        quality="85"
                        alt={`Genshin Impact Character ${character.name}`}
                    />
                    {isProbablyTouch ? null : cardHoverDialog}
                </div>
            )}
            <div className="px-4 py-3">
                <div className="flex flex-wrap items-center">
                    <span className={`text-genshin-element-${elementId} mr-1`}>
                        {_.upperFirst(character.element)}
                    </span>
                    <span className="text-gscale-dark-text-secondary mr-0.5 opacity-80">
                        {_.upperFirst(character.weapon)}
                    </span>
                    <RarityStars
                        rarity={character.rarity}
                        className="inline w-auto h-5"
                    />
                </div>

                <h3 className="mt-1 text-lg font-medium text-gscale-dark-text-primary">
                    {character.name}
                </h3>
            </div>
        </>
    );

    if (isProbablyTouch) {
        return (
            <Link href={`build/${character.id}`}>
                <a
                    className={cn(
                        `relative group bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg ring-genshin-element-${elementId} hover:ring`,
                        className
                    )}
                >
                    {card}
                </a>
            </Link>
        );
    } else {
        return (
            <div
                className={cn(
                    `relative group bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg ring-genshin-element-${elementId} hover:ring`,
                    className
                )}
            >
                {card}
            </div>
        );
    }
}
