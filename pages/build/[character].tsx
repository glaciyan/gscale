// never ever do absolute positioning deep inside a container with overflow set to hidden
// i had to manually set all corners -slimetsp 14/06/2021

import {
    SparklesIcon,
    TrendingUpIcon,
    FireIcon,
    XIcon,
    ChevronRightIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { CharacterLevelListBox } from "../../components/CharacterLevelListBox";
import { Character, characters, dummyCharacter } from "../../data/characters";
import { SwordIcon } from "../../components/icons/sword";
import { TalentLevelSelector } from "../../components/TalentLevelSelector";
import { CharacterDetails } from "../../components/CharacterDetails";
import { Button } from "../../components/Button";
import { getCharacterMaterials } from "../../lib/characterMaterials";
import ItemCard from "../../components/MiniItemCard";
import { toId } from "../../lib";
import millify from "millify";
import { items } from "../../data/items";
import ItemGrid from "../../components/ItemGrid";
import { ShowcaseCategory } from "../../components/ShowcaseCategory";

function useCorrectingState(
    minStart: number = 1,
    minGoal: number = 1
): [number, (value: number) => void, number, (value: number) => void] {
    const [first, setFirst] = useState(minStart);
    const [second, setSecond] = useState(minGoal);

    return [
        first,
        (value: number) => {
            if (value > second) setSecond(value);
            setFirst(value);
        },
        second,
        (value: number) => {
            if (value < first) setFirst(value);
            setSecond(value);
        },
    ];
}

export default function BuildCharacter() {
    const router = useRouter();
    const { character: characterQuery } = router.query;

    let character: Character | undefined = undefined;

    if (typeof characterQuery === "string") {
        character = characters[characterQuery];
    }

    //#region states
    const [startLevel, setstartLevel, goalLevel, setgoalLevel] = useCorrectingState();

    const [startNormal, setstartNormal, goalNormal, setgoalNormal] = useCorrectingState();

    const [startElemental, setstartElemental, goalElemental, setgoalElemental] =
        useCorrectingState();

    const [startBurst, setstartBurst, goalBurst, setgoalBurst] = useCorrectingState();

    const [materials, setMaterials] = useState(
        getCharacterMaterials(
            character ?? dummyCharacter,
            { start: startLevel, goal: goalLevel },
            { start: startNormal, goal: goalNormal },
            { start: startElemental, goal: goalElemental },
            { start: startBurst, goal: goalBurst }
        )
    );

    useEffect(() => {
        setMaterials(
            getCharacterMaterials(
                character ?? dummyCharacter,
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
    //#endregion

    if (!character) {
        return <Layout title="Build a Character"></Layout>;
    }

    console.log(materials);

    return (
        <Layout title={`Building ${character.name}`}>
            <div className="max-w-screen-xl mx-3 sm:mx-4 xl:mx-auto">
                <div className="w-full lg:flex lg:min-h-[48rem]">
                    <div className="block sm:flex">
                        <CharacterDetails character={character} />

                        <div className="flex flex-col flex-grow space-y-6 border-gray-700 buildpagepadding sm:rounded-tr-md lg:rounded-none lg:border-r-2 lg:flex-grow-0 text-gscale-dark-text-secondary bg-gscale-dark-background-secondary">
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
                            <div className="">
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

                            <div className="flex-1" />
                            <Button
                                fullw
                                text="Build Character"
                                color={`genshin-dark-element-${character.element}`}
                                onClick={() => {
                                    // TODO send build to indexdb
                                    console.error("TODO submit");
                                }}
                            />
                        </div>
                    </div>

                    <div className="relative flex-1 max-w-full overflow-auto border-t-2 border-gray-700 buildpagepadding lg:border-0 bg-gscale-dark-background-secondary maxlg:rounded-b-md lg:rounded-r-md">
                        <div className="lg:absolute">
                            <h2 className="mb-2 font-semibold text-gscale-dark-text-secondary">
                                Material Preview
                            </h2>
                            {/* When there are no materials */}
                            {materials.materials.length === 0 && materials.mora === 0 ? (
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center w-12 h-12 rounded bg-gscale-dark-background-primary">
                                        <XIcon className="w-6 h-6 text-gscale-dark-text-ternary" />
                                    </div>
                                    <div className="mx-3">No Materials</div>
                                </div>
                            ) : null}
                            <div className="flex">
                                {materials.mora !== 0 ? (
                                    <ItemCard
                                        imageUrl="/images/materials/mora.png"
                                        imageName={items.mora.name}
                                        label={millify(materials.mora)}
                                    />
                                ) : null}
                                {materials.xpLazy.amount !== 0 ? (
                                    <>
                                        <ItemCard
                                            imageUrl="/images/materials/heros_wit.png"
                                            imageName={items.heros_wit.name}
                                            label={String(materials.xpLazy.amount)}
                                        />
                                        <div className="flex items-center m-0.5 bg-gscale-dark-background-ternary bg-opacity-70 rounded">
                                            <ChevronRightIcon className="w-6 h-6 ml-1" />
                                            <ItemCard
                                                imageUrl="/images/materials/adventurers_experience.png"
                                                imageName={
                                                    items.adventurers_experience.name
                                                }
                                                label={String(
                                                    materials.xpAccurate
                                                        .adventurers_experience.amount
                                                )}
                                            />
                                            <ItemCard
                                                imageUrl="/images/materials/wanderers_advice.png"
                                                imageName={items.wanderers_advice.name}
                                                label={String(
                                                    materials.xpAccurate.wanderers_advice
                                                        .amount
                                                )}
                                            />
                                            <ItemCard
                                                imageUrl="/images/materials/heros_wit.png"
                                                imageName={items.heros_wit.name}
                                                label={String(
                                                    materials.xpAccurate.heros_wit.amount
                                                )}
                                            />
                                        </div>
                                    </>
                                ) : null}
                            </div>
                            <ShowcaseCategory items={materials.materials} label="Total" />
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
