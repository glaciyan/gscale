import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({
    children,
    title = "GScale - Genshin Impact Planner",
}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" sizes="32x32" />
            <link rel="icon" href="/images/svg/logo.svg" type="image/svg+xml" />
            <meta
                name="description"
                content="Get quick and easy info on characters, weapons and artifacts."
            />
            <meta property="og:title" content="GScale - Nightly" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://nightly.gscale.cc" />
            <meta property="og:image" content="/images/og.png" />
            <meta
                property="og:description"
                content="Get quick and easy info on characters, weapons and artifacts."
            />
            <meta name="twitter:card" content="summary_large_image"></meta>
        </Head>
        <header>
            <nav>
                <p>make a header</p>
                <hr />
            </nav>
        </header>
        {children}
        <footer>
            <hr />
            <span>Add a footer here</span>
        </footer>
    </div>
);

export default Layout;
