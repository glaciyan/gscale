import { BuildItem, Materials } from "../lib/MyTypes";
import { toId } from "../lib";
import MiniItemCard from "./ItemWithLabel";

export default function ItemGrid({ items }: { items: Materials }) {
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
