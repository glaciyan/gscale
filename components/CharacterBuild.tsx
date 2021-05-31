import { getCharacterMaterials } from "../data/characterMaterials";
import { totalXpAndMora } from "../data/characterXpMora";
import buildsDB from "../lib/builds";

export default function CharacterBuild({
    build: character,
    className,
}: {
    build: any;
    className?: string;
}) {
    const { xp: sxp } = totalXpAndMora(80);
    const { xp } = totalXpAndMora(character.level.goal);
    const mats = getCharacterMaterials(character, character.level.goal);

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
                    console.log(xp - sxp);
                }}
            >
                log xp
            </a>
            {" | "}
            <a
                href="#"
                className="text-green-400 hover:underline"
                onClick={() => {
                    console.log(mats);
                }}
            >
                log asc mats
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
