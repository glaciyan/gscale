import React from "react";
import Layout from "../../components/Layout";

export type matcalcProps = {};

const matcalc: React.FC<matcalcProps> = ({}) => {
    return (
        <Layout title={`Material Calculator`}>
            <div className={`max-w-screen-xl sm:mx-auto mx-6`}>matcalc</div>
        </Layout>
    );
};

export default matcalc;
