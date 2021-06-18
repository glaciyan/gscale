import buildsDB from "../lib/buildsDatabase";
import Layout from "../components/Layout";
import CharacterBuild from "../components/CharacterBuild";
import { useLiveQuery } from "dexie-react-hooks";
import { PageDialouge } from "../components/PageDialouge";

export default function Builds() {
    const allBuilds = useLiveQuery(() => buildsDB.builds.toArray(), []);

    return (
        <Layout title="Builds" current="Your Builds">
            <div className="max-w-screen-xl mx-auto">
                <PageDialouge text="This page is still unfinished" />
                {!allBuilds ? (
                    <p>Loading</p>
                ) : allBuilds.length > 0 ? (
                    allBuilds.map((build: any, index: any) => {
                        return (
                            <CharacterBuild
                                build={build}
                                key={build.characterId + build.id}
                                className={
                                    (index % 2 === 0 ? "bg-gray-800" : "bg-gray-700") +
                                    " p-4"
                                }
                            />
                        );
                    })
                ) : (
                    <p>No builds</p>
                )}
            </div>
        </Layout>
    );
}
