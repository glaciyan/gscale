import { Item } from "../data/items";
import { ItemImage } from "./ItemImage";

export default function MiniItemCard({ item, label }: { item: Item; label?: string }) {
    return (
        <div className="flex flex-col items-center justify-center w-12 m-1 overflow-hidden rounded shadow">
            <div className="w-12 h-12 p-1 bg-gscale-dark-background-primary">
                <ItemImage item={item} />
            </div>
            {label ? (
                <div className="w-full text-center bg-gscale-dark-background-500">
                    {label}
                </div>
            ) : null}
        </div>
    );
}
