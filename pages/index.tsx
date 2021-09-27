import {GetStaticProps} from "next";
import Layout from "../components/Layout";
import CharacterCard from "../components/CharacterCard";
import {characters as charactersList} from "../data/characters";
import {Search} from "../components/Search";
import {useEffect, useState} from "react";
import router from "next/router";
import {Character, Characters} from "../lib/MyTypes";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            characters: charactersList,
        },
    };
};

const IndexPage = ({characters}: { characters: Characters }) => {
    const [search, setSearch] = useState<{ item: Character }[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <Layout title="Home" current="Characters">
            <div className="max-w-screen-xl mx-5 xl:mx-auto">
                <Search
                    onChange={async (e: any) => {
                        const {value} = e.currentTarget;
                        setSearchTerm(value)

                        const Fuse = (await import("fuse.js")).default;
                        const fuse = new Fuse(Object.values(characters), {
                            threshold: 0.2,
                            useExtendedSearch: true,
                            keys: [
                                {name: "name", weight: 3},
                                {name: "element", weight: 2},
                                {name: "weapon", weight: 2},
                                "rarity",
                                // "materials"
                                "materials.list.boss",
                                "materials.list.local",
                                "materials.list.weekly",
                                "materials.list.bookName",
                                "materials.list.commonName",
                                "materials.list.gemName",
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
                    {search.length === 0 ? (searchTerm.length > 0 ?
                        <div>No results</div> : Object.entries(characters).map(([_, character]) => {
                            return (
                                <CharacterCard
                                    character={character}
                                    key={character.id}
                                />
                            );
                        })) : search.map((character) => {
                        return (
                            <CharacterCard
                                character={character.item}
                                key={character.item.id}
                            />
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
