import buildsDB from "../lib/buildsDatabase";
import Layout from "../components/Layout";
import CharacterBuild from "../components/CharacterBuild";
import { useLiveQuery } from "dexie-react-hooks";
import { If } from "../components/If";
import { NothingInfo } from "../components/NothingInfo";

export default function Builds() {
    const allBuilds = useLiveQuery(() => buildsDB.builds.toArray(), []);

    return (
        <>
            <Layout title="Builds" current="Your Builds">
                <div className="mx-3 md:mx-6 2xl:mx-auto max-w-screen-2xl">
                    {!allBuilds ? (
                        <p>Loading</p>
                    ) : (
                        <If
                            cif={allBuilds.length > 0}
                            celse={<NothingInfo label="No builds" />}
                        >
                            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                {allBuilds.map((build: any) => {
                                    return (
                                        <CharacterBuild
                                            build={build}
                                            key={build.characterId + build.id}
                                        />
                                    );
                                })}
                                {/* <Link href="/">
                                    <a className="flex flex-col items-center justify-center py-24 transition-colors rounded-md shadow-md bg-gscale-dark-background-secondary bg-opacity-40 hover:bg-opacity-80">
                                        <PlusIcon className="w-6 h-6 text-gscale-dark-text-ternary" />
                                        <div className="text-gscale-dark-text-secondary">
                                            Add another character
                                        </div>
                                    </a>
                                </Link> */}
                            </div>
                        </If>
                    )}
                </div>
            </Layout>
        </>
    );
}
