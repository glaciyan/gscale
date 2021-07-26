import React from "react";
import type { ResponsiveRadar as ResponsiveRadarType } from "@nivo/radar";
import dynamic from "next/dynamic";

// https://github.com/vercel/next.js/issues/4515#issuecomment-706273622
const ResponsiveRadar = dynamic(
    () => import("@nivo/radar").then((mod) => mod.ResponsiveRadar) as any
) as typeof ResponsiveRadarType;

export type RadarProps = {
    data: any[];
};

export const Radar: React.FC<RadarProps> = ({ data }) => {
    return (
        <div className={`w-full h-[30rem] text-gscale-dark-background-primary`}>
            <ResponsiveRadar
                data={data}
                keys={["value"]}
                gridShape="linear"
                colors={["#6BD5FF", "#81B3FB", "#4997F4", "#BBA6FF", "#FFAEE0"]}
                indexBy={"set"}
                margin={{ top: 50, right: 70, bottom: 50, left: 70 }}
                enableDotLabel={true}
                gridLabelOffset={35}
                gridLevels={8}
                dotSize={10}
                dotColor={{ theme: "background" }}
                dotBorderWidth={2}
                theme={{
                    crosshair: {
                        line: { stroke: "#f4f4f4", strokeWidth: 2 },
                    },
                    background: "#18191B",
                    textColor: "#f4f4f4",
                    fontSize: 14,
                    axis: {
                        domain: {
                            line: {
                                stroke: "#bdbdbd",
                                strokeWidth: 1,
                            },
                        },
                        ticks: {
                            line: {
                                stroke: "#bdbdbd",
                                strokeWidth: 2,
                            },
                        },
                    },
                    grid: {
                        line: {
                            stroke: "#787878",
                            strokeWidth: 1,
                        },
                    },
                }}
            />
        </div>
    );
};
