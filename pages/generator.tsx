//@ts-nocheck
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ItemImage } from "../components/ItemImage";
import Layout from "../components/Layout";
import { Picture } from "../components/Picture";
import { items } from "../data/items";
import { toId } from "../lib";
import { standard } from "../lib/characterMaterials";
import { getItemFromGroup } from "../lib/ItemHelper";
import { ItemGroup } from "../lib/MyTypes";

interface GeneratorProps {}

const Generator: React.FC<GeneratorProps> = ({}) => {
    const [outCharacter, setoutCharacter] = useState("");
    const [outItem, setoutItem] = useState("");

    return (
        <Layout title="Generator">
            <div className={`w-full flex`}>
                <div style={{ width: "50%" }} className={`mx-6`}>
                    <h1>Character Generator</h1>
                    <Formik
                        onSubmit={(values) =>
                            setoutCharacter(`${toId(values.name)}: {
        id: "${toId(values.name)}",
        name: "${values.name}",
        rarity: ${values.rarity},
        constellation: "${values.constellation}",
        description:
            \`${values.description}\`,
        element: "${values.element}",
        weapon: "${values.weapon}",
        sub: "${values.sub}",
        materials: standard({
            boss: items.${values.boss}.name,
            local: items.${values.local}.name,
            weekly: items.${values.weekly}.name,
            common: ItemGroup.${values.common},
            book: ItemGroup.${values.book},
            gem: ItemGroup.${values.gem},
        }),
    },`)
                        }
                        initialValues={{
                            name: "",
                            rarity: 4,
                            constellation: "",
                            description: "",
                            element: "",
                            weapon: "",
                            sub: "",
                            boss: "",
                            local: "",
                            weekly: "",
                            common: "",
                            book: "",
                            gem: "",
                        }}
                    >
                        {({ values }) => (
                            <Form>
                                <Input id="name" />
                                <Input id="rarity" />
                                <Input id="constellation" />
                                <Input id="description" />
                                <Input id="element" />
                                <Input id="weapon" />
                                <Input id="sub" />

                                <div className="flex">
                                    <ItemImage item={items[values.boss]} />
                                    <Input id="boss" />
                                </div>
                                <div className="flex">
                                    <ItemImage item={items[values.local]} />
                                    <Input id="local" />
                                </div>
                                <div className="flex">
                                    <ItemImage item={items[values.weekly]} />
                                    <Input id="weekly" />
                                </div>
                                <Input id="common" />
                                <Input id="book" />
                                <Input id="gem" />
                                <Button
                                    text="Generate"
                                    color="blue-500"
                                    className={`my-6`}
                                />
                            </Form>
                        )}
                    </Formik>
                    <p className={`select-all text-white`}>{outCharacter}</p>
                </div>
                <div className={``}>
                    <h1>Item Generator</h1>
                    <Formik
                        onSubmit={(values) =>
                            setoutItem(`${toId(values.name)}: {
        name: "${values.name}",
        rarity: ${values.rarity},
        ${values.group ? `group: ItemGroup.${values.group},` : ""}
    },`)
                        }
                        initialValues={{
                            name: "",
                            rarity: 1,
                            group: "",
                        }}
                    >
                        <Form>
                            <Input id="name" />
                            <Input id="rarity" />
                            <Input id="group" />
                            <Button text="Generate" color="blue-500" className={`my-6`} />
                        </Form>
                    </Formik>
                    <p className={`select-all text-white`}>{outItem}</p>
                </div>
            </div>
        </Layout>
    );
};

export default Generator;
