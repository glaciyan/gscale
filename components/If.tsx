import React, { ReactElement } from "react";

interface IfProps {
    cif: boolean;
    children: ReactElement;
    celse?: ReactElement;
}

export const If: React.FC<IfProps> = ({ cif, children, celse = null }) => {
    if (cif) {
        return children;
    }

    return celse;
};
