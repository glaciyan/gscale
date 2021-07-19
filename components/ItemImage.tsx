import React from "react";
import { toId } from "../lib";
import { Item } from "../lib/MyTypes";
import { ITEM_ICON_WIDTH } from "../lib/const";

interface ItemImageProps {
    item: Item;
}

export const ItemImage: React.FC<ItemImageProps> = ({ item }) => {
    if (!item) return null;
    const name = `/images/materials/${toId(item.name)}`;
    return (
        <picture>
            <source type="image/webp" srcSet={`${name}.webp`} />
            <source type="image/png" srcSet={`${name}.png`} />
            <img
                src={`${name}.png`}
                width={ITEM_ICON_WIDTH}
                height={ITEM_ICON_WIDTH}
                className="object-contain w-full h-full"
                draggable={false}
                alt={item.name}
                title={item.name}
                decoding="async"
            />
        </picture>
    );
};
