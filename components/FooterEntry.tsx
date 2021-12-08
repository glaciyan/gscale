import React from "react";

interface FooterEntryProps {
    header: string;
}

export const FooterEntry: React.FC<FooterEntryProps> = ({ header, children }) => {
    return (
        <div>
            <h4 className="font-semibold text-gscale-dark-text-primary mb-4">{header}</h4>
            <div>{children}</div>
        </div>
    );
};
