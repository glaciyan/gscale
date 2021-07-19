import { characters } from "../data/characters";
import CompletionItemGrid from "./CompletionItemGrid";
import { LevelShowcase } from "./LevelShowcase";
import { SparklesIcon, TrendingUpIcon, FireIcon } from "@heroicons/react/outline";
import { SwordIcon } from "./icons/sword";
import { Button } from "./Button";
import React, { useState } from "react";
import Link from "next/link";
import { CharacterLevel } from "./CharacterLevel";
import { ConfirmDeleteDialouge } from "./ConfirmDeleteDialouge";
import { calculateMaterials } from "../lib/characterMaterials";
import { toLevel } from "../lib";
import { upperCaseFirst } from "upper-case-first";

export default function CharacterBuild({ build }: { build: any }) {
    const character = characters[build.characterId];
    const [isDialogueVisible, setisDialogueVisible] = useState(false);

    if (!character) return null;

    const materials = calculateMaterials(character, {
        level: build.level,
        normal: build.normal,
        elemental: build.elemental,
        burst: build.burst,
    });

    const levelStart = toLevel(build.level.start);
    const levelGoal = toLevel(build.level.goal);

    const imageName = `/images/characters/card/${character.imageId ?? character.id}`;

    return (
        <>
            <ConfirmDeleteDialouge
                build={build}
                isVisible={isDialogueVisible}
                setVisible={setisDialogueVisible}
            />
            <div className="flex flex-col rounded-md shadow-md bg-gscale-dark-background-secondary">
                <div className="sm:flex sm:flex-1">
                    <div className="relative flex p-4">
                        <div className="absolute inset-x-0 top-0 z-0 w-full h-32 overflow-hidden rounded-tl-md maxsm:rounded-tr-md">
                            <picture>
                                <img
                                    src={`${imageName}.png`}
                                    alt={character.name}
                                    width="480"
                                    height="300"
                                    className="object-cover w-full h-full opacity-25"
                                />
                            </picture>
                        </div>
                        <div className="absolute inset-x-0 top-0 z-10 w-full bg-gradient-to-t from-gscale-dark-background-secondary to-transparent h-32 overflow-hidden rounded-tl-md maxsm:rounded-tr-md"></div>
                        {/* <div className="flex justify-center flex-1 sm:hidden">
                        <ItemCharacterCard className="mx-2" character={character} />
                    </div> */}
                        <div className="sm:mx-3 mx-1 mb-2 z-20">
                            <h1 className="mb-2 text-lg font-bold">
                                {character.name}{" "}
                                {character.imageId === "traveler" ? (
                                    <span
                                        className={`text-genshin-element-${character.element}`}
                                    >
                                        {upperCaseFirst(character.element)}
                                    </span>
                                ) : null}
                            </h1>
                            <div className="flex flex-wrap sm:block">
                                <LevelShowcase
                                    left={<CharacterLevel level={levelStart} />}
                                    right={<CharacterLevel level={levelGoal} />}
                                    icon={<TrendingUpIcon className="iconsm" />}
                                    label={"Level"}
                                    element={character.element}
                                    className={`w-full sm:w-max sm:!mt-0`}
                                    numberClassName={`maxsm:w-12`}
                                ></LevelShowcase>
                                <LevelShowcase
                                    left={build.normal.start}
                                    right={build.normal.goal}
                                    icon={<SwordIcon className="iconsm" />}
                                    label={"Normal"}
                                    element={character.element}
                                    className={`sm:!mt-2`}
                                ></LevelShowcase>
                                <LevelShowcase
                                    left={build.elemental.start}
                                    right={build.elemental.goal}
                                    icon={<SparklesIcon className="iconsm" />}
                                    label={"Elemental"}
                                    element={character.element}
                                    className={`sm:!mt-2`}
                                ></LevelShowcase>
                                <LevelShowcase
                                    left={build.burst.start}
                                    right={build.burst.goal}
                                    icon={<FireIcon className="iconsm" />}
                                    label={"Burst"}
                                    element={character.element}
                                    className={`sm:!mt-2`}
                                ></LevelShowcase>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow p-5 rounded-md bg-gscale-dark-background-primary bg-opacity-60">
                        <CompletionItemGrid build={build} items={materials} />
                    </div>
                </div>
                <div className="flex items-center justify-end px-4 py-3 border-t-2 border-gscale-dark-background-500">
                    <Button
                        link
                        color={"gscale-dark-text-ternary"}
                        text="Delete"
                        onClick={() => setisDialogueVisible(true)}
                        className="mr-4"
                    />
                    <Link href={`/build/${character.id}?edit=${build.id}`}>
                        <a className="mr-2">
                            <Button
                                secondary
                                color={`genshin-element-${character.element}`}
                                text="Edit"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}
