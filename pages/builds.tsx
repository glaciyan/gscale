import buildsDB from "../lib/buildsDatabase";
import Layout from "../components/Layout";
import CharacterBuild from "../components/CharacterBuild";
import { useLiveQuery } from "dexie-react-hooks";
import { If } from "../components/If";
import { NothingInfo } from "../components/NothingInfo";
import { calculateMaterials, MaterialCalculation } from "../lib/characterMaterials";
import { characters } from "../data/characters";
import { Character, Materials, PricedMaterials } from "../lib/MyTypes";
import { useState } from "react";
import { sumPriced } from "../lib/ItemHelper";

interface Build {
    character: Character;
    materials: MaterialCalculation;
    build: any;
}

export default function Builds() {
    const allDBBuilds = useLiveQuery(() => buildsDB.builds.toArray(), []);

    const allMats: PricedMaterials[] = [];
    const allBuilds: Build[] = allDBBuilds?.map((build: any) => {
        const character = characters[build.characterId];

        const materials = calculateMaterials(character, {
            level: build.level,
            normal: build.normal,
            elemental: build.elemental,
            burst: build.burst,
        });

        allMats.push({ mora: materials.totalMora, items: materials.everything });

        return { character, materials, build };
    });

    return (
        <>
            <Layout title="Builds" current="Your Builds">
                <div className="mx-3 md:mx-6 2xl:mx-auto max-w-screen-2xl">
                    {!allDBBuilds ? (
                        <p>Loading</p>
                    ) : (
                        <If
                            cif={allDBBuilds.length > 0}
                            celse={<NothingInfo label="No builds" />}
                        >
                            <>
                                <div>
                                    {sumPriced(allMats).items.map((item) => {
                                        return (
                                            <p>
                                                {item.name}: {item.amount}
                                            </p>
                                        );
                                    })}
                                </div>
                                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                    {allBuilds.map((build: Build) => {
                                        if (!build.character) return null;

                                        return (
                                            <CharacterBuild
                                                materials={build.materials}
                                                character={build.character}
                                                build={build.build}
                                                key={
                                                    build.build.characterId +
                                                    build.build.id
                                                }
                                            />
                                        );
                                    })}
                                    {/* <Link href="/">
                                    <a className="flex flex-col items-center justify-center py-24 transition-colors rounded-md shadow-md bg-gscale-dark-background-secondary bg-opacity-40 hover:bg-opacity-80">
                                        <PlusIcon className="w-6 h-6 text-gscale-dark-text-ternary" />
                                        <div className="text-gscale-dark-text-secondary">
                                            Add another character
                                        </div>
                                    </a>
                                </Link> */}
                                </div>
                            </>
                        </If>
                    )}
                </div>
            </Layout>
        </>
    );
}
