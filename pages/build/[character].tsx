import { SparklesIcon, TrendingUpIcon, FireIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";
import { CharacterLevelListBox } from "../../components/CharacterLevelListBox";
import { characters } from "../../data/characters";
import { TalentLevelListBox } from "../../components/TalentLevelListBox";
import { SwordIcon } from "../../components/icons/sword";
import { TalentLevelSelector } from "../../components/TalentLevelSelector";

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
    const { character } = router.query;

    let foundCharacter;

    if (typeof character === "string") {
        foundCharacter = characters[character];
    }

    const [startLevel, setstartLevel, goalLevel, setgoalLevel] = useCorrectingState();

    const [startNormal, setstartNormal, goalNormal, setgoalNormal] = useCorrectingState();

    const [startElemental, setstartElemental, goalElemental, setgoalElemental] =
        useCorrectingState();

    const [startBurst, setstartBurst, goalBurst, setgoalBurst] = useCorrectingState();

    if (foundCharacter) {
        return (
            <Layout title={`Building ${foundCharacter.name}`}>
                <div className="max-w-screen-xl mx-4 sm:mx-auto">
                    <div className="flex flex-col">
                        <div className=""></div>
                        {/* Level Selectors */}
                        <div className="p-6 space-y-6 w-max text-gscale-dark-text-secondary bg-gscale-dark-background-secondary">
                            <div>
                                <h3 className="buildlevellabel">Level</h3>
                                <div className="relative flex">
                                    <CharacterLevelListBox
                                        first
                                        value={startLevel}
                                        onChange={setstartLevel}
                                    />
                                    <div className="flex items-center px-2 bg-blue-400 border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary">
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
                            />
                            <TalentLevelSelector
                                label="Elemental Attack"
                                start={startElemental}
                                setStart={setstartElemental}
                                goal={goalElemental}
                                setGoal={setgoalElemental}
                                icon={<SparklesIcon className="white24" />}
                            />
                            <TalentLevelSelector
                                label="Burst"
                                start={startBurst}
                                setStart={setstartBurst}
                                goal={goalBurst}
                                setGoal={setgoalBurst}
                                icon={<FireIcon className="white24" />}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    } else {
        return <Layout title="Build a Character"></Layout>;
    }
}
