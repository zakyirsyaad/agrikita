"use client";

import * as React from "react";
import { Pie, PieChart, Tooltip, Label } from "recharts";
import { Separator } from "./ui/separator";

// Data baru untuk PH, Humidity, dan Temperature
const chartData = [
    { name: "PH", value: 60, fill: "hsl(var(--chart-1))" },
    { name: "Humidity", value: 25, fill: "hsl(var(--chart-2))" },
    { name: "Temperature", value: 15, fill: "hsl(var(--chart-3))" },
];

export function TemperatureChart() {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const totalPercentage = 100; // Total persentase untuk data baru

    return (

        <PieChart width={200} height={200}>
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
                                        Environmental Parameters
                                    </tspan>
                                </text>
                            );
                        }
                    }}
                />
            </Pie>
        </PieChart>
    );
}
