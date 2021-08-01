import React, { useState } from "react";
import { ElementIcon } from "./icons/element";
import { IconWithText } from "./IconWithText";
import { CharacterItemShowcase } from "./CharacterItemShowcase";
import { CharacterRarityMugshot } from "./CharacterRarityMugshot";
import { Character } from "../lib/MyTypes";
import { upperCaseFirst } from "upper-case-first";
import { Picture } from "./Picture";
import { ExclamationIcon } from "@heroicons/react/outline";
import { If } from "./If";

interface CharacterDetailsProps {
    character: Character;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
    const [extendedDescription, setextendedDescription] = useState(false);

    return (
        <div className="maxsm:rounded-t-md sm:rounded-tl-md lg:rounded-l-md bg-gscale-dark-background-ternary500 lg:flex-grow-0">
            <div className="relative flex flex-col h-full">
                <div className="absolute inset-x-0 top-0 z-10 w-full h-32 overflow-hidden rounded-tl-md maxsm:rounded-tr-md">
                    <Picture
                        name={`/images/characters/card/${
                            character.imageId ?? character.id
                        }`}
                        alt={character.name}
                        width="480"
                        height="300"
                        className="object-cover w-full h-full opacity-50"
                    />
                </div>
                <div className="z-20 flex-1 h-full buildpagepadding">
                    <CharacterRarityMugshot
                        character={character}
                        className="mb-6 sm:-mt-2"
                    />
                    <div>
                        <If cif={character.speculated === true}>
                            <div className="p-2 mb-2 text-sm text-orange-400 rounded-md sm:w-64 bg-gscale-dark-background-secondary">
                                <IconWithText
                                    icon={<ExclamationIcon className={`w-5 h-5`} />}
                                >
                                    <span className={`font-bold`}>Warning</span>
                                </IconWithText>
                                This character has not been released. Data shown here is
                                from external sources and speculation.
                            </div>
                        </If>
                        <div className="font-bold text-gscale-dark-text-primary">
                            {character.name}
                        </div>
                        <div className="text-gscale-dark-text-secondary">
                            {character.constellation}
                        </div>
                        <div
                            onClick={() => setextendedDescription(!extendedDescription)}
                            className={`block mt-1 text-sm leading-4 sm:w-64 text-gscale-dark-text-ternary ${
                                extendedDescription ? "" : "line-clamp-4"
                            }`}
                        >
                            {character.description}
                        </div>
                    </div>
                    <div className="mt-6 space-y-1">
                        <IconWithText
                            icon={
                                <ElementIcon className="w-6 h-6 text-gscale-dark-text-ternary" />
                            }
                        >
                            <span className={`text-genshin-element-${character.element}`}>
                                {upperCaseFirst(character.element)}
                            </span>
                        </IconWithText>
                        <IconWithText
                            icon={
                                <svg
                                    className="self-start text-gscale-dark-text-ternary"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.05827 14.9414L5.69652 18.3031M7.39168 13.2748L14.9699 5.69656L18.3031 5.69656L18.3031 9.02974L10.7249 16.608L7.39168 13.2748ZM5.69652 11.5796L12.42 18.3031L5.69652 11.5796Z"
                                        stroke="currentColor"
                                        strokeWidth="1.49759"
                                        strokeMiterlimit="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        >
                            <div className="text-gscale-dark-text-secondary">
                                {upperCaseFirst(character.weapon)}
                            </div>
                            <div className="mt-0.5 text-gscale-dark-text-secondary">
                                {character.sub}
                            </div>
                        </IconWithText>
                    </div>
                </div>
                <CharacterItemShowcase character={character} className="" />
            </div>
        </div>
    );
};
