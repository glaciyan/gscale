import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import RarityStars from "./RarityStars";
import cn from "classnames";
import Link from "next/link";

export default function CharacterCard({
    character,
    className,
    compact = false,
}: {
    character: any;
    className?: string;
    compact?: boolean;
}) {
    const isProbablyTouch = useMediaQuery({ maxDeviceWidth: 1023 });

    const cardHoverDialog = (
        <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-full group-hover:h-full">
            <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-0 group-hover:bg-opacity-80 bg-gscale-dark-background-ternary">
                <Link href={`/build/${character.name}`}>
                    <a
                        className={`btn focus:outline-none shadow hover:bg-opacity-90 opacity-0 font-medium group-hover:opacity-100 bg-genshin-dark-element-${character.element.id} text-gscale-dark-text-primary`}
                    >
                        Build {character.name}
                    </a>
                </Link>
                <Link
                    href={{ pathname: `/builds`, query: { max: character.id } }}
                >
                    <a
                        className={`btn mt-3 focus:outline-none shadow hover:ring-opacity-90 ring-2 hover:bg-opacity-30 hover:bg-gscale-dark-background-ternary ring-inset ring-genshin-dark-element-${character.element.id} text-genshin-dark-element-${character.element.id} opacity-0 font-medium group-hover:opacity-100`}
                    >
                        Lvl 1 to Max
                    </a>
                </Link>
            </div>
        </div>
    );

    const card = (
        <>
            {compact ? null : (
                <div className="relative flex items-center justify-center overflow-hidden bg-gscale-dark-background-secondary">
                    <Image
                        src={`/images/characters/card/${character.id}.png`}
                        layout="intrinsic"
                        height="300"
                        width="480"
                        quality="85"
                        alt={`Genshin Impact Character ${character.name}`}
                    />
                    {!isProbablyTouch ? cardHoverDialog : null}
                </div>
            )}
            <div className="px-4 py-3">
                <div className="flex flex-wrap items-center">
                    <span
                        className={`text-genshin-element-${character.element.id} mr-1`}
                    >
                        {character.element.name}
                    </span>
                    <span className="text-gscale-dark-text-secondary mr-0.5 opacity-80">
                        {character.weapon.name}
                    </span>
                    <RarityStars
                        rarity={character.rarity}
                        className="inline w-auto h-5"
                    />
                </div>

                <h3 className="mt-1 text-lg font-medium text-gscale-dark-text-primary">
                    {character.name}
                </h3>
            </div>
        </>
    );

    if (!isProbablyTouch) {
        return (
            <div
                className={cn(
                    `relative group bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg ring-genshin-element-${character.element.id} hover:ring`,
                    className
                )}
            >
                {card}
            </div>
        );
    } else {
        return (
            <Link href={`build/${character.id}`}>
                <a
                    className={cn(
                        `relative group bg-gscale-dark-background-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg ring-genshin-element-${character.element.id} hover:ring`,
                        className
                    )}
                >
                    {card}
                </a>
            </Link>
        );
    }
}
