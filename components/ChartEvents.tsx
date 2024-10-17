"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useState, useEffect } from "react";

const countEventsPerMonth = (events: any[]) => {
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const eventCounts = Array(12).fill(0);

    events.forEach((event) => {
        const monthIndex = new Date(event.event_start_date).getMonth();
        eventCounts[monthIndex]++;
    });

    return months.map((month, index) => ({
        Mês: month,
        Eventos: eventCounts[index],
    }));
}

export default function ChartEvents({ events }: any) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (events) {
            const data = countEventsPerMonth(events);
            setChartData(data);
        }
    }, [events]);

    const chartConfig = {
        Eventos: {
            label: "Eventos",
            color: "hsl(var(--primary))",
        },
    } satisfies ChartConfig

    return (
        <div>
            <ChartContainer config={chartConfig} className="min-h-[100px] w-full h-96">
                <BarChart data={chartData} className="">
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="Mês"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                        className="animate-fade-down animate-once animate-duration-[950ms] animate-ease-in-out"
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend/>
                    <Bar dataKey="Eventos" fill="hsl(var(--primary))" radius={6} className="animate-fade-up animate-once animate-duration-[950ms]" />
                </BarChart>
            </ChartContainer>
        </div>
    )
}


