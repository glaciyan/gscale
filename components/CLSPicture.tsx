import { toBase64 } from "next/dist/next-server/lib/to-base-64";
import React from "react";
import { Picture, PictureProps } from "./Picture";
import { useIntersection } from "next/dist/client/use-intersection";

export type CLSPictureProps = {} & PictureProps;

export const CLSPicture: React.FC<CLSPictureProps> = ({ name, ...rest }) => {
    const [setRef, isIntersected] = useIntersection<HTMLImageElement>({
        disabled: false,
        rootMargin: "200px",
    });

    return (
        <div
            style={{
                display: "inline-block",
                maxWidth: "100%",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: 0,
            }}
        >
            <div
                style={{
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%",
                }}
            >
                <img
                    style={{
                        maxWidth: "100%",
                        display: "block",
                        margin: 0,
                        border: "none",
                        padding: 0,
                    }}
                    alt=""
                    aria-hidden={true}
                    role="presentation"
                    src={`data:image/svg+xml;base64,${toBase64(
                        `<svg width="${480}" height="${300}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`
                    )}`}
                />
            </div>
            <Picture name={name} visible={isIntersected} reff={setRef} {...rest} />
        </div>
    );
};
