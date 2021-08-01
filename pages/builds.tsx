import buildsDB from "../lib/buildsDatabase";
import Layout from "../components/Layout";
import CharacterBuild from "../components/CharacterBuild";
import { useLiveQuery } from "dexie-react-hooks";
import { If } from "../components/If";
import { NothingInfo } from "../components/NothingInfo";
import { calculateMaterials, MaterialCalculation } from "../lib/characterMaterials";
import { characters } from "../data/characters";
import { Character, Item, Materials, PricedMaterials } from "../lib/MyTypes";
import { useState } from "react";
import { hero, heroItem, sumPriced } from "../lib/ItemHelper";
import ItemGrid from "../components/ItemGrid";
import { Button } from "../components/Button";

interface Build {
    character: Character;
    materials: MaterialCalculation;
    build: any;
}

export default function Builds() {
    const [showTotal, setshowTotal] = useState(false);
    const [totalNegateCheckList, settotalNegateCheckList] = useState(false);
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

        allMats.push({
            mora: materials.totalMora,
            items: [...materials.everything, heroItem(materials.totalXp)],
        });

        return { character, materials, build };
    });

    const totalMats = sumPriced(allMats);

    if (totalNegateCheckList) {
        // negate mora
        const checkedOffMaterials = allDBBuilds
            ?.map((build: any) => build.completed)
            .flat();

        checkedOffMaterials?.forEach(
            (mat: { name: string; amount: number } | undefined) => {
                if (mat) {
                    const found = totalMats.items.find((pred) => pred.name === mat.name);
                    if (found) {
                        found.amount -= mat.amount;
                    }
                }
            }
        );

        checkedOffMaterials
            ?.filter((mat: any) => {
                return mat?.name === "Mora";
            })
            .forEach((mora: { name: string; amount: number }) => {
                totalMats.mora -= mora.amount;
            });
    }

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
                                <Button
                                    link
                                    text={`${showTotal ? "Hide" : "Show"} Total`}
                                    onClick={() => setshowTotal(!showTotal)}
                                    className={`text-gscale-dark-text-ternary`}
                                />
                                <If cif={showTotal}>
                                    <div className={`p-4`}>
                                        <Button
                                            secondary
                                            text={`${
                                                totalNegateCheckList ? "Do Not" : ""
                                            } Include Checklist`}
                                            onClick={() =>
                                                settotalNegateCheckList(
                                                    !totalNegateCheckList
                                                )
                                            }
                                            color={`gscale-dark-text-secondary`}
                                            className={`text-gscale-dark-text-secondary mb-2`}
                                        />
                                        <p className={`text-gscale-dark-text-secondary`}>
                                            Mora: {totalMats.mora.toLocaleString("en-US")}
                                        </p>
                                        <ItemGrid items={totalMats.items} />
                                    </div>
                                </If>
                                <div className="grid grid-cols-1 gap-4 mt-2 xl:grid-cols-2">
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
