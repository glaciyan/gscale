import Image from "next/image";
import RarityStars from "./RarityStars";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import buildDB from "../lib/buildsDatabase";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Button } from "./Button";

function useIsTouch() {
    const [isTouch, setisTouch] = useState(false);

    useEffect(() => {
        setisTouch(
            (() => {
                try {
                    document.createEvent("TouchEvent");
                    return true;
                } catch {
                    return false;
                }
            })()
        );
    });

    return isTouch;
}

export default function CharacterCard({
    character,
    className,
    compact = false,
}: {
    character: any;
    className?: string;
    compact?: boolean;
}) {
    const isProbablyTouch = useIsTouch();
    const route = useRouter();
    const elementId = character.element;

    const [loadingmax, setLoadingmax] = useState(false);
    function maxChar() {
        setLoadingmax(true);
        buildDB.builds
            .add({
                type: "character",
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
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full transition-all bg-opacity-0 group-hover:bg-opacity-80 bg-gscale-dark-background-ternary backdrop-filter group-hover:backdrop-blur-sm">
                <Link href={`/build/${character.id}`}>
                    <a
                        className={`buttoncommon focus:outline-none transition-opacity shadow hover:bg-opacity-90 opacity-0 font-medium group-hover:opacity-100 bg-genshin-dark-element-${elementId} text-gscale-dark-text-primary mb-3`}
                    >
                        Build {character.name}
                    </a>
                </Link>
                <Button
                    secondary
                    isLoading={loadingmax ? 1 : undefined}
                    color={`genshin-dark-element-${elementId}`}
                    onClick={maxChar}
                    text="0 to Max"
                    className="!ring-2 transition-opacity opacity-0 group-hover:opacity-100"
                />
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
                        alt={`${character.name}`}
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

                <Link href={`/build/${character.id}`}>
                    <a className="mt-1 text-lg font-medium text-gscale-dark-text-primary hover:underline">
                        {character.name}
                    </a>
                </Link>
            </div>
        </>
    );

    if (isProbablyTouch) {
        return (
            <Link href={`build/${character.id}`}>
                <a
                    className={cn(
                        `relative group bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg ring-genshin-element-${elementId} transition-all hover:ring`,
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
                    `relative group bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg ring-genshin-element-${elementId} transition-all hover:ring`,
                    className
                )}
            >
                {card}
            </div>
        );
    }
}
