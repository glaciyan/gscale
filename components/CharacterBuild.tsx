import { getCharacterMaterials } from "../lib/characterMaterials";
import buildsDB from "../lib/buildsDatabase";
import { characters } from "../data/characters";
import CompletionItemGrid from "./CompletionItemGrid";
import Link from "next/link";

export default function CharacterBuild({
    build,
    className,
}: {
    build: any;
    className?: string;
}) {
    const character = characters[build.characterId];
    const materials = getCharacterMaterials(
        character,
        build.level,
        build.normal,
        build.elemental,
        build.burst
    );

    return (
        <div className={className}>
            <div className="relative">
                <h1 className="text-lg font-bold">{character.name}</h1>
                <div>
                    Level: {build.level.start} to {build.level.goal}
                </div>
                <div>
                    Normal: {build.normal.start} to {build.normal.goal}
                </div>
                <div>
                    Elemental: {build.elemental.start} to {build.elemental.goal}
                </div>
                <div>
                    Burst: {build.burst.start} to {build.burst.goal}
                </div>
                <button
                    className="absolute top-0 right-0 !py-1.5 bg-red-500 text-gscale-dark-text-primary font-medium hover:bg-opacity-90 btn hover:underline"
                    onClick={async () => {
                        await buildsDB.builds.delete(build.id);
                    }}
                >
                    Delete
                </button>

                <Link href={`/build/${character.id}?edit=${build.id}`}>
                    <a className="absolute top-0 right-40 !py-1.5 bg-blue-500 text-gscale-dark-text-primary font-medium hover:bg-opacity-90 btn hover:underline">
                        edit
                    </a>
                </Link>
            </div>
            <h2 className="mt-3 font-bold">Materials needed:</h2>
            <CompletionItemGrid build={build} items={materials.everything} />
        </div>
    );
}
