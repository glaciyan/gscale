import React, { ImgHTMLAttributes } from "react";

export type PictureProps = {
    name: string | null;
    visible?: boolean;
    reff?: any;
} & ImgHTMLAttributes<HTMLImageElement>;

export const Picture: React.FC<PictureProps> = ({
    name,
    visible = true,
    reff,
    ...rest
}) => {
    let imgAttributes: ImgHTMLAttributes<HTMLImageElement> | undefined = {
        src: `${name}.png`,
        height: "300",
        width: "480",
        decoding: "async",
    };

    if (!visible) {
        imgAttributes = {
            src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        };
    }

    return (
        <picture>
            {visible ? (
                <>
                    <source type="image/webp" srcSet={`${name}.webp`} />
                    <source type="image/png" srcSet={`${name}.png`} />
                </>
            ) : null}
            <img {...imgAttributes} {...rest} ref={reff} />
        </picture>
    );
};
