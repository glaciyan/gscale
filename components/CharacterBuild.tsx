import { getCharacterMaterials } from "../lib/characterMaterials";
import buildsDB from "../lib/buildsDatabase";
import { characters } from "../data/characters";
import ItemGrid from "./ItemGrid";

export default function CharacterBuild({ build: character, className }: { build: any; className?: string }) {
    const materials = getCharacterMaterials(
        characters[character.characterId],
        character.level,
        character.normal,
        character.elemental,
        character.burst
    );

    return (
        <div className={className}>
            <div>
                <span>
                    {character.characterId} ({character.level.start} to {character.level.goal})
                </span>
                {" - "}

                <a
                    href="#"
                    className="text-blue-400 hover:underline"
                    onClick={() => {
                        console.log(materials);
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
            <ItemGrid items={materials.materials} />
        </div>
    );
}
