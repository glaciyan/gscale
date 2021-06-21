import buildsDB from "../lib/buildsDatabase";
import Layout from "../components/Layout";
import CharacterBuild from "../components/CharacterBuild";
import { useLiveQuery } from "dexie-react-hooks";
import { If } from "../components/If";
import { ConfirmDeleteDialouge } from "../components/ConfirmDeleteDialouge";
import { useState } from "react";

export default function Builds() {
    const allBuilds = useLiveQuery(() => buildsDB.builds.toArray(), []);
    // this is used for the confirmation dialouge
    const [deletingBuild, setDeletingBuild] = useState<() => void>();

    return (
        <>
            <ConfirmDeleteDialouge build={deletingBuild} setBuild={setDeletingBuild} />
            <Layout title="Builds" current="Your Builds">
                <div className="mx-3 md:mx-6 2xl:mx-auto max-w-screen-2xl">
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        {!allBuilds ? (
                            <p>Loading</p>
                        ) : (
                            <If cif={allBuilds.length > 0} celse={<p>No builds</p>}>
                                {allBuilds.map((build: any) => {
                                    return (
                                        <CharacterBuild
                                            build={build}
                                            key={build.characterId + build.id}
                                            setDeletingBuild={setDeletingBuild}
                                        />
                                    );
                                })}
                            </If>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}
