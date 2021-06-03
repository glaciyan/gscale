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
                <h1 className="mb-2 font-bold">{character.characterId}</h1>
                <div>
                    Lvl: {character.level.start} to {character.level.goal}
                </div>
                <div>
                    Normal: {character.normal.start} to {character.normal.goal}
                </div>
                <div>
                    Elemental: {character.elemental.start} to {character.elemental.goal}
                </div>
                <div>
                    Burst: {character.burst.start} to {character.burst.goal}
                </div>
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
