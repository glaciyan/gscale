import React from "react";

interface IfProps {
    cif: boolean;
    children: JSX.Element;
}

export const If: React.FC<IfProps> = ({ cif, children }) => {
    if (cif) {
        return children;
    }

    return null;
};
