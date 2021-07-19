import { toBase64 } from "next/dist/next-server/lib/to-base-64";
import React from "react";
import LazyLoad from "react-lazyload";
import { Picture, PictureProps } from "./Picture";

export type CLSPictureProps = {} & PictureProps;

export const CLSPicture: React.FC<CLSPictureProps> = ({ name, ...rest }) => {
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
            <LazyLoad once offset={100}>
                <Picture name={name} {...rest} />
            </LazyLoad>
        </div>
    );
};
