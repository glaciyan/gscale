import { XIcon } from "@heroicons/react/outline";
import React from "react";

interface NothingInfoProps {
    label: string;
}

export const NothingInfo: React.FC<NothingInfoProps> = ({ label }) => {
    return (
        <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded bg-gscale-dark-background-primary">
                <XIcon className="w-6 h-6 text-gscale-dark-text-ternary" />
            </div>
            <div className="mx-3 text-gscale-dark-text-secondary">{label}</div>
        </div>
    );
};
