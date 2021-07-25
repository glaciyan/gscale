import React from "react";
import Layout from "../../components/Layout";

export type matcalcProps = {};

const matcalc: React.FC<matcalcProps> = ({}) => {
    return (
        <Layout title={`Material Calculator`}>
            <div>matcalc</div>
        </Layout>
    );
};

export default matcalc;
