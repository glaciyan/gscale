import React from "react";
import { ClassName } from "../lib/ClassName";

interface LevelShowcaseProps {
    left: React.ReactElement | string | number;
    right: React.ReactElement | string | number;
    icon: React.ReactElement;
    label: string;
    element: string;
}

export const LevelShowcase: React.FC<LevelShowcaseProps & ClassName> = ({
    left,
    right,
    icon,
    label,
    element,
    className = "",
}) => {
    const numberStyle = /*tw*/ `flex items-center pl-2 sm:w-14 mr-4 sm:mr-0`;
    return (
        <div className={`${className} sm:m-0 m-1 !ml-0 mr-2`}>
            <h3 className="font-semibold">{label}</h3>
            <div className="flex h-8 rounded-md shadow-md bg-gscale-dark-background-primary w-max">
                <div className={numberStyle}>{left}</div>
                <div
                    className={`flex items-center px-1.5 bg-genshin-dark-element-${element} border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary`}
                >
                    {icon}
                </div>
                <div className={numberStyle}>{right}</div>
            </div>
        </div>
    );
};
