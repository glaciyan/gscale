import buildsDB from "../lib/buildsDatabase";
import Layout from "../components/Layout";
import CharacterBuild from "../components/CharacterBuild";
import { useLiveQuery } from "dexie-react-hooks";
import { PageDialouge } from "../components/PageDialouge";
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
                <div className="max-w-screen-xl mx-auto">
                    <PageDialouge text="This page is still unfinished" />

                    <div className="grid grid-cols-3 gap-5">
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
