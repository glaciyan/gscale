import React from "react";
import { toId } from "../lib";
import { Item } from "../lib/MyTypes";
import { ITEM_ICON_WIDTH } from "../lib/const";
import { Picture } from "./Picture";

interface ItemImageProps {
    item: Item;
}

export const ItemImage: React.FC<ItemImageProps> = ({ item }) => {
    if (!item) return null;

    return (
        <Picture
            name={`/images/materials/${toId(item.name)}`}
            width={ITEM_ICON_WIDTH}
            height={ITEM_ICON_WIDTH}
            className="object-contain w-full h-full"
            draggable={false}
            alt={item.name}
            title={item.name + item.order}
            decoding="async"
        />
    );
};
