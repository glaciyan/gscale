import millify from "millify";
import { BuildItem, Item } from "../data/items";
import { toId } from "../lib";
import buildsDB from "../lib/buildsDatabase";
import ItemCard from "./ItemCard";

export default function CompletionItemGrid({
    items,
    build,
}: {
    items: BuildItem[];
    build: any;
}) {
    return (
        <div className="flex flex-wrap">
            {items
                .sort((a, b) => a.order - b.order)
                .map((item) => {
                    const done = build.completed
                        ? build.completed.find((i: Item) => i.name === item.name) !==
                          undefined
                        : false;

                    return (
                        <button
                            key={toId(item.name)}
                            onClick={() => {
                                if (build.completed) {
                                    const find = build.completed.findIndex(
                                        (element: Item) => element.name === item.name
                                    );

                                    if (find > -1) {
                                        const completed = [...build.completed];
                                        completed.splice(find, 1);

                                        buildsDB.builds.update(
                                            Number.parseInt(build.id),
                                            { completed: completed }
                                        );
                                        return;
                                    }
                                }

                                buildsDB.builds.update(Number.parseInt(build.id), {
                                    completed: build.completed
                                        ? [
                                              {
                                                  name: item.name,
                                                  amount: item.amount,
                                              },
                                              ...build.completed,
                                          ]
                                        : [
                                              {
                                                  name: item.name,
                                                  amount: item.amount,
                                              },
                                          ],
                                });
                            }}
                        >
                            <ItemCard
                                completed={done}
                                item={item}
                                label={
                                    item.amount > 999
                                        ? millify(item.amount)
                                        : String(item.amount)
                                }
                            />
                        </button>
                    );
                })}
        </div>
    );
}
