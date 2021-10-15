import React from "react";

export type SearchExampleProps = {
    text: string;
};

export const SearchExample: React.FC<SearchExampleProps> = ({ text }) => {
    return (
        <div
            className={`p-2 rounded-md py-2.5 px-4 bg-gscale-dark-background-primary text-gscale-dark-text-primary w-max m-2`}
        >
            {text}
        </div>
    );
};
