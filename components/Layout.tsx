import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
    children?: ReactNode;
    title: string;
    current?: string;
};

const nav = [
    { name: "Characters", href: "/" },
    { name: "Your Builds", href: "/builds" },
];

const Layout = ({ children, title, current }: Props) => {
    return (
        <div className="text-gscale-dark-text-secondary">
            <Head>
                <title>{title + " - GScale"}</title>
                <link rel="icon" href="/favicon.ico" sizes="32x32" />
                <link rel="icon" href="/images/svg/logo.svg" type="image/svg+xml" />
                <meta
                    name="description"
                    content="GScale for Genshin Impact. Genshin Impact Character Building Calculator. Calculate how much you need for your characters."
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
                    content="Genshin Impact Character Building Calculator. Calculate how much you need for your characters."
                />
                <meta name="twitter:card" content="summary"></meta>
            </Head>
            <header className="max-w-screen-xl m-6 xl:mx-auto">
                <div className="flex flex-wrap items-center">
                    <Link href="/">
                        <a className="focus-visible:ring">
                            <img
                                className=""
                                src="/images/svg/logo_label_small.svg"
                                alt="logo"
                            />
                        </a>
                    </Link>
                    <nav className="flex py-4 sm:ml-12">
                        {nav.map((navi, index, array) => {
                            return (
                                <span key={navi.href} className="flex">
                                    <Link href={navi.href}>
                                        <a
                                            className={`
                                                ${
                                                    current === navi.name
                                                        ? "text-gscale-dark-text-secondary hover:text-gscale-dark-text-primary"
                                                        : "text-gscale-dark-text-ternary hover:text-gscale-dark-text-secondary"
                                                } focus-visible:underline`}
                                        >
                                            {navi.name}
                                        </a>
                                    </Link>
                                    {index < array.length - 1 ? (
                                        <div className="w-px h-5 mx-2 bg-gscale-dark-background-primary" />
                                    ) : null}
                                </span>
                            );
                        })}
                    </nav>
                </div>
            </header>
            <main className="min-h-screen">{children}</main>
            <footer className="mt-8">
                <hr />
                <span>Add a footer here</span>
            </footer>
        </div>
    );
};

export default Layout;
