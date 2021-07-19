import { useState } from "react";
import { Button } from "../components/Button";
import { If } from "../components/If";
import Layout from "../components/Layout";
import buildsDB from "../lib/buildsDatabase";

function Error() {
    const [clearedDb, setclearedDb] = useState(false);
    const [confirmed, setconfirmed] = useState(false);

    return (
        <Layout title="Error">
            <div
                className={`max-w-screen-xl mx-4 md:mx-auto text-gscale-dark-text-secondary`}
            >
                <p className={`mb-4`}>
                    <span className={`font-bold text-gscale-dark-text-primary`}>
                        Error. Looks like something went horribly wrong.
                    </span>
                    <br /> Clearing your database might fix it.
                    <br /> If this continues please report this on{" "}
                    <a
                        className={`text-blue-400 hover:underline`}
                        href="https://github.com/slimetsp/gscale/issues/new"
                    >
                        Github
                    </a>{" "}
                    or message me on{" "}
                    <a
                        href="https://twitter.com/slimetsp_dev"
                        className={`text-blue-400 hover:underline`}
                    >
                        Twitter
                    </a>{" "}
                    with an explanation to how this happened.
                </p>
                <p className={`text-red-500 uppercase tracking-wide`}>
                    clear database: this will delete all your saved builds and checklists,
                    this should be your last option
                </p>
                <Button
                    // bg-gray-700
                    // bg-blue-400
                    color={confirmed ? "blue-400" : "gray-700"}
                    text="Confirm"
                    onClick={() => {
                        setconfirmed(!confirmed);
                    }}
                    className={`m-1`}
                ></Button>
                <Button
                    disabled={!confirmed}
                    color="red-500"
                    text="Clear Database"
                    onClick={async () => {
                        await buildsDB.builds.clear();
                        setclearedDb(true);
                    }}
                    className={`m-1`}
                ></Button>
                <If cif={clearedDb}>
                    <p className="text-green-400">Database Cleared</p>
                </If>
            </div>
        </Layout>
    );
}

export default Error;
