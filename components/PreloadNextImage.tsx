import Head from "next/head";
import React from "react";

export type PreloadImageProps = {
    src: string;
};

export const PreloadImage: React.FC<PreloadImageProps> = ({ src }) => {
    return (
        <Head>
            <link rel="preload" as="image" href={src}></link>
        </Head>
    );
};
