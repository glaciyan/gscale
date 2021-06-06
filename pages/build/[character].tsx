import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";
import { characters } from "../../data/characters";
import buildsDB from "../../lib/buildsDatabase";

export default function BuildCharacter() {
    const router = useRouter();
    const { character } = router.query;

    let foundCharacter;

    if (typeof character === "string") {
        foundCharacter = characters[character];
    }

    const [startLevel, setstartLevel] = useState(1);
    const [goalLevel, setgoalLevel] = useState(20);

    const [startNormal, setstartNormal] = useState(1);
    const [goalNormal, setgoalNormal] = useState(1);

    const [startElemental, setstartElemental] = useState(1);
    const [goalElemental, setgoalElemental] = useState(1);

    const [startBurst, setstartBurst] = useState(1);
    const [goalBurst, setgoalBurst] = useState(1);

    if (foundCharacter) {
        const character = foundCharacter;

        function handleSubmit() {
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
        }

        return (
            <Layout title={`Building ${foundCharacter.name}`}>
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex space-x-6">
                        <p>{foundCharacter.name}</p>

                        <div className="flex flex-col w-60">
                            <p>Level: </p>
                            <label>
                                Start:
                                <input
                                    className="w-16 mx-3 bg-gscale-dark-background-secondary px-1.5 py-1 rounded m-1 focus:outline-none"
                                    type="number"
                                    aria-label="Start"
                                    value={startLevel}
                                    onChange={(e) => setstartLevel(e.target.valueAsNumber)}
                                />
                            </label>
                            <label>
                                Goal:
                                <input
                                    className="w-16 mx-3 bg-gscale-dark-background-secondary px-1.5 py-1 rounded m-1 focus:outline-none"
                                    type="number"
                                    aria-label="Goal"
                                    value={goalLevel}
                                    onChange={(e) => setgoalLevel(e.target.valueAsNumber)}
                                />
                            </label>
                            <hr />
                            <p>Normal Attack: </p>
                            <label>
                                Start:
                                <input
                                    className="w-16 mx-3 bg-gscale-dark-background-secondary px-1.5 py-1 rounded m-1 focus:outline-none"
                                    type="number"
                                    aria-label="Start"
                                    value={startNormal}
                                    onChange={(e) => setstartNormal(e.target.valueAsNumber)}
                                />
                            </label>
                            <label>
                                Goal:
                                <input
                                    className="w-16 mx-3 bg-gscale-dark-background-secondary px-1.5 py-1 rounded m-1 focus:outline-none"
                                    type="number"
                                    aria-label="Goal"
                                    value={goalNormal}
                                    onChange={(e) => setgoalNormal(e.target.valueAsNumber)}
                                />
                            </label>
                            <hr />
                            <p>Elemental: </p>
                            <label>
                                Start:
                                <input
                                    className="w-16 mx-3 bg-gscale-dark-background-secondary px-1.5 py-1 rounded m-1 focus:outline-none"
                                    type="number"
                                    aria-label="Start"
                                    value={startElemental}
                                    onChange={(e) => setstartElemental(e.target.valueAsNumber)}
                                />
                            </label>
                            <label>
                                Goal:
                                <input
                                    className="w-16 mx-3 bg-gscale-dark-background-secondary px-1.5 py-1 rounded m-1 focus:outline-none"
                                    type="number"
                                    aria-label="Goal"
                                    value={goalElemental}
                                    onChange={(e) => setgoalElemental(e.target.valueAsNumber)}
                                />
                            </label>
                            <hr />
                            <p>Burst: </p>
                            <label>
                                Start:
                                <input
                                    className="w-16 mx-3 bg-gscale-dark-background-secondary px-1.5 py-1 rounded m-1 focus:outline-none"
                                    type="number"
                                    aria-label="Start"
                                    value={startBurst}
                                    onChange={(e) => setstartBurst(e.target.valueAsNumber)}
                                />
                            </label>
                            <label>
                                Goal:
                                <input
                                    className="w-16 mx-3 bg-gscale-dark-background-secondary px-1.5 py-1 rounded m-1 focus:outline-none"
                                    type="number"
                                    aria-label="Goal"
                                    value={goalBurst}
                                    onChange={(e) => setgoalBurst(e.target.valueAsNumber)}
                                />
                            </label>
                            <button
                                className="block px-2 py-1 mt-3 rounded cursor-pointer hover:bg-gray-800 bg-gscale-dark-background-primary"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    } else {
        return <Layout title="Build a Character"></Layout>;
    }
}
