import { getCharacterMaterials } from "../lib/characterMaterials";
import buildsDB from "../lib/buildsDatabase";
import { characters } from "../data/characters";

export default function CharacterBuild({ build: character, className }: { build: any; className?: string }) {
    const ascensionMats = getCharacterMaterials(
        characters[character.characterId],
        character.level,
        { start: 1, goal: 10 },
        character.elemental,
        character.burst
    );

    return (
        <div className={className}>
            <span>
                {character.characterId} ({character.level.start} to {character.level.goal})
            </span>
            {" - "}

            <a
                href="#"
                className="text-blue-400 hover:underline"
                onClick={() => {
                    console.log(ascensionMats);
                }}
            >
                log materials
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
