import { SparklesIcon, TrendingUpIcon, FireIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";
import { LevelSelector } from "../../components/LevelSelector";
import { characters } from "../../data/characters";
import { TelentLevelSelector } from "../../components/TalentLevelSelector";
import { SwordIcon } from "../../components/icons/sword";

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

    // use icons
    // elemental: sparkles
    // burst: fire

    if (foundCharacter) {
        return (
            <Layout title={`Building ${foundCharacter.name}`}>
                <div className="max-w-screen-xl mx-4 sm:mx-auto">
                    <div className="space-y-6 w-max text-gscale-dark-text-secondary">
                        <div>
                            <h3 className="buildlevellabel">Level</h3>
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

                        <div>
                            <h3 className="buildlevellabel">Normal Attack</h3>
                            <div className="relative flex">
                                <TelentLevelSelector
                                    first
                                    value={startNormal}
                                    onChange={setstartNormal}
                                />
                                {/* bg-gradient-to-r from-genshin-dark-element-hydro to-genshin-dark-element-cryo */}
                                <div className="flex items-center px-2 bg-blue-400 border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary">
                                    <SwordIcon className="w-5 h-5 text-white" />
                                </div>
                                <TelentLevelSelector
                                    last
                                    value={goalNormal}
                                    onChange={setgoalNormal}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="buildlevellabel">Elemental Attack</h3>
                            <div className="relative flex">
                                <TelentLevelSelector
                                    first
                                    value={startElemental}
                                    onChange={setstartElemental}
                                />
                                {/* bg-gradient-to-r from-genshin-dark-element-hydro to-genshin-dark-element-cryo */}
                                <div className="flex items-center px-2 bg-blue-400 border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary">
                                    <SparklesIcon className="w-5 h-5 text-white" />
                                </div>
                                <TelentLevelSelector
                                    last
                                    value={goalElemental}
                                    onChange={setgoalElemental}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="buildlevellabel">Burst</h3>
                            <div className="relative flex">
                                <TelentLevelSelector
                                    first
                                    value={startBurst}
                                    onChange={setstartBurst}
                                />
                                {/* bg-gradient-to-r from-genshin-dark-element-hydro to-genshin-dark-element-cryo */}
                                <div className="flex items-center px-2 bg-blue-400 border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary">
                                    <FireIcon className="w-5 h-5 text-white" />
                                </div>
                                <TelentLevelSelector
                                    last
                                    value={goalBurst}
                                    onChange={setgoalBurst}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    } else {
        return <Layout title="Build a Character"></Layout>;
    }
}
