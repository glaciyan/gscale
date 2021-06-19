import React from "react";

interface LevelShowcaseProps {
    left: React.ReactElement | string | number;
    right: React.ReactElement | string | number;
    icon: React.ReactElement;
    label: string;
    element: string;
}

export const LevelShowcase: React.FC<LevelShowcaseProps> = ({
    left,
    right,
    icon,
    label,
    element,
}) => {
    return (
        <>
            <h3 className="buildlevellabel">{label}</h3>
            <div className="flex h-8 rounded-md shadow-md bg-gscale-dark-background-primary">
                {left}
                <div
                    className={`flex items-center px-1 bg-genshin-dark-element-${element} border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary`}
                >
                    {icon}
                </div>
                {right}
            </div>
        </>
    );
};
