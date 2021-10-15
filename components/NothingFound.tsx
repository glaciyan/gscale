import React from "react";
import { SearchExample } from "./SearchExample";

export type NothingFoundProps = {
    missedSearch: string;
};

export const NothingFound: React.FC<NothingFoundProps> = ({ missedSearch }) => {
    return (
        <div className={`flex flex-col`}>
            <div className={`text-gscale-dark-text-secondary`}>
                No results for "
                <span className={`text-gscale-dark-text-primary`}>{missedSearch}</span>"
            </div>
            <div className={`text-gscale-dark-text-secondary mt-4`}>
                Try searching for{":"}
            </div>
            <SearchExample text={"Ganyu"} />
            <SearchExample text={"Polearm"} />
            <SearchExample text={"Freedom"} />
        </div>
    );
};
