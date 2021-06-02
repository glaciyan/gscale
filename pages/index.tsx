import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import CharacterCard from "../components/CharacterCard";
import { Characters, characters } from "../data/characters";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            characters: characters,
        },
    };
};

const IndexPage = ({ characters }: { characters: Characters }) => (
    <Layout title="Home" current="Characters">
        <div className="grid max-w-screen-xl grid-cols-2 gap-5 mx-5 xl:mx-auto sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Object.entries(characters).map(([id, character]) => {
                return <CharacterCard character={character} key={id} />;
            })}
        </div>
    </Layout>
);

export default IndexPage;
