import React, { ImgHTMLAttributes } from "react";

export type PictureProps = {
    name: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Picture: React.FC<PictureProps> = ({ name, ...rest }) => {
    return (
        <picture>
            <source type="image/webp" srcSet={`${name}.webp`} />
            <source type="image/png" srcSet={`${name}.png`} />
            <img
                src={`${name}.png`}
                height="300"
                width="480"
                decoding="async"
                {...rest}
            />
        </picture>
    );
};
