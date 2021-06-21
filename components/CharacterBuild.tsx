import { getCharacterMaterials } from "../lib/characterMaterials";
import { characters } from "../data/characters";
import CompletionItemGrid from "./CompletionItemGrid";
import { ItemCharacterCard } from "./ItemCharacterCard";
import { LevelShowcase } from "./LevelShowcase";
import { SparklesIcon, TrendingUpIcon, FireIcon } from "@heroicons/react/outline";
import { SwordIcon } from "./icons/sword";
import { Button } from "./Button";
import { Dispatch, SetStateAction } from "react";

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
        <div className="rounded-md bg-gscale-dark-background-secondary bg-opacity-60">
            <div className="flex">
                <div className="flex flex-col items-center m-4 mr-8">
                    <ItemCharacterCard className="" character={character} />
                    <Button
                        secondary
                        color={`genshin-element-${character.element}`}
                        text="Edit"
                        className="mt-5"
                    />

                    <Button
                        link
                        color={"gscale-dark-text-ternary"}
                        text="Delete"
                        className="mt-2"
                        onClick={() => setDeletingBuild(build)}
                    />

                    {/* <button
                        className="font-medium bg-red-500 text-gscale-dark-text-primary hover:bg-opacity-90 btn hover:underline"
                        onClick={async () => {
                            await buildsDB.builds.delete(build.id);
                        }}
                    >
                        Delete
                    </button>
                    <Link href={`/build/${character.id}?edit=${build.id}`}>
                        <a className="block !py-1.5 bg-blue-500 text-gscale-dark-text-primary font-medium hover:bg-opacity-90 btn hover:underline">
                            edit
                        </a>
                    </Link> */}
                </div>
                <div className="flex-grow mt-4">
                    <h1 className="text-lg font-bold">{character.name}</h1>
                    <LevelShowcase
                        className="mt-3"
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

            <div>
                <h2 className="mt-3 font-bold">Materials needed:</h2>
                <CompletionItemGrid build={build} items={materials.everything} />
            </div>
        </div>
    );
}
