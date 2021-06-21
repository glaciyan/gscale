import { CheckIcon } from "@heroicons/react/outline";
import millify from "millify";
import { BuildItem, Item } from "../data/items";
import { toId } from "../lib";
import buildsDB from "../lib/buildsDatabase";
import CheckListItemCard from "./CheckListItemCard";
import { Transition } from "@headlessui/react";
import { If } from "./If";
import { useState } from "react";

export default function CompletionItemGrid({
    items,
    build,
}: {
    items: BuildItem[];
    build: any;
}) {
    return (
        <div className="flex flex-wrap mx-4 mb-4">
            {items
                .sort((a, b) => a.order - b.order)
                .map((item) => {
                    const done = build.completed
                        ? build.completed.find((i: Item) => i.name === item.name) !==
                          undefined
                        : false;

                    return (
                        <CheckListItemCard
                            key={item.name}
                            done={done}
                            build={build}
                            item={item}
                            label={
                                item.amount > 999
                                    ? millify(item.amount)
                                    : String(item.amount)
                            }
                        />
                    );
                })}
        </div>
    );
}
