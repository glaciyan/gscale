import React from "react";
import Img from "react-optimized-image";
import { toId } from "../lib";
import { Item } from "../lib/MyTypes";

interface ItemImageProps {
    item: Item;
}

export const ItemImage: React.FC<ItemImageProps> = ({ item }) => {
    if (!item) return null;
    return (
        <Img
            src={require(`../public/images/materials/${toId(
                item.name
            )}.png?width=40?height=40`)}
            className="object-contain w-full h-full"
            draggable={false}
            alt={item.name}
            title={item.name}
        />
    );
};
