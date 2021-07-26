import React from "react";
import Layout from "./Layout";

export type ToolLayoutProps = {
    name: string;
    description?: React.ReactElement | string;
};

export const ToolLayout: React.FC<ToolLayoutProps> = ({
    name,
    description,
    children,
}) => {
    return (
        <Layout title={name}>
            <div className={`max-w-screen-xl xl:mx-auto mx-6`}>
                <h1 className={`font-semibold text-gscale-dark-text-primary mb-1`}>
                    {name}
                </h1>
                {description ? (
                    <p className={`text-gscale-dark-text-ternary mb-4`}>{description}</p>
                ) : null}
                {children}
            </div>
        </Layout>
    );
};
