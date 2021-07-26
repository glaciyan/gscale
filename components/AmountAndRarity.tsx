import React from "react";
import { ClassName } from "../lib/ClassName";
import { RaritySelector } from "./RaritySelector";
import RarityStars from "./RarityStars";

export type AmountRaritySelectionProps = {
    label?: string;
    number: number | undefined;
    setNumber?: React.Dispatch<React.SetStateAction<number | undefined>>;
    rarity: number;
    setRarity?: React.Dispatch<React.SetStateAction<number>>;
    rarityMin?: number | undefined;
    rarityMax?: number | undefined;
};

export const AmountRarity: React.FC<AmountRaritySelectionProps & ClassName> = ({
    label,
    number,
    setNumber,
    rarity,
    setRarity,
    rarityMin,
    rarityMax,
    className,
}) => {
    const numberStyle = /*tw*/ `bg-gscale-dark-background-secondary flex items-center px-3 ${
        label ? "" : "rounded-l-md"
    }`;

    return (
        <div className={`flex flex-wrap h-10 items-stretch shadow-md ${className}`}>
            {label ? (
                <div
                    className={`bg-gscale-dark-background-secondary flex items-center px-3 rounded-l-md border-r-2 border-gscale-dark-background-primary`}
                >
                    {label}
                </div>
            ) : null}
            {setNumber ? (
                <input
                    className={`${numberStyle} focus:outline-none placeholder-gscale-dark-text-ternary/70 w-28`}
                    type="number"
                    value={number}
                    placeholder="Amount"
                    min={0}
                    onChange={(e) => {
                        setNumber(e.target.valueAsNumber);
                    }}
                />
            ) : (
                <>
                    <div className={`sr-only`}>of rarity {rarity}</div>
                    <div
                        className={`${numberStyle} border-gscale-dark-background-primary`}
                    >
                        {number}
                    </div>
                </>
            )}
            {setRarity ? (
                <RaritySelector
                    min={rarityMin}
                    max={rarityMax}
                    noLeftRound
                    value={rarity}
                    onChange={setRarity}
                />
            ) : (
                <div
                    className={`px-3 rounded-r-md bg-gscale-dark-background-primary flex items-center`}
                >
                    <RarityStars rarity={rarity} className={`h-5`} />
                </div>
            )}
        </div>
    );
};
