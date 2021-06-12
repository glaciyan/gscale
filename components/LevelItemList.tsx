import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/outline";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { Star } from "./icons/star";

interface LevelItemListProps {
    value: number;
    onChange: Dispatch<SetStateAction<any>>;
}

export function LevelItemList({ value, onChange }: LevelItemListProps) {
    return (
        <div className="flex">
            <Listbox value={value} onChange={onChange}>
                <div className="relative">
                    <Listbox.Button className="relative w-full h-10 py-2 pl-3 pr-10 text-left shadow-md cursor-default bg-gscale-dark-background-secondary focus:outline-none focus-visible:ring">
                        <span className="block truncate">{value.level}</span>
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
                        <Listbox.Options className="absolute py-1 mt-1 overflow-auto text-base rounded-md shadow-lg text-gscale-dark-text-secondary bg-gscale-dark-background-primary max-h-60 sm:max-h-screen w-max ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {characerLevelsArray.map((level) => (
                                <Listbox.Option
                                    key={level.level + (level.ascended ? 1 : 0)}
                                    className={({ active }) =>
                                        `${
                                            active
                                                ? "bg-gscale-dark-background-secondary "
                                                : ""
                                        }
                          cursor-default select-none relative py-2 pl-10 pr-8`
                                    }
                                    value={level}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className="flex">
                                                <span className={"block truncate mr-1"}>
                                                    {level.level}
                                                </span>
                                                {level.ascended ? <Star /> : null}
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
                className="flex items-center justify-center w-10 h-10 shadow-md bg-gscale-dark-background-secondary hover:bg-opacity-90 focus:outline-none focus:ring"
                onClick={() => {}}
            >
                <Star
                    color={
                        value.ascended
                            ? "text-genshin-rarity-5"
                            : "text-gscale-dark-text-ternary"
                    }
                />
            </button>
        </div>
    );
}
