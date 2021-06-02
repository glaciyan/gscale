import { getCharacterMaterials } from "../lib/characterMaterials";
import buildsDB from "../lib/buildsDatabase";
import { characters } from "../data/characters";

export default function CharacterBuild({
    build: character,
    className,
}: {
    build: any;
    className?: string;
}) {
    const ascensionMats = getCharacterMaterials(
        characters[character.characterId],
        character.level.start,
        character.level.goal
    );

    return (
        <div className={className}>
            <span>
                {character.characterId} ({character.level.start} to{" "}
                {character.level.goal})
            </span>
            {" - "}

            <a
                href="#"
                className="text-blue-400 hover:underline"
                onClick={() => {
                    console.log(ascensionMats);
                }}
            >
                log asc mats
            </a>
            {" | "}
            <a
                href="#"
                className="text-green-400 hover:underline"
                onClick={() => {}}
            >
                log talent mats
            </a>

            <a
                href="#"
                className="float-right text-red-400 hover:underline"
                onClick={async () => {
                    await buildsDB.builds.delete(character.id);
                }}
            >
                delete
            </a>
        </div>
    );
}
