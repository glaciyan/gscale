import React from "react";
import Layout from "./Layout";

export type ToolLayoutProps = {
    name: string;
};

export const ToolLayout: React.FC<ToolLayoutProps> = ({ name, children }) => {
    return (
        <Layout title={name}>
            <div className={`max-w-screen-xl xl:mx-auto mx-6`}>
                <h1 className={`font-semibold text-gscale-dark-text-primary mb-4`}>
                    {name}
                </h1>
                {children}
            </div>
        </Layout>
    );
};
