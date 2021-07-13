import { getCharacterMaterials } from "../lib/characterMaterials";
import { characters } from "../data/characters";
import CompletionItemGrid from "./CompletionItemGrid";
import { LevelShowcase } from "./LevelShowcase";
import { SparklesIcon, TrendingUpIcon, FireIcon } from "@heroicons/react/outline";
import { SwordIcon } from "./icons/sword";
import { Button } from "./Button";
import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { toLevel } from "../lib/getCharacterLevel";
import { CharacterLevel } from "./CharacterLevel";
import { ConfirmDeleteDialouge } from "./ConfirmDeleteDialouge";

export default function CharacterBuild({ build }: { build: any }) {
    const character = characters[build.characterId];
    const [isDialogueVisible, setisDialogueVisible] = useState(false);

    if (!character) return null;

    const materials = getCharacterMaterials(character, {
        level: build.level,
        normal: build.normal,
        elemental: build.elemental,
        burst: build.burst,
    });

    const levelStart = toLevel(build.level.start);
    const levelGoal = toLevel(build.level.goal);

    return (
        <>
            <ConfirmDeleteDialouge
                build={build}
                isVisible={isDialogueVisible}
                setVisible={setisDialogueVisible}
            />
            <div className="flex flex-col rounded-md shadow-md bg-gscale-dark-background-secondary">
                <div className="sm:flex">
                    <div className="flex p-4">
                        {/* <div className="flex justify-center flex-1 sm:hidden">
                        <ItemCharacterCard className="mx-2" character={character} />
                    </div> */}
                        <div className="mx-3 mb-2">
                            <h1 className="mb-2 text-lg font-bold">{character.name}</h1>
                            <div className="grid grid-cols-2 gap-5 sm:block">
                                <LevelShowcase
                                    className=""
                                    left={<CharacterLevel level={levelStart} />}
                                    right={<CharacterLevel level={levelGoal} />}
                                    icon={<TrendingUpIcon className="iconsm" />}
                                    label={"Level"}
                                    element={character.element}
                                ></LevelShowcase>
                                <LevelShowcase
                                    className="sm:mt-2"
                                    left={build.normal.start}
                                    right={build.normal.goal}
                                    icon={<SwordIcon className="iconsm" />}
                                    label={"Normal"}
                                    element={character.element}
                                ></LevelShowcase>
                                <LevelShowcase
                                    className="sm:mt-2"
                                    left={build.elemental.start}
                                    right={build.elemental.goal}
                                    icon={<SparklesIcon className="iconsm" />}
                                    label={"Elemental"}
                                    element={character.element}
                                ></LevelShowcase>
                                <LevelShowcase
                                    className="sm:mt-2"
                                    left={build.burst.start}
                                    right={build.burst.goal}
                                    icon={<FireIcon className="iconsm" />}
                                    label={"Burst"}
                                    element={character.element}
                                ></LevelShowcase>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow p-5 rounded-md bg-gscale-dark-background-primary bg-opacity-60">
                        <CompletionItemGrid build={build} items={materials.everything} />
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
