import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import { characterLevels } from "../data/characterLevels";
import { getCharacterLevel } from "../lib/getCharacterLevel";
import { Star } from "./icons/star";

interface LevelItemListProps {
    value: number;
    onChange: any;
    first?: any;
    last?: any;
}

export function LevelSelector({ value, onChange, first, last }: LevelItemListProps) {
    return (
        <div className="flex">
            <Listbox value={value} onChange={onChange}>
                <div className="relative">
                    <Listbox.Button
                        style={
                            first
                                ? {
                                      borderBottomLeftRadius: "0.375rem",
                                      borderTopLeftRadius: "0.375rem",
                                  }
                                : {}
                        }
                        className="relative h-10 py-2 pl-3 pr-10 text-left shadow-md cursor-default bg-gscale-dark-background-primary focus:outline-none focus-visible:ring"
                    >
                        <span className="block truncate">
                            {getCharacterLevel(value).level}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                                className="w-5 h-5 text-gscale-dark-text-primary"
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
                        <Listbox.Options className="absolute w-auto py-1 mt-1 overflow-auto rounded-md shadow-lg text-gscale-dark-text-secondary bg-gscale-dark-background-primary max-h-96 sm:max-h-screen ring-opacity-5 focus:outline-none focus-visible:ring-inset focus-visible:ring">
                            {Object.values(characterLevels).map((level) => (
                                <Listbox.Option
                                    key={level.level + (level.ascended ? 1 : 0)}
                                    className={({ active }) =>
                                        `${
                                            active
                                                ? "bg-gscale-dark-background-secondary "
                                                : ""
                                        }
                          cursor-default select-none relative py-2 pl-10`
                                    }
                                    value={level.level + (level.ascended ? 1 : 0)}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className="flex">
                                                <div className={"mr-1"}>
                                                    {level.level}
                                                </div>
                                                {level.ascended ? <Star /> : null}
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
            <div className="w-px bg-gscale-dark-background-primary"></div>
            <button
                className="flex items-center justify-center w-10 h-10 shadow-md bg-gscale-dark-background-secondary hover:bg-opacity-70 focus:outline-none focus-visible:ring"
                onClick={() => {
                    console.log(value);

                    if (getCharacterLevel(value).ascended) {
                        onChange(value - 1);
                    } else {
                        if (value >= 20 && value < 90) onChange(value + 1);
                    }
                }}
                style={
                    last
                        ? {
                              borderTopRightRadius: "0.375rem",
                              borderBottomRightRadius: "0.375rem",
                          }
                        : {}
                }
            >
                <Star
                    color={
                        getCharacterLevel(value).ascended
                            ? "text-genshin-rarity-5"
                            : "text-gscale-dark-text-ternary"
                    }
                />
            </button>
        </div>
    );
}
