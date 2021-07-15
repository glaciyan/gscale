import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import CharacterCard from "../components/CharacterCard";
import { characters as charactersList } from "../data/characters";
import { Search } from "../components/Search";
import { useEffect, useState } from "react";
import router from "next/router";
import { Character, Characters } from "../lib/MyTypes";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            characters: charactersList,
        },
    };
};

const IndexPage = ({ characters }: { characters: Characters }) => {
    const [search, setSearch] = useState<{ item: Character }[]>([]);

    useEffect(() => {
        throw "test errror;";
    });
    return (
        <Layout title="Home" current="Characters">
            <div className="max-w-screen-xl mx-5 xl:mx-auto">
                <Search
                    onChange={async (e: any) => {
                        const { value } = e.currentTarget;
                        const Fuse = (await import("fuse.js")).default;
                        const fuse = new Fuse(Object.values(characters), {
                            threshold: 0.3,
                            useExtendedSearch: true,
                            keys: [
                                { name: "name", weight: 3 },
                                { name: "element", weight: 2 },
                                { name: "weapon", weight: 2 },
                                "rarity",
                                "common",
                                "book",
                                "weekly",
                                "ascension",
                                "local",
                            ],
                        });

                        //@ts-ignore
                        setSearch(fuse.search(value));
                    }}
                    onConfirm={() => {
                        if (search.length > 0) {
                            router.push(`/build/${search[0].item.id}`);
                        }

                        return false;
                    }}
                />
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {search.length !== 0
                        ? search.map((character) => {
                              return (
                                  <CharacterCard
                                      character={character.item}
                                      key={character.item.id}
                                  />
                              );
                          })
                        : Object.entries(characters).map(([_, character]) => {
                              return (
                                  <CharacterCard
                                      character={character}
                                      key={character.id}
                                  />
                              );
                          })}
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
