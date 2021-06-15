import React from "react";
import { BuildItem } from "../data/items";
import ItemGrid from "./ItemGrid";

interface ShowcaseCategoryProps {
    items: BuildItem[];
    label: string;
}

export const ShowcaseCategory: React.FC<ShowcaseCategoryProps> = ({ items, label }) => {
    if (items.length > 0) {
        return (
            <>
                <h3 className="mt-2 mb-1">{label}</h3>
                <ItemGrid items={items} />
            </>
        );
    } else {
        return null;
    }
};
