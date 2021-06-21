import buildsDB from "../lib/buildsDatabase";
import Layout from "../components/Layout";
import CharacterBuild from "../components/CharacterBuild";
import { useLiveQuery } from "dexie-react-hooks";
import { If } from "../components/If";
import { ConfirmDeleteDialouge } from "../components/ConfirmDeleteDialouge";
import { useState } from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/outline";
import { NothingInfo } from "../components/NothingInfo";
import { Button } from "../components/Button";

export default function Builds() {
    const allBuilds = useLiveQuery(() => buildsDB.builds.toArray(), []);
    // this is used for the confirmation dialouge
    const [deletingBuild, setDeletingBuild] = useState<() => void>();

    return (
        <>
            <ConfirmDeleteDialouge build={deletingBuild} setBuild={setDeletingBuild} />
            <Layout title="Builds" current="Your Builds">
                <div className="mx-3 md:mx-6 2xl:mx-auto max-w-screen-2xl">
                    {!allBuilds ? (
                        <p>Loading</p>
                    ) : (
                        <If
                            cif={allBuilds.length > 0}
                            celse={
                                <Link href="/">
                                    <a className="flex flex-col items-center justify-center transition-colors rounded-md">
                                        <div className="flex flex-col items-center p-6 rounded-md bg-gscale-dark-background-secondary">
                                            <NothingInfo label="No builds" />
                                            <Button
                                                secondary
                                                className="mt-6 text-blue-100 ring-blue-100"
                                                text="Back to Characters"
                                            />
                                        </div>
                                    </a>
                                </Link>
                            }
                        >
                            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                {allBuilds.map((build: any) => {
                                    return (
                                        <CharacterBuild
                                            build={build}
                                            key={build.characterId + build.id}
                                            setDeletingBuild={setDeletingBuild}
                                        />
                                    );
                                })}
                                <Link href="/">
                                    <a className="flex flex-col items-center justify-center py-24 transition-colors rounded-md shadow-md bg-gscale-dark-background-secondary bg-opacity-40 hover:bg-opacity-80">
                                        <PlusIcon className="w-6 h-6 text-gscale-dark-text-ternary" />
                                        <div className="text-gscale-dark-text-secondary">
                                            Add another character
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </If>
                    )}
                </div>
            </Layout>
        </>
    );
}
