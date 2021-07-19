import React from "react";
import { SemiCircle } from "./icons/semicircle";

interface ButtonProps {
    text: string;
    color?: string;
    onClick?: () => void;
    className?: string;
    secondary?: any;
    ternary?: any;
    link?: any;
    fullw?: any;
    isLoading?: any;
    disabled?: boolean | undefined;
}

function execIf(func: any, condition: boolean) {
    if (condition && func) func();
}

export const Button: React.FC<ButtonProps> = ({
    text,
    color,
    onClick,
    className,
    secondary,
    ternary,
    link,
    fullw,
    isLoading,
    disabled,
}) => {
    let cn: string = `buttoncommon shadow-md w-max text-gscale-dark-text-primary bg-opacity-70 bg-${color} ${className} transition-colors hover:bg-opacity-50 active:bg-opacity-30 hover:shadow-lg select-none focus-visible:ring focus:outline-none`;

    if (secondary) {
        cn = `buttoncommon ring-1 ring-opacity-80 text-${color} ring-${color} ${className} bg-black transition-colors bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-50 focus:outline-none select-none focus-visible:bg-opacity-20`;
    } else if (ternary) {
        cn = `buttoncommon w-max text-${color} bg-black transition-colors bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-50 select-none focus-visible:ring focus:outline-none ${className}`;
    } else if (link) {
        cn = `w-max text-${color} hover:underline select-none focus:outline-none focus-visible:underline ${className}`;
    }

    if (fullw) {
        cn += " !w-full";
    }

    if (disabled) {
        cn += /*tw*/ ` !bg-gray-700 opacity-40 cursor-default ring-0`;
    }

    return (
        <button
            className={cn + " flex justify-center relative"}
            disabled={disabled}
            onClick={() => execIf(onClick, !isLoading)}
        >
            <div className={isLoading ? "invisible" : ""}>{text}</div>
            {isLoading ? <SemiCircle className="absolute w-6 h-6 animate-spin" /> : null}
        </button>
    );
};
