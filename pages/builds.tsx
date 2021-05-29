import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Leveling = {
    s: number;
    e: number;
};

type Build = {
    id: string;
    lvl: Leveling;
    t1?: Leveling;
    t2?: Leveling;
    t3?: Leveling;
};

export default function Builds() {
    const route = useRouter();
    const { max: character } = route.query;
    let builds: Build[] = [];

    useEffect(() => {
        if (character && typeof character === "string") {
            try {
                const buildsString = localStorage.getItem("builds");
                const builds = JSON.parse(buildsString ?? "{}");

                const max: Leveling = { s: 0, e: 90 };
                localStorage.setItem(
                    "builds",
                    JSON.stringify([
                        ...builds,
                        { id: character, lvl: max, t1: max, t2: max, t3: max },
                    ])
                );
            } catch {
                localStorage.setItem(
                    "builds",
                    `[{"id":"${character}","lvl":{"s":0,"e":90}}]`
                );
            } finally {
                route.push("/builds", undefined, { shallow: true });
            }
        } else {
            let buildArr = [];

            try {
                buildArr = JSON.parse(localStorage.getItem("builds") ?? "[]");
            } catch {
                localStorage.setItem("builds", "[]");
            }

            builds = buildArr;
        }
    });

    return (
        <Layout title="Builds" current="Your Builds">
            {builds.map((build) => {
                return <p>{build.id}</p>;
            })}
        </Layout>
    );
}
