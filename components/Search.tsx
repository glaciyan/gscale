import React from "react";
import { useIsTouch } from "./useIsTouch";

interface SearchProps {
    onConfirm: any;
    onChange: any;
}

export const Search: React.FC<SearchProps> = ({ onConfirm, onChange }) => {
    const isTouch = useIsTouch();

    return (
        <form
            action="#"
            onSubmit={(e) => {
                onConfirm();
                e.preventDefault();
            }}
            className="flex items-center mb-6 py-2.5 px-4 overflow-hidden rounded-md shadow-md focus-within:ring-2 focus-within:ring-genshin-element-cryo transition-shadow md:mx-auto bg-gscale-dark-background-primary text-gscale-dark-text-secondary"
            style={{ alignItems: "stretch" }}
        >
            <button
                type="submit"
                aria-label="Search"
                className="flex items-center mr-4 hover:bg-opacity-30 text-gscale-dark-text-ternary focus:outline-none active:text-gscale-dark-text-primary hover:text-gscale-dark-text-secondary"
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
            </button>
            <input
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
                // onFocus={(e) => {
                //     const searchBar = e.target as HTMLInputElement;
                //     searchBar.select();
                // }}
            />
        </form>
    );
};
