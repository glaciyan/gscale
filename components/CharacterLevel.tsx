import React from "react";
import { Level } from "../data/characterLevels";
import { ClassName } from "../lib/ClassName";
import { Star } from "./icons/star";
import { If } from "./If";

interface CharacterLevelProps {
    level: Level;
}

export const CharacterLevel: React.FC<CharacterLevelProps & ClassName> = ({
    level,
    className,
}) => {
    return (
        <div className={`flex items-center ${className}`}>
            <span className="mr-0.5">{level.level}</span>
            <If cif={level.ascended}>
                <Star small />
            </If>
        </div>
    );
};
