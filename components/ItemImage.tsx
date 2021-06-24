import React from "react";
import Img from "react-optimized-image";
import { Item } from "../data/items";
import { toId } from "../lib";

interface ItemImageProps {
    item: Item;
}

export const ItemImage: React.FC<ItemImageProps> = ({ item }) => {
    if (!item) return null;
    return (
        <Img
            src={require(`../public/images/materials/${
                toId(item.name) ?? "null"
            }.png?width=40?height=40`)}
            className="object-contain w-full h-full"
            draggable={false}
            alt={item.name}
            title={item.name}
        />
    );
};
