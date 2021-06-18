import { SVGAttributes } from "react";

export function SemiCircle(props: SVGAttributes<any>) {
    return (
        <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
        >
            <path
                d="M20 12C20 13.6894 19.4652 15.3355 18.4721 16.7023C17.4791 18.0691 16.0789 19.0864 14.4721 19.6085C12.8654 20.1305 11.1346 20.1305 9.52786 19.6085C7.92112 19.0864 6.52089 18.0691 5.52786 16.7023C4.53484 15.3355 4 13.6894 4 12C4 10.3106 4.53484 8.6645 5.52786 7.29772C6.52089 5.93094 7.92112 4.91361 9.52786 4.39155C11.1346 3.86948 12.8654 3.86948 14.4721 4.39155"
                strokeWidth="2"
            />
        </svg>
    );
}
