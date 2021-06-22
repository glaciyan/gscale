import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { FooterEntry } from "./FooterEntry";
import { ExternalLink } from "./ExternalLink";

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
                        <a className="mr-16 focus-visible:ring">
                            <img
                                className=""
                                src="/images/svg/logo_label_small.svg"
                                alt="logo"
                            />
                        </a>
                    </Link>
                    <nav className="flex py-4">
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
            <footer className="mt-8 bg-gscale-dark-background-secondary">
                <div className="max-w-screen-xl py-12 mx-6 xl:mx-auto">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4">
                        <FooterEntry header="Navigation">
                            {nav.map((nav) => {
                                return (
                                    <Link href={nav.href} key={nav.name}>
                                        <a className="block text-gscale-dark-text-secondary hover:underline">
                                            {nav.name}
                                        </a>
                                    </Link>
                                );
                            })}
                        </FooterEntry>
                        <FooterEntry header="Data Sources">
                            <ExternalLink href="http://genshin.honeyhunterworld.com/">
                                Honey Hunter World
                            </ExternalLink>
                            <ExternalLink href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki">
                                Genshin Impact Fandom Wiki
                            </ExternalLink>
                            <ExternalLink href="https://paimon.moe/">
                                paimon.moe
                            </ExternalLink>
                        </FooterEntry>
                        <FooterEntry header="Images">
                            <ExternalLink href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki">
                                Genshin Impact Fandom Wiki
                            </ExternalLink>
                        </FooterEntry>
                        <FooterEntry header="Other">
                            <>
                                <span>Discord:</span>{" "}
                                <span
                                    className="relative transition-colors duration-150 cursor-pointer select-none text-gscale-dark-text-ternary active:text-green-400"
                                    onClick={() => {
                                        navigator.clipboard.writeText("slimetsp#5278");
                                    }}
                                    title="Click to copy"
                                >
                                    slimetsp#5278
                                </span>
                                <a
                                    href="https://github.com/slimetsp/gscale"
                                    className="block text-blue-400 hover:underline w-max"
                                >
                                    Github
                                </a>
                            </>
                        </FooterEntry>
                    </div>
                    <div className="flex items-center mt-24">
                        <img
                            className="mr-4"
                            src="/images/svg/logo_label_small.svg"
                            alt="logo"
                        />
                        by slimetsp
                    </div>
                    <p className="mt-6 text-gscale-dark-text-ternary">
                        gscale.cc is not affiliated with miHoYo.
                        <br />
                        Genshin Impact, game content and materials are trademarks and
                        copyrights of miHoYo.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
