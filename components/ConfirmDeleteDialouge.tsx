import React, { Dispatch, SetStateAction, useState } from "react";
import { Dialog } from "@headlessui/react";
import buildsDB from "../lib/buildsDatabase";
import { Button } from "./Button";

interface ConfirmDeleteDialougeProps {
    build: any;
    setBuild: Dispatch<SetStateAction<(() => void) | undefined>>;
}

export const ConfirmDeleteDialouge: React.FC<ConfirmDeleteDialougeProps> = ({
    build,
    setBuild,
}) => {
    const [isLoading, setisLoading] = useState(false);

    return (
        <Dialog
            open={build !== undefined}
            onClose={() => setBuild(undefined)}
            className="fixed inset-0 z-10 overflow-y-auto text-gscale-dark-text-primary"
        >
            <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />

                <div className="z-20 max-w-sm p-6 mx-auto rounded-md bg-gscale-dark-background-secondary">
                    <Dialog.Title className="mb-3 font-bold">Delete Build</Dialog.Title>
                    <Dialog.Description className="text-gscale-dark-text-secondary">
                        This will delete your build including your checklist.
                    </Dialog.Description>

                    <div className="flex items-center justify-end mt-6">
                        <p className="flex-grow text-gscale-dark-text-ternary justify-self-start">
                            Are you sure?
                        </p>
                        <Button
                            ternary
                            text="Cancel"
                            onClick={() => {
                                setBuild(undefined);
                            }}
                        />
                        <Button
                            isLoading={isLoading}
                            className="inline ml-2 bg-red-500"
                            text="Delete"
                            onClick={async () => {
                                setisLoading(true);
                                await buildsDB.builds.delete(build.id);
                                setBuild(undefined);
                                setisLoading(false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </Dialog>
    );
};
