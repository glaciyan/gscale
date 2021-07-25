import React, { useState } from "react";
import Layout from "../../components/Layout";
import { RaritySelector } from "../../components/RaritySelector";
import { ToolLayout } from "../../components/ToolLayout";

export type matcalcProps = {};

const matconv: React.FC<matcalcProps> = ({}) => {
    const [neededRarity, setneededRarity] = useState(4);
    const [neededAmount, setneededAmount] = useState<number>();

    return (
        <ToolLayout name={`Material Converter`}>
            <div className={`flex flex-wrap items-center`}>
                <div
                    className={`bg-gscale-dark-background-secondary flex items-center px-3 rounded-l-md self-stretch border-r-2 border-gscale-dark-background-primary`}
                >
                    I have
                </div>
                <input
                    autoFocus
                    className={`bg-gscale-dark-background-secondary flex items-center px-3 self-stretch focus:outline-none placeholder-gscale-dark-text-ternary/70 w-28`}
                    type="number"
                    value={neededAmount}
                    placeholder="Amount"
                    min={0}
                    onChange={(e) => {
                        setneededAmount(e.target.valueAsNumber);
                    }}
                />
                <RaritySelector
                    noLeftRound
                    value={neededRarity}
                    onChange={setneededRarity}
                />
            </div>
        </ToolLayout>
    );
};

export default matconv;
