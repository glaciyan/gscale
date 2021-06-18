import { SVGAttributes } from "react";

export function SwordIcon(props: SVGAttributes<any>) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M10.017 13V3.983L12 2l1.983 1.983V13M8 13h8m-4 0v4"
                stroke="currentcolor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                transform="rotate(45 17.292 6.118) scale(1.5)"
            />
        </svg>
    );
}
