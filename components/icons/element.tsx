import React, { SVGAttributes } from "react";

export function ElementIcon(props: SVGAttributes<any>) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                fill="currentColor"
            />
            <path
                d="M15.9102 9.44536C16.5853 10.4729 17.9654 10.7586 18.9929 10.0836C20.0205 9.40856 20.3062 8.02839 19.6312 7.00088C18.9562 5.97337 17.576 5.68763 16.5485 6.36265C15.521 7.03767 15.2352 8.41785 15.9102 9.44536Z"
                fill="currentColor"
            />
            <path
                d="M4.36871 17.0288C5.05589 18.0748 6.46093 18.3657 7.50694 17.6785C8.55296 16.9914 8.84385 15.5863 8.15667 14.5403C7.46949 13.4943 6.06445 13.2034 5.01843 13.8906C3.97242 14.5778 3.68153 15.9828 4.36871 17.0288Z"
                fill="currentColor"
            />
            <path
                d="M17.7708 8.22252C16.8825 6.87036 15.5464 5.87428 13.9969 5.40909C12.4475 4.94391 10.7836 5.03936 9.29752 5.67868"
                stroke="currentColor"
                strokeWidth="1.49288"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.26029 15.7845C7.14853 17.1367 8.48465 18.1327 10.0341 18.5979C11.5836 19.0631 13.2474 18.9677 14.7335 18.3283"
                stroke="currentColor"
                strokeWidth="1.49288"
                strokeMiterlimit="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
