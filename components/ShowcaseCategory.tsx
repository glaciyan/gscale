import React from "react";
import { BuildItem } from "../data/items";
import ItemGrid from "./ItemGrid";

interface ShowcaseCategoryProps {
    items: BuildItem[];
    label: string;
    emphasis?: any;
}

export const ShowcaseCategory: React.FC<ShowcaseCategoryProps> = ({
    items,
    label,
    emphasis,
}) => {
    if (items.length > 0) {
        return (
            <>
                <h3 className={`mt-2 mb-1 ${emphasis ? "font-semibold" : ""}`}>
                    {label}
                </h3>
                <ItemGrid items={items} />
            </>
        );
    } else {
        return null;
    }
};
