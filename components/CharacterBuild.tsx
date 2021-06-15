import { getCharacterMaterials } from "../lib/characterMaterials";
import buildsDB from "../lib/buildsDatabase";
import { characters } from "../data/characters";
import ItemGrid from "./ItemGrid";
import MiniItemCard from "./MiniItemCard";
import millify from "millify";

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
                <a
                    href="#"
                    className="absolute top-0 right-0 !py-1.5 bg-red-500 text-gscale-dark-text-primary font-medium hover:bg-opacity-90 btn hover:underline"
                    onClick={async () => {
                        await buildsDB.builds.delete(build.id);
                    }}
                >
                    Delete
                </a>
            </div>
            <h2 className="mt-3 font-bold">Materials needed:</h2>
            <div className="flex -mb-3">
                <MiniItemCard
                    imageUrl="/images/materials/mora.png"
                    imageName="Mora"
                    label={millify(materials.mora)}
                />
                <MiniItemCard
                    imageUrl="/images/materials/heros_wit.png"
                    imageName="Hero's Wit"
                    label={String(materials.xpLazy.amount)}
                />
            </div>
            <ItemGrid items={materials.materials} />
        </div>
    );
}
