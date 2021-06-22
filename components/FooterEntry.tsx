import React from "react";

interface FooterEntryProps {
    header: string;
    children: React.ReactElement | React.ReactElement[];
}

export const FooterEntry: React.FC<FooterEntryProps> = ({ header, children }) => {
    return (
        <div>
            <h4 className="mb-4 font-semibold text-gscale-dark-text-primary">{header}</h4>
            <div>{children}</div>
        </div>
    );
};
