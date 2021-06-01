import {
    getCharacterMaterials,
    getTalentMaterials,
} from "../lib/characterMaterials";
import { totalXpAndMora } from "../lib";
import buildsDB from "../lib/buildsDatabase";

export default function CharacterBuild({
    build: character,
    className,
}: {
    build: any;
    className?: string;
}) {
    const { xp: sxp } = totalXpAndMora(80);
    const { xp, mora } = totalXpAndMora(character.level.goal);
    const ascensionMats = getCharacterMaterials(
        character,
        character.level.goal
    );
    // const talentMats = getTalentMaterials(character, 2);

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
                    console.log(ascensionMats);
                }}
            >
                log asc mats
            </a>
            {" | "}
            <a
                href="#"
                className="text-purple-400 hover:underline"
                onClick={() => {
                    console.log(getTalentMaterials(character, 1, 10));
                }}
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
