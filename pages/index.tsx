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
    <Layout title="Home | Next.js + TypeScript Example">
        {Object.entries(characters).map(([name, props]) => {
            return <CharacterCard characterName={name} character={props} />;
        })}
    </Layout>
);

export default IndexPage;
