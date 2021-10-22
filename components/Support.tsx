import { HeartIcon } from "@heroicons/react/solid";
import React from "react";

export type SupportProps = {};

export const Support: React.FC<SupportProps> = ({}) => {
    return (
        <a href="https://ko-fi.com/glaciyan" target="_blank">
            <div
                className={`flex items-center w-max bg-gscale-dark-background-secondary px-2 py-1 text-sm text-gscale-dark-text-ternary rounded hover:bg-gscale-dark-background-primary transition-colors hover:text-red-400`}
            >
                <HeartIcon className={`h-4 mr-1`} />
                Support
            </div>
        </a>
    );
};
