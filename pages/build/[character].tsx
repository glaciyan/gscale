import {
    SparklesIcon,
    TrendingUpIcon,
    FireIcon,
    XIcon,
    ChevronRightIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { CharacterLevelListBox } from "../../components/CharacterLevelListBox";
import { Character, characters } from "../../data/characters";
import { SwordIcon } from "../../components/icons/sword";
import { TalentLevelSelector } from "../../components/TalentLevelSelector";
import { CharacterDetails } from "../../components/CharacterDetails";
import { Button } from "../../components/Button";
import { getCharacterMaterials } from "../../lib/characterMaterials";
import ItemCard from "../../components/ItemCard";
import millify from "millify";
import { items } from "../../data/items";
import { ShowcaseCategory } from "../../components/ShowcaseCategory";
import { useCorrectingState } from "../../lib/useCorrectingState";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import buildsDB from "../../lib/buildsDatabase";
import { useQuery } from "../../lib/useQuery";
import { PageDialouge } from "../../components/PageDialouge";
import { If } from "../../components/If";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.values(characters).map((character) => {
        return {
            params: { character: character.id },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    if (typeof context.params?.character === "string") {
        return { props: { character: characters[context.params.character] } };
    }

    throw "Error generating page: Character not found";
};

export default function BuildCharacter({ character }: { character: Character }) {
    //#region hooks
    const router = useRouter();

    const [startLevel, setstartLevel, goalLevel, setgoalLevel] = useCorrectingState();

    const [startNormal, setstartNormal, goalNormal, setgoalNormal] = useCorrectingState();

    const [startElemental, setstartElemental, goalElemental, setgoalElemental] =
        useCorrectingState();

    const [startBurst, setstartBurst, goalBurst, setgoalBurst] = useCorrectingState();

    const [materials, setMaterials] = useState(
        getCharacterMaterials(
            character,
            { start: startLevel, goal: goalLevel },
            { start: startNormal, goal: goalNormal },
            { start: startElemental, goal: goalElemental },
            { start: startBurst, goal: goalBurst }
        )
    );

    // update preview
    useEffect(() => {
        setMaterials(
            getCharacterMaterials(
                character,
                { start: startLevel, goal: goalLevel },
                { start: startNormal, goal: goalNormal },
                { start: startElemental, goal: goalElemental },
                { start: startBurst, goal: goalBurst }
            )
        );
    }, [
        startLevel,
        goalLevel,
        startNormal,
        goalNormal,
        startElemental,
        goalElemental,
        startBurst,
        goalBurst,
    ]);

    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const [build, setbuild]: [any, (val: any) => void] = useState(null);
    const query = useQuery();
    const [editId, setEditId] = useState(0);

    // set build from query
    useEffect(() => {
        if (!query) return;
        const { edit } = query;

        if (edit && typeof edit === "string") {
            const parsedId = Number.parseInt(edit);
            if (!!parsedId) {
                buildsDB.builds.get(parsedId).then((build: any) => {
                    setbuild(build);
                    setEditId(parsedId);
                });
            }
        }
    }, [query]);

    useEffect(() => {
        if (!build) return;
        else {
            setstartLevel(build.level.start);
            setgoalLevel(build.level.goal);

            setstartNormal(build.normal.start);
            setgoalNormal(build.normal.goal);

            setstartElemental(build.elemental.start);
            setgoalElemental(build.elemental.goal);

            setstartBurst(build.burst.start);
            setgoalBurst(build.burst.goal);
        }
    }, [build]);

    //#endregion

    function dbAction(func: () => void) {
        if (materials.materials.length === 0 && materials.mora === 0) {
            setSubmitError("Nothing is being leveled up.");
            return;
        }
        setSubmitting(true);
        func();
    }

    function handleSubmit() {
        dbAction(() => {
            buildsDB.builds
                .add({
                    type: "character",
                    characterId: character.id,
                    level: { start: startLevel, goal: goalLevel },
                    normal: { start: startNormal, goal: goalNormal },
                    elemental: { start: startElemental, goal: goalElemental },
                    burst: { start: startBurst, goal: goalBurst },
                })
                .then(() => {
                    router.push("/builds");
                });
        });
    }

    function updateBuild() {
        if (build && editId) {
            dbAction(() => {
                let completed = build.completed;

                if (build.completed) {
                    completed = [] as any[];

                    for (const item of build.completed) {
                        if (materials.everything.find((i) => i.name === item.name)) {
                            completed.push(item);
                        }
                    }
                }

                buildsDB.builds
                    .update(editId, {
                        level: { start: startLevel, goal: goalLevel },
                        normal: { start: startNormal, goal: goalNormal },
                        elemental: { start: startElemental, goal: goalElemental },
                        burst: { start: startBurst, goal: goalBurst },
                        completed,
                    })
                    .then(function (updated: any) {
                        if (updated) router.push("/builds");
                        else {
                            // this case never comes up because we are giving it a new object
                            setSubmitError("No Values are being updated.");
                            setSubmitting(false);
                        }
                    });
            });
        }
    }

    return (
        <Layout title={`Building ${character.name}`}>
            <div className="max-w-screen-xl mx-3 sm:mx-4 xl:mx-auto">
                <If cif={build?.characterId && build.characterId !== character.id}>
                    <PageDialouge
                        warning
                        text='The id which you are editing does not match up with the current character. Make sure you use the "Your Builds" page to edit your characters.'
                    />
                </If>
                <div className="w-full lg:flex lg:min-h-[51.5rem]">
                    <div className="block sm:flex">
                        <CharacterDetails character={character} />

                        <div className="flex flex-col flex-grow space-y-6 border-gray-700 buildpagepadding sm:rounded-tr-md lg:rounded-none lg:border-r-2 lg:flex-grow-0 text-gscale-dark-text-secondary bg-gscale-dark-background-secondary">
                            {/* try to use formik here one day */}
                            <div>
                                <h3 className="buildlevellabel">Level</h3>
                                <div className="relative flex flex-wrap">
                                    <CharacterLevelListBox
                                        first
                                        value={startLevel}
                                        onChange={setstartLevel}
                                    />
                                    <div
                                        className={`flex items-center px-2 bg-genshin-dark-element-${character.element} border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary`}
                                    >
                                        <TrendingUpIcon className="white24" />
                                    </div>
                                    <CharacterLevelListBox
                                        last
                                        value={goalLevel}
                                        onChange={setgoalLevel}
                                    />
                                </div>
                            </div>
                            <TalentLevelSelector
                                label="Normal Attack"
                                start={startNormal}
                                setStart={setstartNormal}
                                goal={goalNormal}
                                setGoal={setgoalNormal}
                                icon={<SwordIcon className="white24" />}
                                character={character}
                            />
                            <TalentLevelSelector
                                label="Elemental Attack"
                                start={startElemental}
                                setStart={setstartElemental}
                                goal={goalElemental}
                                setGoal={setgoalElemental}
                                icon={<SparklesIcon className="white24" />}
                                character={character}
                            />
                            <TalentLevelSelector
                                label="Burst"
                                start={startBurst}
                                setStart={setstartBurst}
                                goal={goalBurst}
                                setGoal={setgoalBurst}
                                icon={<FireIcon className="white24" />}
                                character={character}
                            />

                            <div className="flex-1">
                                <div className="flex items-baseline">
                                    <h3 className="flex-grow buildlevellabel">
                                        Templates
                                    </h3>
                                    {/* TODO <Button
                                        link
                                        text="Add Custom"
                                        color="gscale-dark-text-ternary"
                                        onClick={() => {
                                            console.error("TODO custom templates");
                                        }}
                                    /> */}
                                </div>
                                <div className="flex flex-wrap mb-3 max-w-max">
                                    <Button
                                        secondary
                                        text="Max"
                                        color={`gscale-dark-text-secondary`}
                                        className="mb-2 mr-3"
                                        onClick={() => {
                                            setgoalLevel(90);
                                            setgoalNormal(10);
                                            setgoalElemental(10);
                                            setgoalBurst(10);
                                        }}
                                    />
                                    <Button
                                        secondary
                                        text="Reset"
                                        color={`gscale-dark-text-secondary`}
                                        className="mb-2"
                                        onClick={() => {
                                            setgoalLevel(1);
                                            setgoalNormal(1);
                                            setgoalElemental(1);
                                            setgoalBurst(1);
                                        }}
                                    />
                                </div>
                                <div className="flex flex-wrap lg:max-w-[20rem]">
                                    {/* TODO Custom templates */}
                                </div>
                            </div>

                            <div>
                                <div className="h-8 mb-2 text-red-400">{submitError}</div>
                                <Button
                                    isLoading={submitting ? 1 : undefined}
                                    fullw
                                    text={build ? "Update Build" : "Build Character"}
                                    color={`genshin-dark-element-${character.element}`}
                                    onClick={build ? updateBuild : handleSubmit}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative flex-1 max-w-full overflow-auto border-t-2 border-gray-700 buildpagepadding lg:border-0 bg-gscale-dark-background-secondary maxlg:rounded-b-md lg:rounded-r-md">
                        <div className="lg:absolute">
                            <h2 className="mb-2 font-semibold text-gscale-dark-text-secondary">
                                Material Preview
                            </h2>

                            {/* When there are no materials */}
                            <If
                                cif={
                                    materials.materials.length === 0 &&
                                    materials.mora === 0
                                }
                            >
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center w-12 h-12 rounded bg-gscale-dark-background-primary">
                                        <XIcon className="w-6 h-6 text-gscale-dark-text-ternary" />
                                    </div>
                                    <div className="mx-3">No Materials</div>
                                </div>
                            </If>

                            <div className="flex">
                                <If cif={materials.mora !== 0}>
                                    <ItemCard
                                        item={items.mora}
                                        label={millify(materials.mora)}
                                    />
                                </If>
                                <If cif={materials.xpLazy.amount !== 0}>
                                    <>
                                        <ItemCard
                                            item={items.heros_wit}
                                            label={String(materials.xpLazy.amount)}
                                        />
                                        <div className="flex items-center m-0.5 bg-gscale-dark-background-ternary bg-opacity-70 rounded">
                                            <ChevronRightIcon className="w-6 h-6 ml-1" />
                                            <ItemCard
                                                item={items.adventurers_experience}
                                                label={String(
                                                    materials.xpAccurate
                                                        .adventurers_experience.amount
                                                )}
                                            />
                                            <ItemCard
                                                item={items.wanderers_advice}
                                                label={String(
                                                    materials.xpAccurate.wanderers_advice
                                                        .amount
                                                )}
                                            />
                                            <ItemCard
                                                item={items.heros_wit}
                                                label={String(
                                                    materials.xpAccurate.heros_wit.amount
                                                )}
                                            />
                                        </div>
                                    </>
                                </If>
                            </div>
                            <ShowcaseCategory
                                emphasis
                                items={materials.materials}
                                label="Total"
                            />
                            <ShowcaseCategory
                                items={materials.ascension}
                                label="Ascension"
                            />
                            <ShowcaseCategory
                                items={materials.normal}
                                label="Normal Attack"
                            />
                            <ShowcaseCategory
                                items={materials.elemental}
                                label="Elemental Attack"
                            />
                            <ShowcaseCategory items={materials.burst} label="Burst" />
                            <div className="h-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
