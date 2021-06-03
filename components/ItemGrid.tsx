import { BuildItem } from "../data/items";
import { toId } from "../lib";
import MiniItemCard from "./MiniItemCard";

export default function ItemGrid({ items }: { items: BuildItem[] }) {
    return (
        <div className="flex flex-wrap my-3">
            {items
                .sort((a, b) => a.order - b.order)
                .map((item) => {
                    return (
                        <MiniItemCard
                            imageUrl={`/images/materials/${toId(item.name)}.png`}
                            imageName={item.name}
                            label={item.amount}
                            key={toId(item.name)}
                        />
                    );
                })}
        </div>
    );
}
