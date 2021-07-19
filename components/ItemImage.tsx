import React from "react";
import { toId } from "../lib";
import { Item } from "../lib/MyTypes";
import { ITEM_ICON_WIDTH } from "../lib/const";

interface ItemImageProps {
    item: Item;
}

export const ItemImage: React.FC<ItemImageProps> = ({ item }) => {
    if (!item) return null;
    return (
        <img
            src={`/images/materials/${toId(item.name)}.png`}
            width={ITEM_ICON_WIDTH}
            height={ITEM_ICON_WIDTH}
            className="object-contain w-full h-full"
            draggable={false}
            alt={item.name}
            title={item.name}
        />
    );
};
