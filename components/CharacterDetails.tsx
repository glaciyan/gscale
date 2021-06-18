import React from "react";
import Img from "react-optimized-image";
import { Character } from "../data/characters";
import RarityStars from "./RarityStars";
import _ from "lodash";
import { ElementIcon } from "./icons/element";
import { IconWithText } from "./IconWithText";
import { CharacterItemShowcase } from "./CharacterItemShowcase";
import Image from "next-native-image";

interface CharacterDetailsProps {
    character: Character;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
    return (
        <div className="maxsm:rounded-t-md sm:rounded-tl-md lg:rounded-l-md bg-gscale-dark-background-ternary500 lg:flex-grow-0">
            <div className="relative flex flex-col h-full">
                <div className="absolute inset-x-0 top-0 z-10 w-full h-32 overflow-hidden rounded-tl-md maxsm:rounded-tr-md">
                    <Image
                        src={`/images/characters/card/${character.id}.png`}
                        alt={character.name}
                        layout="native"
                        width="480"
                        quality="85"
                        className="object-cover w-full h-full opacity-50"
                    />
                </div>
                <div className="z-20 flex-1 h-full buildpagepadding">
                    <div className="mb-6 overflow-hidden rounded-md sm:-mt-2 w-max">
                        <Img
                            className="bg-gscale-dark-background-secondary"
                            src={require(`../public/images/characters/mugshot/${character.id}.png?width=100?height=100`)}
                            alt={character.name}
                        />
                        <div className="flex items-center justify-center bg-gscale-dark-background-primary py-0.5">
                            <RarityStars rarity={character.rarity} className="h-5" />
                        </div>
                    </div>

                    <div>
                        <div className="font-bold text-gscale-dark-text-primary">
                            {character.name}
                        </div>
                        <div className="text-gscale-dark-text-secondary">
                            {character.constellation}
                        </div>
                        <div
                            className="block mt-1 text-sm leading-4 sm:w-64 text-gscale-dark-text-ternary line-clamp-4"
                            title={character.description}
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
                                {_.upperFirst(character.element)}
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
                                {_.upperFirst(character.weapon)}
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
