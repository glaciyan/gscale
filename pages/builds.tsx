import buildsDB from "../lib/builds";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { totalXpAndMora } from "../data/characterXp";

export default function Builds() {
    const [builds, setBuilds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const getAllBuilds: Promise<any> = buildsDB.builds.toArray();
        getAllBuilds.then((buildArr) => {
            if (isMounted) {
                setBuilds(buildArr);
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    });

    return (
        <Layout title="Builds" current="Your Builds">
            {!loading ? (
                builds.length > 0 ? (
                    builds.map((build) => {
                        return (
                            <div key={build.characterId + build.id}>
                                <span>{build.characterId}</span>{" "}
                                <a
                                    href="#"
                                    className="text-red-400 hover:underline"
                                    onClick={() => {
                                        buildsDB.builds.delete(build.id);
                                    }}
                                >
                                    delete
                                </a>{" "}
                                <a
                                    href="#"
                                    className="text-blue-400 hover:underline"
                                    onClick={() => {
                                        console.log(totalXpAndMora(70));
                                    }}
                                >
                                    log xp
                                </a>
                            </div>
                        );
                    })
                ) : (
                    <p>No Builds</p>
                )
            ) : (
                <p>Loading</p>
            )}
        </Layout>
    );
}
