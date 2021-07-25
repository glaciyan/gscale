import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import RarityStars from "./RarityStars";

interface RaritySelectorProps {
    value: number;
    onChange: any;
}

export function RaritySelector({ value, onChange }: RaritySelectorProps) {
    return (
        <div className="flex">
            <Listbox value={value} onChange={onChange}>
                <div className="relative w-18">
                    <Listbox.Button className="listbutton rounded-md">
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
                            {[1, 2, 3, 4, 5].map((rarity) => (
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
