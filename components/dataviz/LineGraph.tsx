import type { Serie } from "@nivo/line";
import React from "react";
import dynamic from "next/dynamic";
import type { ResponsiveLine as ResponsiveLineType } from "@nivo/line";

// https://github.com/vercel/next.js/issues/4515#issuecomment-706273622
const ResponsiveLine = dynamic(
    () => import("@nivo/line").then((mod) => mod.ResponsiveLine) as any
) as typeof ResponsiveLineType;

export type LineGrahpProps = {
    data: Serie[];
    legendLeft: string;
    legendBottom: string;
};

export const LineGraph: React.FC<LineGrahpProps> = ({
    data,
    legendLeft,
    legendBottom,
}) => {
    return (
        <div className="h-[37rem] w-full text-gscale-dark-background-primary">
            <ResponsiveLine
                data={data}
                margin={{ top: 10, right: 50, bottom: 50, left: 70 }}
                xScale={{ type: "point" }}
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                }}
                axisBottom={{
                    legend: legendBottom,
                    legendOffset: 36,
                    legendPosition: "middle",
                }}
                axisLeft={{
                    legend: legendLeft,
                    legendOffset: -55,
                    legendPosition: "middle",
                }}
                useMesh={true}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                colors={["#6BD5FF", "#81B3FB", "#4997F4", "#BBA6FF", "#FFAEE0"]}
                legends={[
                    {
                        direction: "column",
                        anchor: "top-left",
                        itemHeight: 20,
                        itemWidth: 80,
                        symbolShape: "circle",
                        symbolSize: 12,
                        itemBackground: "#18191B",
                        padding: 10,
                    },
                ]}
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
