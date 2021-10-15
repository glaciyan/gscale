import React, { useEffect, useRef, useState } from "react";
import { useIsTouch } from "./useIsTouch";

interface SearchProps {
    onConfirm: any;
    onChange: any;
}

const elements = ["cryo", "pyro", "electro", "anemo", "geo", "hydro"];

export const Search: React.FC<SearchProps> = ({ onConfirm, onChange }) => {
    const isTouch = useIsTouch();
    const inputRef: any = useRef(null);
    const focusSearch = () => {
        inputRef.current.focus();
    };

    const [focusColor, setFocusColor] = useState("cryo");

    const newFocusColor = () => {
        setFocusColor(elements[Math.floor((Math.random() * 100) % elements.length)]);
    };

    useEffect(() => newFocusColor(), []);

    return (
        <form
            action="#"
            onSubmit={(e) => {
                onConfirm();
                e.preventDefault();
            }}
            className={`flex items-center mb-6 py-2.5 px-4 overflow-hidden rounded-md shadow-md focus-within:ring-2 focus-within:ring-genshin-element-${focusColor} transition-shadow md:mx-auto bg-gscale-dark-background-primary text-gscale-dark-text-secondary`}
            style={{ alignItems: "stretch" }}
            onClick={focusSearch}
        >
            <div
                aria-hidden={true}
                className="flex items-center mr-4 hover:bg-opacity-30 text-gscale-dark-text-ternary focus:outline-none"
            >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                    ></path>
                </svg>
            </div>
            <input
                ref={inputRef}
                type="text"
                placeholder={
                    isTouch
                        ? "Search for anything"
                        : "Search for Names, Materials, Elements, etc..."
                }
                autoCorrect="false"
                spellCheck="false"
                autoCapitalize="false"
                className="flex-1 focus:outline-none bg-gscale-dark-background-primary placeholder-gscale-dark-text-ternary overflow-ellipsis"
                onChange={onChange}
                onFocus={() => newFocusColor()}
            />
        </form>
    );
};
