import { Item } from "../data/items";
import { ItemImage } from "./ItemImage";

export default function ItemCard({ item, label }: { item: Item; label?: string }) {
    if (label && label === "0") return null;

    return (
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
    );
}
