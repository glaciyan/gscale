import React, { useState } from "react";
import Layout from "../../components/Layout";
import { RaritySelector } from "../../components/RaritySelector";

export type matcalcProps = {};

const matconv: React.FC<matcalcProps> = ({}) => {
    const [neededRarity, setneededRarity] = useState(4);

    return (
        <Layout title={`Material Calculator`}>
            <div className={`max-w-screen-xl sm:mx-auto mx-6`}>
                <div>
                    I have {neededRarity}{" "}
                    <RaritySelector value={neededRarity} onChange={setneededRarity} />
                </div>
            </div>
        </Layout>
    );
};

export default matconv;
