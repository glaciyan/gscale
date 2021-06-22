import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import CharacterCard from "../components/CharacterCard";
import { Character, Characters, characters as charactersList } from "../data/characters";
import { Search } from "../components/Search";
import { useEffect, useState } from "react";
import { If } from "../components/If";
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

    const options = {
        threshold: 0.4,
        keys: ["id", "name", "element", "weapon", "rarity"],
    } as any;

    const fuse = new Fuse(Object.values(characters), options);

    return (
        <Layout title="Home" current="Characters">
            <div className="max-w-screen-xl mx-5 xl:mx-auto">
                <Search
                    content={search}
                    setContent={setSearch}
                    onConfirm={() => {
                        const tsearch = fuse.search(search);
                        if (tsearch.length > 0) {
                            router.push(`/build/${tsearch[0].item.id}`);
                        }

                        return false;
                    }}
                />
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {search !== ""
                        ? fuse
                              .search(search)
                              .map(({ item: character }: { item: Character }) => {
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
