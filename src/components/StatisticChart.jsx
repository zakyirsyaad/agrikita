"use client"
import React from "react"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", pemasukan: 186, pengeluaran: 80 },
    { month: "February", pemasukan: 305, pengeluaran: 200 },
    { month: "March", pemasukan: 237, pengeluaran: 120 },
    { month: "April", pemasukan: 73, pengeluaran: 190 },
    { month: "May", pemasukan: 209, pengeluaran: 130 },
    { month: "June", pemasukan: 214, pengeluaran: 140 },
]

const chartConfig = {
    pemasukan: {
        label: "Pemasukan",
        color: "hsl(var(--chart-2))",
    },
    pengeluaran: {
        label: "Pengeluaran",
        color: "hsl(var(--chart-1))",
    },
}

export default function StatisticChart() {
    return (
        <div>
            <div>
                <h1 className="text-lg font-semibold">Transaction Pemasukan vs Pengeluaran</h1>
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
                            dataKey="pemasukan"
                            type="natural"
                            stroke="var(--color-pemasukan)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-pemasukan)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-green-500"
                                fontSize={12}
                            />
                        </Line>
                        <Line
                            dataKey="pengeluaran"
                            type="natural"
                            stroke="var(--color-pengeluaran)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-pengeluaran)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-red-500"
                                fontSize={12}
                            />
                        </Line>
                    </LineChart>
                </ChartContainer>
            </div>
            <p className="text-sm opacity-50 mt-10">
                Showing total data for Pemasukan and Pengeluaran for the last 6 months
            </p>
        </div>
    )
}
