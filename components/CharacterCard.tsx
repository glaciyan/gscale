import Image from "next/image";
import RarityStars from "./RarityStars";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import buildDB from "../lib/buildsDatabase";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { If } from "./If";
import { upperCaseFirst } from "upper-case-first";
import { Character } from "../lib/MyTypes";
import { toBase64 } from "next/dist/next-server/lib/to-base-64";

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
}: {
    character: Character;
    className?: string;
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
            <div className="flex flex-col items-center justify-center w-full h-full transition-all bg-opacity-0 group-hover:bg-opacity-60 bg-gscale-dark-background-ternary">
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
                    className="!ring-2 transition-all opacity-0 group-hover:opacity-100"
                />
            </div>
        </div>
    );

    const imageName = `/images/characters/card/${character.imageId ?? character.id}`;

    const card = (
        <>
            <div
                className="relative flex items-center justify-center overflow-hidden bg-gscale-dark-background-secondary"
                id={character.id}
            >
                {/* i hope ill never have to clean this up */}
                <div
                    style={{
                        display: "inline-block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        position: "relative",
                        boxSizing: "border-box",
                        margin: 0,
                    }}
                >
                    <div
                        style={{
                            boxSizing: "border-box",
                            display: "block",
                            maxWidth: "100%",
                        }}
                    >
                        <img
                            style={{
                                maxWidth: "100%",
                                display: "block",
                                margin: 0,
                                border: "none",
                                padding: 0,
                            }}
                            alt=""
                            aria-hidden={true}
                            role="presentation"
                            src={`data:image/svg+xml;base64,${toBase64(
                                `<svg width="${480}" height="${300}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`
                            )}`}
                        />
                    </div>
                    <picture>
                        <source type="image/webp" srcSet={`${imageName}.webp`} />
                        <source type="image/png" srcSet={`${imageName}.png`} />
                        <img
                            src={`${imageName}.png`}
                            height="300"
                            width="480"
                            loading="lazy"
                            decoding="async"
                            alt={`${character.name}`}
                            className={`absolute inset-0 p-0 m-auto block max-w-full max-h-full min-h-full min-w-full`}
                        />
                    </picture>
                </div>
                {isProbablyTouch ? null : cardHoverDialog}
            </div>
            <div className="px-4 py-3">
                <div className="flex flex-wrap items-center">
                    <span className={`text-genshin-element-${elementId} mr-1`}>
                        {upperCaseFirst(character.element)}
                    </span>
                    <span className="text-gscale-dark-text-secondary mr-0.5 opacity-80">
                        {upperCaseFirst(character.weapon)}
                    </span>
                    <RarityStars
                        rarity={character.rarity}
                        className="inline w-auto h-5"
                    />
                </div>

                <If
                    cif={isProbablyTouch}
                    celse={
                        <Link href={`/build/${character.id}`}>
                            <a className="mt-1 text-lg font-medium text-gscale-dark-text-primary hover:underline">
                                {character.name}
                            </a>
                        </Link>
                    }
                >
                    <h3 className="mt-1 text-lg font-medium text-gscale-dark-text-primary">
                        {character.name}
                    </h3>
                </If>
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
