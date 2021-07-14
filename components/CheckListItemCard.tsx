import { toId } from "../lib";
import { getBuildsDB } from "../lib/buildsDatabase";
import { CheckIcon } from "@heroicons/react/outline";
import { If } from "./If";
import { ItemImage } from "./ItemImage";
import { BuildItem, Item } from "../lib/MyTypes";

export default function CheckListItemCard({
    item,
    build,
    done,
    label,
}: {
    item: BuildItem;
    build: any;
    done: boolean;
    label?: string;
}) {
    if (label && label === "0") return null;

    return (
        <button
            className="relative m-1 rounded focus:outline-none focus-visible:ring"
            key={toId(item.name)}
            title={item.name}
            onClick={async () => {
                if (build.completed) {
                    const find = build.completed.findIndex(
                        (element: Item) => element.name === item.name
                    );

                    if (find > -1) {
                        const completed = [...build.completed];
                        completed.splice(find, 1);

                        await (
                            await getBuildsDB()
                        ).builds.update(Number.parseInt(build.id), {
                            completed: completed,
                        });

                        return;
                    }
                }

                await (
                    await getBuildsDB()
                ).builds.update(Number.parseInt(build.id), {
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
                className={`flex flex-col items-center overflow-hidden rounded shadow bg-gscale-dark-background-secondary`}
                style={{ height: "max-content" }}
            >
                <div
                    className={`flex items-center bg-black justify-center absolute w-full h-full transition-all rounded-md ring-inset ring-green-400 bg-opacity-0 ${
                        done
                            ? "ring backdrop-filter backdrop-saturate-0 !bg-opacity-30"
                            : "hover:ring-2"
                    }`}
                >
                    <If cif={done}>
                        <CheckIcon className="w-6 h-6 text-green-400" />
                    </If>
                </div>
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
