import { TrendingUpIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";
import { LevelSelector as LevelSelector } from "../../components/LevelItemList";
import { characters } from "../../data/characters";

function useCorrectingState(
    minStart: number,
    minGoal: number
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

    const [startLevel, setstartLevel, goalLevel, setgoalLevel] = useCorrectingState(1, 1);

    // const [startNormal, setstartNormal, goalNormal, setgoalNormal] = useCorrectingState(
    //     1,
    //     1
    // );

    // const [startElemental, setstartElemental] = useState(1);
    // const [goalElemental, setgoalElemental] = useState(1);

    // const [startBurst, setstartBurst] = useState(1);
    // const [goalBurst, setgoalBurst] = useState(1);

    if (foundCharacter) {
        return (
            <Layout title={`Building ${foundCharacter.name}`}>
                <div className="max-w-screen-xl mx-auto">
                    <div className="w-max text-gscale-dark-text-secondary">
                        <div className="relative flex">
                            <LevelSelector
                                first
                                value={startLevel}
                                onChange={setstartLevel}
                            />
                            {/* bg-gradient-to-r from-genshin-dark-element-hydro to-genshin-dark-element-cryo */}
                            <div className="flex items-center px-2 bg-blue-400 border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary">
                                <TrendingUpIcon className="w-5 h-5 text-white" />
                            </div>
                            <LevelSelector
                                last
                                value={goalLevel}
                                onChange={setgoalLevel}
                            />
                        </div>
                        <div className="relative flex">
                            <LevelSelector
                                first
                                value={startLevel}
                                onChange={setstartLevel}
                            />
                            {/* bg-gradient-to-r from-genshin-dark-element-hydro to-genshin-dark-element-cryo */}
                            <div className="flex items-center px-2 bg-blue-400 border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary">
                                <TrendingUpIcon className="w-5 h-5 text-white" />
                            </div>
                            <LevelSelector
                                last
                                value={goalLevel}
                                onChange={setgoalLevel}
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
