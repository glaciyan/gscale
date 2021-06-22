import React, { useState } from "react";
import { ClassName } from "../lib/ClassName";
import { Button } from "./Button";
import ReactModal from "react-modal";

interface ExternalLinkProps {
    href: string;
}

export const ExternalLink: React.FC<ExternalLinkProps & ClassName> = ({
    href,
    className,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    ReactModal.setAppElement("#__next");

    return (
        <>
            <ReactModal
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                    },
                }}
                //@ts-ignore
                parentSelector={() => document.querySelector("#__next")}
                isOpen={isOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => {
                    console.log("requesting close");
                    setIsOpen(false);
                }}
                className="fixed inset-0 z-10 overflow-y-auto text-gscale-dark-text-primary"
            >
                <div className="flex items-center justify-center min-h-screen ">
                    <div className="z-20 mx-auto rounded-md bg-gscale-dark-background-secondary">
                        <div className="p-6">
                            <div className="mb-3 font-bold">Visiting External Site</div>
                            <div className="block leading-loose text-gscale-dark-text-secondary">
                                <>
                                    <span>
                                        You are about to leave gscale.cc and go to
                                    </span>
                                    <br />
                                    <span className="px-2 py-1 mt-1 rounded w-max bg-gscale-dark-background-ternary">
                                        {href}
                                    </span>
                                </>
                            </div>
                        </div>

                        <div className="flex items-center justify-end !px-6 p-3 bg-gscale-dark-background-ternary rounded-b-md">
                            <div className="flex-grow mr-12 text-gscale-dark-text-ternary justify-self-start">
                                Are you sure?
                            </div>
                            <Button
                                ternary
                                text="No"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            />
                            <a
                                className="inline ml-2 transition-colors bg-blue-500 outline-none select-none buttoncommon hover:bg-opacity-50 active:bg-opacity-30 hover:shadow-lg focus-visible:ring"
                                href={href}
                            >
                                Yes
                            </a>
                        </div>
                    </div>
                </div>
            </ReactModal>
            <a
                className={`block text-blue-400 hover:underline cursor-pointer w-max ${className}`}
                onClick={() => setIsOpen(true)}
            >
                {children}
            </a>
        </>
    );
};
