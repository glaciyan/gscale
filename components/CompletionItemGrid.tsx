import millify from "millify";
import { items } from "../data/items";
import { MaterialCalculation } from "../lib/characterMaterials";
import itemOrder from "../lib/itemOrder";
import { BuildItem, Item, Materials } from "../lib/MyTypes";
import CheckListItemCard from "./CheckListItemCard";
import { If } from "./If";

export default function CompletionItemGrid({
    items: calc,
    build,
}: {
    items: MaterialCalculation;
    build: any;
}) {
    return (
        <div className="flex flex-wrap -m-1">
            <If cif={calc.totalMora > 0}>
                <CheckListItemCard
                    done={
                        build.completed
                            ? build.completed.find((i: Item) => i.name === "Mora") !==
                              undefined
                            : false
                    }
                    build={build}
                    item={{
                        name: "Mora",
                        order: itemOrder.mora,
                        amount: calc.totalMora,
                        rarity: 1,
                    }}
                    label={millify(calc.totalMora)}
                />
            </If>
            <If cif={calc.totalXp > 0}>
                <CheckListItemCard
                    done={
                        build.completed
                            ? build.completed.find(
                                  (i: Item) => i.name === "Hero's Wit"
                              ) !== undefined
                            : false
                    }
                    build={build}
                    item={{
                        name: "Hero's Wit",
                        order: itemOrder.xpLazy,
                        amount: Math.ceil(calc.totalXp / items.heros_wit.xp),
                        rarity: 4,
                    }}
                    label={`${Math.ceil(calc.totalXp / items.heros_wit.xp)}`}
                />
            </If>
            {calc.everything
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
