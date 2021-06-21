import millify from "millify";
import { BuildItem, Item } from "../data/items";
import CheckListItemCard from "./CheckListItemCard";

export default function CompletionItemGrid({
    items,
    build,
}: {
    items: BuildItem[];
    build: any;
}) {
    return (
        <div className="flex flex-wrap -m-1">
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
