import React from "react";
import Image, { ImageProps } from "../lib/next-native-image";

export type PreloadNextImageProps = {
    src: string;
    alt?: string;
    width: string | number;
    quality?: string | number;
};

export const PreloadNextImage: React.FC<PreloadNextImageProps> = ({
    src,
    width,
    quality,
}) => {
    return (
        <Image
            src={src}
            layout="none"
            // style={{ display: "none" }}
            priority={true}
            width={width}
            quality={quality}
        />
    );
};
