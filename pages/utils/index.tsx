import React from "react";
import Layout from "../../components/Layout";

export type utilsProps = {};

const utilNav = [{ name: "Material Calculator", href: "/utils/matcalc" }];

const utils: React.FC<utilsProps> = ({}) => {
    return (
        <Layout title="Utilities" current="Utils">
            <div className={`max-w-screen-xl sm:mx-auto mx-6`}>
                <h1 className={`font-bold text-xl tracking-wide`}>
                    List of GScale Utility Tools{" "}
                    <span className={`text-gscale-dark-text-ternary font-normal`}>
                        WIP
                    </span>
                </h1>
                <ul className={`m-4 space-y-2 list-disc`}>
                    {utilNav.map((nav) => {
                        return (
                            <li>
                                <a
                                    href={nav.href}
                                    className={`text-blue-400 hover:underline`}
                                >
                                    {nav.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Layout>
    );
};

export default utils;
