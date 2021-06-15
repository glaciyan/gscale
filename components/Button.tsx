import React from "react";

interface ButtonProps {
    text: string;
    color: string;
    onClick: () => void;
    className?: string;
    secondary?: any;
    ternary?: any;
    fullw?: any;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    color,
    onClick,
    className,
    secondary,
    ternary,
    fullw,
}) => {
    let cn: string = `buttoncommon w-max text-gscale-dark-text-primary bg-opacity-70 bg-${color} ${className} transition-colors hover:bg-opacity-50 active:bg-opacity-30 select-none`;

    if (secondary) {
        cn = `buttoncommon ring-1 text-${color} ring-${color} ${className} bg-black transition-colors bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-50 select-none`;
    } else if (ternary) {
        cn = `buttoncommon text-${color} ${className}`;
    }

    if (fullw) {
        cn += " !w-full";
    }

    return (
        <div role="button" tabIndex={0} className={cn} onClick={onClick}>
            {text}
        </div>
    );
};
