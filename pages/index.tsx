import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import CharacterCard from "../components/CharacterCard";
import { Character, Characters, characters as charactersList } from "../data/characters";
import { Search } from "../components/Search";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import router from "next/router";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            characters: charactersList,
        },
    };
};

const IndexPage = ({ characters }: { characters: Characters }) => {
    const [search, setSearch] = useState("");

    const [fuse, setfuse] = useState(null);

    useEffect(() => {
        setfuse(
            //@ts-ignore
            new Fuse(Object.values(characters), {
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
            })
        );
    }, []);

    //@ts-ignore
    const searchResult = fuse ? fuse.search(search) : [];

    return (
        <Layout title="Home" current="Characters">
            <div className="max-w-screen-xl mx-5 xl:mx-auto">
                <Search
                    content={search}
                    setContent={setSearch}
                    onConfirm={() => {
                        const tsearch = searchResult;
                        if (tsearch.length > 0) {
                            router.push(`/build/${tsearch[0].item.id}`);
                        }

                        return false;
                    }}
                />
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {search !== ""
                        ? searchResult.map(({ item: character }: { item: Character }) => {
                              return (
                                  <CharacterCard
                                      character={character}
                                      key={character.id}
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
