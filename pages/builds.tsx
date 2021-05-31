import buildsDB from "../lib/builds";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import CharacterBuild from "../components/CharacterBuild";

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
            <div className="max-w-screen-xl mx-auto">
                {!loading ? (
                    builds.length > 0 ? (
                        builds.map((build, index) => {
                            return (
                                <CharacterBuild
                                    build={build}
                                    key={build.characterId + build.id}
                                    className={
                                        (index % 2 === 0
                                            ? "bg-gray-800"
                                            : "bg-gray-700") + " py-1 px-2"
                                    }
                                />
                            );
                        })
                    ) : (
                        <p>No Builds</p>
                    )
                ) : (
                    <p>Loading</p>
                )}
            </div>
        </Layout>
    );
}
