import React from "react";
import cn from "classnames";

export default function RarityStars({
    rarity,
    className,
}: {
    rarity: number | string;
    className?: string;
}) {
    let color = `text-genshin-rarity-${rarity}`;
    const baseWidth = 24;
    const additionalStarWidth = 8.5;

    if (typeof rarity === "string") rarity = Number.parseInt(rarity);

    return (
        <>
            <span className="sr-only">{rarity} Stars</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${baseWidth + (rarity - 1) * additionalStarWidth} 24`}
                className={cn(className, color)}
                aria-hidden="true"
            >
                <title>{rarity} Stars</title>
                {rarity >= 1 ? (
                    <path
                        fill="currentColor"
                        d="M12.705 4.552a.75.75 0 00-1.43-.003L9.68 9.522l-4.952-.011a.75.75 0 00-.463 1.34l4.098 3.203-1.38 5.015a.75.75 0 001.198.779l3.78-3.098 3.766 3.115a.75.75 0 001.203-.773l-1.357-5.021 4.112-3.184a.75.75 0 00-.457-1.343l-4.952-.011-1.571-4.98z"
                    ></path>
                ) : null}
                {rarity >= 2 ? (
                    <path
                        fill="currentColor"
                        d="M18.646 8.016h.603a2.235 2.235 0 011.373 3.998l-3.325 2.585 1.055 3.868 2.12-1.745 3.773 3.107a.751.751 0 001.202-.776l-1.37-5.018 4.106-3.193a.752.752 0 00.25-.835.753.753 0 00-.71-.507h-4.952l-1.584-4.977a.748.748 0 00-1.428 0l-1.113 3.493z"
                    ></path>
                ) : null}
                {rarity >= 3 ? (
                    <path
                        fill="currentColor"
                        d="M27.118 8.016h.605a2.234 2.234 0 011.37 3.998l-3.324 2.585 1.055 3.868 2.12-1.745 3.775 3.107a.75.75 0 001.2-.776l-1.368-5.018 4.103-3.193a.748.748 0 00-.459-1.342h-4.952l-1.584-4.977a.748.748 0 00-1.428 0l-1.113 3.493z"
                    ></path>
                ) : null}
                {rarity >= 4 ? (
                    <path
                        fill="currentColor"
                        d="M35.592 8.016h.603a2.234 2.234 0 011.37 3.998l-3.322 2.585 1.053 3.868 2.12-1.745 3.775 3.107a.75.75 0 001.2-.776l-1.368-5.018 4.106-3.193a.75.75 0 00-.462-1.342h-4.952l-1.582-4.977A.753.753 0 0037.416 4a.748.748 0 00-.714.523l-1.11 3.493z"
                    ></path>
                ) : null}
                {rarity >= 5 ? (
                    <path
                        fill="currentColor"
                        d="M44.064 8.016h.603a2.234 2.234 0 011.373 3.998l-3.325 2.585 1.055 3.868 2.12-1.745 3.773 3.107a.749.749 0 001.2-.776l-1.369-5.018 4.106-3.193a.747.747 0 00.248-.835.748.748 0 00-.71-.507H48.19l-1.584-4.977a.75.75 0 00-1.43 0l-1.111 3.493z"
                    ></path>
                ) : null}
            </svg>
        </>
    );
}
