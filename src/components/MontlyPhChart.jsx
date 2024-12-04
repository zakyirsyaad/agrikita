"use client"
import React from "react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

// Data untuk 4 lokasi pH tanah
const chartData = [
    { month: "January", lokasiA: 3.5, lokasiB: 5.0, lokasiC: 7, lokasiD: 8.8 },
    { month: "February", lokasiA: 5.0, lokasiB: 7, lokasiC: 8.9, lokasiD: 10.1 },
    { month: "March", lokasiA: 5.8, lokasiB: 8, lokasiC: 10, lokasiD: 3 },
    { month: "April", lokasiA: 10, lokasiB: 7, lokasiC: 3, lokasiD: 5 },
    { month: "May", lokasiA: 3.5, lokasiB: 5.0, lokasiC: 7, lokasiD: 8.8 },
    { month: "June", lokasiA: 5.8, lokasiB: 8, lokasiC: 10, lokasiD: 3 },
]

const chartConfig = {
    lokasiA: {
        label: "Lokasi A pH",
        color: "hsl(var(--chart-1))",
    },
    lokasiB: {
        label: "Lokasi B pH",
        color: "hsl(var(--chart-2))",
    },
    lokasiC: {
        label: "Lokasi C pH",
        color: "hsl(var(--chart-3))",
    },
    lokasiD: {
        label: "Lokasi D pH",
        color: "hsl(var(--chart-4))",
    },
}

export default function MonthlyPhChart() {
    return (
        <div className="col-span-2">
            <div>
                <h1 className="text-lg font-semibold">Monthly Plot Comparative pH of Interland</h1>
                <h2 className="text-sm opacity-50">January - June 2024</h2>
            </div>
            <div>
                <ChartContainer config={chartConfig} className="h-60 w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 21,
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Line
                            dataKey="lokasiA"
                            type="natural"
                            stroke="var(--color-lokasiA)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-lokasiA)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Line>
                        <Line
                            dataKey="lokasiB"
                            type="natural"
                            stroke="var(--color-lokasiB)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-lokasiB)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Line>
                        <Line
                            dataKey="lokasiC"
                            type="natural"
                            stroke="var(--color-lokasiC)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-lokasiC)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Line>
                        <Line
                            dataKey="lokasiD"
                            type="natural"
                            stroke="var(--color-lokasiD)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-lokasiD)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Line>
                    </LineChart>
                </ChartContainer>
            </div>
            <p className="text-sm opacity-50 mt-10">
                Showing comparative pH of four locations over the last 6 months.
            </p>
        </div>
    )
}
