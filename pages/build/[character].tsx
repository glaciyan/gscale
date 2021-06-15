// never ever do absolute positioning deep inside a container with overflow set to hidden
// i had to manually set all corners -slimetsp 14/06/2021

import { SparklesIcon, TrendingUpIcon, FireIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { CharacterLevelListBox } from "../../components/CharacterLevelListBox";
import { Character, characters } from "../../data/characters";
import { SwordIcon } from "../../components/icons/sword";
import { TalentLevelSelector } from "../../components/TalentLevelSelector";
import { CharacterDetails } from "../../components/CharacterDetails";
import { Button } from "../../components/Button";
import { getCharacterMaterials } from "../../lib/characterMaterials";

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

    return (
        <Layout title={`Building ${character.name}`}>
            <div className="max-w-screen-xl mx-3 sm:mx-4 xl:mx-auto">
                <div className="w-full lg:flex">
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

                    <div className="flex-grow border-t-2 border-gray-700 buildpagepadding lg:border-0 bg-gscale-dark-background-secondary maxlg:rounded-b-md lg:rounded-r-md">
                        <h3>Material Preview</h3>
                        <p className="w-full">{JSON.stringify(materials, null, 2)}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
