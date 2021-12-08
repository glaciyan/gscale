import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { FooterEntry } from "./FooterEntry";
import { ExternalLink } from "./ExternalLink";
import { Support } from "./Support";

type Props = {
    children?: ReactNode;
    title: string;
    current?: string;
};

const nav = [
    { name: "Characters", href: "/" },
    { name: "Your Builds", href: "/builds" },
];

const version = "1.1";

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
                <meta
                    property="og:description"
                    content="Genshin Impact Character Building Calculator. Calculate how much you need for your characters."
                />
                <meta name="twitter:card" content="summary"></meta>
            </Head>
            <header className="max-w-screen-xl m-6 xl:mx-auto">
                <div className="flex flex-col flex-wrap sm:flex-row sm:items-center">
                    <div className="flex flex-wrap flex-1 items-center">
                        <Link href="/">
                            <a className="flex mr-16 focus-visible:ring">
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
                                            <div className="bg-gscale-dark-background-primary h-5 mx-2 w-px" />
                                        ) : null}
                                    </span>
                                );
                            })}
                        </nav>
                    </div>
                    <Support />
                </div>
            </header>
            <main className="min-h-screen">{children}</main>
            <footer className="bg-gscale-dark-background-secondary mt-8">
                <div className="max-w-screen-xl mx-6 py-12 xl:mx-auto">
                    <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                        <FooterEntry header="Navigation">
                            {nav.map((nav) => {
                                return (
                                    <Link href={nav.href} key={nav.name}>
                                        <a className="text-gscale-dark-text-secondary w-max block hover:underline">
                                            {nav.name}
                                        </a>
                                    </Link>
                                );
                            })}
                            <Link href="/privacy">
                                <a className="text-gscale-dark-text-secondary w-max block hover:underline">
                                    Privacy
                                </a>
                            </Link>
                        </FooterEntry>
                        <FooterEntry header="Data Sources">
                            <ExternalLink href="http://genshin.honeyhunterworld.com/">
                                Honey Hunter World
                            </ExternalLink>
                            <br />
                            <ExternalLink href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki">
                                Genshin Impact Fandom Wiki
                            </ExternalLink>
                            <br />
                            <ExternalLink href="https://paimon.moe/">
                                paimon.moe
                            </ExternalLink>
                        </FooterEntry>
                        <FooterEntry header="Images">
                            <ExternalLink href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki">
                                Genshin Impact Fandom Wiki
                            </ExternalLink>
                            <br />
                            <ExternalLink href="http://genshin.honeyhunterworld.com/">
                                Honey Hunter World
                            </ExternalLink>
                        </FooterEntry>
                        <FooterEntry header="Other">
                            <>
                                <a
                                    href="https://github.com/glaciyan/gscale"
                                    className="w-max text-blue-400 block hover:underline"
                                >
                                    Github
                                </a>
                                <a
                                    href="https://twitter.com/glaciyandev"
                                    className="w-max text-blue-400 block hover:underline"
                                >
                                    @glaciyandev
                                </a>
                            </>
                        </FooterEntry>
                    </div>
                    <div className="flex mt-24 items-center">
                        <img
                            className="mr-2"
                            src="/images/svg/logo_label_small.svg"
                            alt="logo"
                        />
                        <div className="mr-2"> v{version} </div>
                        by glaciyan
                    </div>
                    <div className={`mt-6`}>
                        <a href={"https://vercel.com?utm_source=gscale&utm_campaign=oss"}>
                            <img
                                src={"/images/powered-by-vercel.svg"}
                                width={212}
                                height={44}
                                alt={"Powered by Vercel"}
                            />
                        </a>
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
