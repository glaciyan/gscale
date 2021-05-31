import buildsDB from "../lib/buildsDatabase";
import Layout from "../components/Layout";
import CharacterBuild from "../components/CharacterBuild";
import { useLiveQuery } from "dexie-react-hooks";

export default function Builds() {
    const allBuilds = useLiveQuery(() => buildsDB.builds.toArray(), []);

    return (
        <Layout title="Builds" current="Your Builds">
            <div className="max-w-screen-xl mx-auto">
                {!allBuilds ? (
                    <p>No Builds</p>
                ) : (
                    allBuilds.map((build, index) => {
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
                )}
            </div>
        </Layout>
    );
}
