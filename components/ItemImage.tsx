import React from "react";
// import Img from "react-optimized-image";
import Image from "../lib/next-native-image";
import { toId } from "../lib";
import { Item } from "../lib/MyTypes";
import { ITEM_ICON_WIDTH } from "../lib/const";

interface ItemImageProps {
    item: Item;
}

export const ItemImage: React.FC<ItemImageProps> = ({ item }) => {
    if (!item) return null;
    return (
        <Image
            src={`/images/materials/${toId(item.name)}.png`}
            layout="native"
            width={ITEM_ICON_WIDTH}
            className="object-contain w-full h-full"
            draggable={false}
            alt={item.name}
            title={item.name}
        />
    );
};
