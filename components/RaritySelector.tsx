import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/outline";
import React, { Fragment, StyleHTMLAttributes } from "react";
import { ClassName } from "../lib/ClassName";
import RarityStars from "./RarityStars";

interface RaritySelectorProps {
    value: number;
    onChange: any;
    min?: number;
    max?: number;
    noLeftRound?: undefined | boolean;
    noRightRound?: undefined | boolean;
    borderRadius?: string;
}

export function RaritySelector({
    value,
    onChange,
    min,
    max,
    noLeftRound,
    noRightRound,
    className,
    borderRadius = "0.375rem",
}: RaritySelectorProps & ClassName) {
    //#region style rounder
    let buttonStyle = {
        borderBottomLeftRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
    };
    if (noRightRound) {
        buttonStyle.borderBottomRightRadius = "0";
        buttonStyle.borderTopRightRadius = "0";
    }
    if (noLeftRound) {
        buttonStyle.borderBottomLeftRadius = "0";
        buttonStyle.borderTopLeftRadius = "0";
    }
    //#endregion

    return (
        <div className={`flex ${className}`}>
            <Listbox value={value} onChange={onChange}>
                <div className="relative w-18">
                    <Listbox.Button
                        style={buttonStyle}
                        className="listbutton"
                        title={`Selected rarity ${value}`}
                    >
                        <span className="block truncate">
                            <RarityStars className={`h-5`} rarity={value} />
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDownIcon
                                className="w-5 h-5 text-gscale-dark-text-ternary"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="listbox">
                            {[1, 2, 3, 4, 5].slice(min! - 1, max).map((rarity) => (
                                <Listbox.Option
                                    key={rarity}
                                    className={({ active }) =>
                                        `${
                                            active
                                                ? "bg-gscale-dark-background-secondary "
                                                : ""
                                        }
                          cursor-default select-none relative py-2 pl-10`
                                    }
                                    value={rarity}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className="flex">
                                                <div className={"mr-1"}>
                                                    <RarityStars
                                                        className={`h-5`}
                                                        rarity={rarity}
                                                    />
                                                </div>
                                                <div className="mr-6"></div>
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3`}
                                                >
                                                    <CheckIcon
                                                        className="w-5 h-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}
