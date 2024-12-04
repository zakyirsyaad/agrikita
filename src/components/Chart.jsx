"use client";

import * as React from "react";
import { Pie, PieChart, Tooltip, Label } from "recharts";
import { Separator } from "./ui/separator";

// Data statis dengan total persentase 90%
const chartData = [
    { name: "Scheduled", value: 40, fill: "hsl(var(--chart-1))" },
    { name: "Progress", value: 30, fill: "hsl(var(--chart-2))" },
    { name: "Finish", value: 20, fill: "hsl(var(--chart-3))" },
];

export function ChartDashboard() {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const totalPercentage = 90;

    return (
        <div className="flex flex-col">
            <div className="items-center pb-0">
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                    Task Progress
                </h1>
                <p className="text-sm opacity-50">
                    Last week total tasks
                </p>
            </div>
            <PieChart width={300} height={300} className="self-center">
                <Tooltip formatter={(value, name) => [`${value}%`, `${name}`]} />
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={100}
                    strokeWidth={2}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox?.cx && viewBox?.cy) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-muted text-3xl font-bold"
                                        >
                                            {totalPercentage}%
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy + 24}
                                            className="fill-muted text-sm"
                                        >
                                            Total Tasks
                                        </tspan>
                                    </text>
                                );
                            }
                        }}
                    />
                </Pie>
            </PieChart>
            <div className="flex flex-col gap-5 text-sm">
                <div>
                    {chartData.map((data) => (
                        <div key={data.name} className="flex justify-between">
                            <p className="font-medium 2xl:text-xl">{data.name}</p>
                            <p className="2xl:text-xl">{`${data.value}%`}</p>
                        </div>
                    ))}
                </div>
                <Separator />
                <div className="flex justify-between">
                    <p className="font-bold 2xl:text-xl">Remaining</p>
                    <p className="2xl:text-xl">{`${100 - totalPercentage}%`}</p>
                </div>
            </div>
        </div>
    );
}
