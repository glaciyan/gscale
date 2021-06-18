import { BuildItem } from "../data/items";
import { toId } from "../lib";
import MiniItemCard from "./ItemCard";

export default function ItemGrid({ items }: { items: BuildItem[] }) {
    return (
        <div className="flex flex-wrap">
            {items
                .sort((a, b) => a.order - b.order)
                .map((item) => {
                    return (
                        <MiniItemCard
                            item={item}
                            label={String(item.amount)}
                            key={toId(item.name)}
                        />
                    );
                })}
        </div>
    );
}
