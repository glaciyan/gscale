import { getCharacterMaterials } from "../lib/characterMaterials";
import { characters } from "../data/characters";
import CompletionItemGrid from "./CompletionItemGrid";
import { ItemCharacterCard } from "./ItemCharacterCard";
import { LevelShowcase } from "./LevelShowcase";
import { SparklesIcon, TrendingUpIcon, FireIcon } from "@heroicons/react/outline";
import { SwordIcon } from "./icons/sword";
import { Button } from "./Button";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";

export default function CharacterBuild({
    build,
    setDeletingBuild,
}: {
    build: any;
    setDeletingBuild: Dispatch<SetStateAction<(() => void) | undefined>>;
}) {
    const character = characters[build.characterId];

    if (!character) return null;

    const materials = getCharacterMaterials(
        character,
        build.level,
        build.normal,
        build.elemental,
        build.burst
    );

    return (
        <div className="flex flex-col rounded-md bg-gscale-dark-background-secondary bg-opacity-60">
            <div className="sm:flex">
                <div className="flex p-4">
                    <div className="flex flex-col items-center mr-4">
                        <ItemCharacterCard className="" character={character} />
                        <Link href={`/build/${character.id}?edit=${build.id}`}>
                            <a>
                                <Button
                                    secondary
                                    color={`genshin-element-${character.element}`}
                                    text="Edit"
                                    className="mt-5"
                                />
                            </a>
                        </Link>
                        <Button
                            link
                            color={"gscale-dark-text-ternary"}
                            text="Delete"
                            className="mt-2"
                            onClick={() => setDeletingBuild(build)}
                        />
                    </div>
                    <div className="mx-4 mb-2">
                        <h1 className="mb-2 text-lg font-bold">{character.name}</h1>
                        <LevelShowcase
                            className=""
                            left={build.level.start}
                            right={build.level.goal}
                            icon={<TrendingUpIcon className="iconsm" />}
                            label={"Level"}
                            element={character.element}
                        ></LevelShowcase>
                        <LevelShowcase
                            className="mt-2"
                            left={build.normal.start}
                            right={build.normal.goal}
                            icon={<SwordIcon className="iconsm" />}
                            label={"Normal"}
                            element={character.element}
                        ></LevelShowcase>
                        <LevelShowcase
                            className="mt-2"
                            left={build.elemental.start}
                            right={build.elemental.goal}
                            icon={<SparklesIcon className="iconsm" />}
                            label={"Elemental"}
                            element={character.element}
                        ></LevelShowcase>
                        <LevelShowcase
                            className="mt-2"
                            left={build.burst.start}
                            right={build.burst.goal}
                            icon={<FireIcon className="iconsm" />}
                            label={"Burst"}
                            element={character.element}
                        ></LevelShowcase>
                    </div>
                </div>
                <div className="px-5 pt-2 pb-5 rounded-md bg-gscale-dark-background-primary bg-opacity-30">
                    <h2 className="mb-3 ">Materials</h2>
                    <CompletionItemGrid build={build} items={materials.everything} />
                </div>
            </div>
        </div>
    );
}
