import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";

interface LevelItemListProps {
    value: number;
    onChange: any;
    first?: any;
    last?: any;
}

const borderRadius = "0.375rem";

export function TalentLevelListBox({ value, onChange, first, last }: LevelItemListProps) {
    return (
        <div className="flex">
            <Listbox value={value} onChange={onChange}>
                <div className="relative w-20">
                    <Listbox.Button
                        style={
                            first
                                ? {
                                      borderBottomLeftRadius: borderRadius,
                                      borderTopLeftRadius: borderRadius,
                                  }
                                : last
                                ? {
                                      borderTopRightRadius: borderRadius,
                                      borderBottomRightRadius: borderRadius,
                                  }
                                : {}
                        }
                        className="listbutton"
                    >
                        <span className="block truncate">{value}</span>
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
                        <Listbox.Options className="listbox sm:!max-h-72">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                                <Listbox.Option
                                    key={level}
                                    className={({ active }) =>
                                        `${
                                            active
                                                ? "bg-gscale-dark-background-secondary "
                                                : ""
                                        }
                          cursor-default select-none relative py-2 pl-10`
                                    }
                                    value={level}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className="flex">
                                                <div className={"mr-1"}>{level}</div>
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
