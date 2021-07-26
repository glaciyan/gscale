import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

export type utilsProps = {};

const utilNav = [
    { name: "Material Conversions", href: "/utils/matconv" },
    { name: "DataViz Test", href: "/utils/dataviztest" },
];

const utils: React.FC<utilsProps> = ({}) => {
    return (
        <Layout title="Utilities" current="Utils">
            <div className={`max-w-screen-xl xl:mx-auto mx-6`}>
                <h1 className={`font-bold text-xl tracking-wide`}>
                    List of GScale Utility Tools{" "}
                    <span className={`text-gscale-dark-text-ternary font-normal`}>
                        WIP
                    </span>
                </h1>
                <p className={`text-gscale-dark-text-ternary`}>
                    This is where I put simple tools I build. Do not expect the same
                    quality as the rest of the site.
                    <br />
                    If you have any ideas for a tool, you can contact me on Twitter{" "}
                    <a
                        href="https://twitter.com/slimetsp_dev"
                        className={`text-blue-400 hover:underline`}
                    >
                        @slimetsp_dev
                    </a>
                    . Though, I'd prefer if you'd create a{" "}
                    <a
                        href="https://github.com/slimetsp/gscale/issues/new"
                        className={`text-blue-400 hover:underline`}
                    >
                        new Github issue.
                    </a>
                </p>
                <ul className={`m-4 space-y-2 list-disc`}>
                    {utilNav.map((nav) => {
                        return (
                            <li key={nav.name}>
                                <Link href={nav.href}>
                                    <a
                                        href={nav.href}
                                        className={`text-blue-400 hover:underline`}
                                    >
                                        {nav.name}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Layout>
    );
};

export default utils;
