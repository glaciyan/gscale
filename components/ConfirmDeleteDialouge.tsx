import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./Button";
import ReactModal from "react-modal";
import { getBuildsDB } from "../lib/buildsDatabase";

interface ConfirmDeleteDialougeProps {
    build: any;
    isVisible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export const ConfirmDeleteDialouge: React.FC<ConfirmDeleteDialougeProps> = ({
    build,
    isVisible,
    setVisible,
}) => {
    const [isLoading, setisLoading] = useState(false);

    ReactModal.setAppElement("#__next");

    return (
        <ReactModal
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                },
            }}
            //@ts-ignore
            parentSelector={() => document.querySelector("#__next")}
            isOpen={isVisible}
            preventScroll={true}
            onRequestClose={() => setVisible(false)}
            shouldCloseOnOverlayClick={true}
            className="fixed inset-0 z-10 overflow-y-auto text-gscale-dark-text-primary"
        >
            <div className="flex items-center justify-center min-h-screen">
                <div className="z-20 max-w-sm mx-auto rounded-md bg-gscale-dark-background-secondary">
                    <div className="p-6">
                        <div className="mb-3 font-bold">Delete Build</div>
                        <div className="text-gscale-dark-text-secondary">
                            This will delete the build including your checklist.
                        </div>
                    </div>

                    <div className="flex items-center justify-end !px-6 p-3 bg-gscale-dark-background-ternary rounded-b-md">
                        <p className="flex-grow text-gscale-dark-text-ternary justify-self-start">
                            Are you sure?
                        </p>
                        <Button
                            ternary
                            text="Cancel"
                            onClick={() => {
                                setVisible(false);
                            }}
                        />
                        <Button
                            isLoading={isLoading}
                            className="inline ml-2 bg-red-500"
                            text="Delete"
                            onClick={async () => {
                                setisLoading(true);

                                await (await getBuildsDB()).builds.delete(build.id);
                                setVisible(false);

                                setisLoading(false);
                            }}
                        />
                        <a href="#" aria-hidden={true} className=""></a>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
};
