import React from "react";
import { ExternalLink } from "../../components/ExternalLink";
import { ToolLayout } from "../../components/ToolLayout";
import testingdata, { artifactScaling } from "../../lib/utils/testingdata";
import RarityStars from "../../components/RarityStars";
import { LineGraph } from "../../components/dataviz/LineGraph";
import { Radar } from "../../components/dataviz/Radar";

interface WeaponScalingTestProps {}

const WeaponScalingTest: React.FC<WeaponScalingTestProps> = ({}) => {
    return (
        <ToolLayout
            name={`DataViz Test`}
            description={
                <span>
                    Using data from{" "}
                    <ExternalLink
                        href={`https://genshin-impact.fandom.com/wiki/Weapons/Base_Attack_Scaling`}
                    >
                        here
                    </ExternalLink>{" "}
                    to show a graph. Testing out the nivo library. This is a proof of
                    concept.
                </span>
            }
        >
            <strong className={`sm:hidden text-red-400`}>
                Data graphs do not work well with small screens
            </strong>
            <div className={`flex items-center flex-wrap`}>
                <h1 className={`font-semibold`}>5 star Weapon Base Attack Scaling</h1>
                <RarityStars rarity={5} className={`h-5`} />
            </div>
            <LineGraph
                data={testingdata}
                legendLeft={"Base DMG"}
                legendBottom={"Level"}
            />
            <h1 className={`font-semibold mt-12`}>Character Stats</h1>
            <Radar data={artifactScaling} />
        </ToolLayout>
    );
};

export default WeaponScalingTest;
