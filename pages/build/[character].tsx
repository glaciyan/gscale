import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";
import { LevelItemList } from "../../components/LevelItemList";
import { characerLevelsArray, characterLevels } from "../../data/characterLevels";
import { characters } from "../../data/characters";

const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
    { name: "Hellen Schmidt" },
    { name: "Hellen Schmidt" },
    { name: "Hellen Schmidt" },
    { name: "Hellen Schmidt" },
];

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
        return (
            <Layout title={`Building ${foundCharacter.name}`}>
                <div className="max-w-screen-xl mx-auto">
                    <div className="w-max text-gscale-dark-text-secondary">
                        <LevelItemList value={startLevel} onChange={setstartLevel} />
                        <div>Level: {startLevel}</div>
                    </div>
                </div>
            </Layout>
        );
    } else {
        return <Layout title="Build a Character"></Layout>;
    }
}
