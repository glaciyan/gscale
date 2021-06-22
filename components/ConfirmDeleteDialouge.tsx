import React, { Dispatch, SetStateAction, useState } from "react";
import { Dialog } from "@headlessui/react";
import buildsDB from "../lib/buildsDatabase";
import { Button } from "./Button";

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

    return (
        <Dialog
            open={isVisible}
            onClose={() => setVisible(false)}
            className="fixed inset-0 z-10 overflow-y-auto text-gscale-dark-text-primary"
        >
            <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

                <div className="z-20 max-w-sm mx-auto rounded-md bg-gscale-dark-background-secondary">
                    <div className="p-6">
                        <Dialog.Title className="mb-3 font-bold">
                            Delete Build
                        </Dialog.Title>
                        <Dialog.Description className="text-gscale-dark-text-secondary">
                            This will delete the build including your checklist.
                        </Dialog.Description>
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

                                await buildsDB.builds.delete(build.id);
                                setVisible(false);

                                setisLoading(false);
                            }}
                        />
                        <a href="#" aria-hidden={true} className=""></a>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};
