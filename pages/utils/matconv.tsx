import React, { useEffect, useState } from "react";
import { AmountRarity } from "../../components/AmountAndRarity";
import { If } from "../../components/If";
import { ToolLayout } from "../../components/ToolLayout";

//@ts-ignore
const MaterialConverter = ({ defaultRarity }) => {
    const [neededAmount, setneededAmount] = useState<number>();
    const [neededRarity, setneededRarity] = useState(defaultRarity);

    const [resultRarity, sethasRarity] = useState(neededRarity - 1);

    useEffect(() => {
        if (resultRarity >= neededRarity - 1) sethasRarity(neededRarity - 1);
    }, [neededRarity]);

    return (
        <div className="space-y-4 w-max border-2 border-gscale-dark-background-primary p-4 rounded-md">
            <AmountRarity
                label={`I need`}
                number={neededAmount}
                setNumber={setneededAmount}
                rarity={neededRarity}
                setRarity={setneededRarity}
                rarityMin={2}
            />
            <If cif={!!neededAmount}>
                <>
                    <div className={`h-0.5 bg-gscale-dark-background-primary`}></div>
                    <AmountRarity
                        number={neededAmount! * Math.pow(3, neededRarity - resultRarity)}
                        rarity={resultRarity}
                        setRarity={sethasRarity}
                        rarityMax={neededRarity - 1}
                    />
                </>
            </If>
        </div>
    );
};

const matconv: React.FC = () => {
    return (
        <ToolLayout
            name={`Material Converter`}
            description={`A super simple calculator for materials (Talents/Weapon/Common/etc.)`}
        >
            <div className={`flex flex-wrap justify-between`}>
                <MaterialConverter defaultRarity={4} />
                <MaterialConverter defaultRarity={4} />
                <MaterialConverter defaultRarity={3} />
                <MaterialConverter defaultRarity={3} />
            </div>
        </ToolLayout>
    );
};

export default matconv;
