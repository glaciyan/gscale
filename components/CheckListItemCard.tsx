import { BuildItem, Item } from "../data/items";
import { toId } from "../lib";
import buildsDB from "../lib/buildsDatabase";
import { ItemImage } from "./ItemImage";

export default function CheckListItemCard({
    item,
    build,
    label,
}: {
    item: BuildItem;
    build: any;
    label?: string;
}) {
    if (label && label === "0") return null;

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

                        buildsDB.builds.update(Number.parseInt(build.id), {
                            completed: completed,
                        });
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
            <div
                className={`flex flex-col items-center m-1 overflow-hidden rounded shadow bg-gscale-dark-background-primary`}
                style={{ height: "max-content" }}
            >
                <div className="w-12 h-12 p-1">
                    <ItemImage item={item} />
                </div>
                {label ? (
                    <div className="w-full px-1 text-center bg-gscale-dark-background-500">
                        {label}
                    </div>
                ) : null}
            </div>
        </button>
    );
}
