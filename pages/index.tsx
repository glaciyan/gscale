import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import CharacterCard from "../components/CharacterCard";
import { Characters } from "../interfaces";
import fs from "fs";
import yaml from "js-yaml";

export const getStaticProps: GetStaticProps = async () => {
    const CharacterApi = yaml.load(
        fs.readFileSync("./data/characters.yaml").toString()
    ) as Characters;
    return {
        props: {
            characters: CharacterApi,
        },
    };
};

const IndexPage = ({ characters }: { characters: Characters }) => (
    <Layout title="Home" current="Characters">
        <div className="grid max-w-screen-xl grid-cols-2 gap-5 mx-5 xl:mx-auto sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Object.entries(characters).map(([name, props]) => {
                return (
                    <CharacterCard
                        characterName={name}
                        character={props}
                        key={name}
                    />
                );
            })}
        </div>
    </Layout>
);

export default IndexPage;
