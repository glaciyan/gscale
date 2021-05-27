import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
    children?: ReactNode;
    title: string;
};

const Layout = ({ children, title }: Props) => (
    <div>
        <Head>
            <title>{title + " - GScale"}</title>
            <link rel="icon" href="/favicon.ico" sizes="32x32" />
            <link rel="icon" href="/images/svg/logo.svg" type="image/svg+xml" />
            <meta
                name="description"
                content="Calculate how much you need for your characters."
            />
            <meta
                property="og:title"
                content="GScale - Genshin Impact Character Building Calculator"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.gscale.cc" />
            <meta property="og:image" content="/images/og.png" />
            <meta
                property="og:description"
                content="Calculate how much you need for your characters."
            />
            <meta name="twitter:card" content="summary"></meta>
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
