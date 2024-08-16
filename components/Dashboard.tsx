/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mlBkI54CGey
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { CartesianGrid, XAxis, Bar, BarChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full">
      <main className="grid flex-1 gap-4 p-4 sm:gap-8 sm:p-6">
        <h1 className="font-semibold text-2xl">Dashboard</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Eventos</CardTitle>
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">+0% do mês passado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Eventos no Mês</CardTitle>
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">+0% do mês passado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Participantes</CardTitle>
              <UsersIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">500</div>
              <p className="text-xs text-muted-foreground">+0% do mês passado</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Participants</CardTitle>
              <UsersIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+3 from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2 lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Events by Month</CardTitle>
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {/* <BarchartChart className="aspect-[16/9]" /> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Calendar</CardTitle>
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Calendar
                numberOfMonths={1}
                mode="single"
                className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

// function BarchartChart(props) {
//   return (
//     <div {...props}>
//       <ChartContainer
//         config={{
//           desktop: {
//             label: "Desktop",
//             color: "hsl(var(--chart-1))",
//           },
//         }}
//         className="min-h-[300px]"
//       >
//         <BarChart
//           accessibilityLayer
//           data={[
//             { month: "January", desktop: 186 },
//             { month: "February", desktop: 305 },
//             { month: "March", desktop: 237 },
//             { month: "April", desktop: 73 },
//             { month: "May", desktop: 209 },
//             { month: "June", desktop: 214 },
//           ]}
//         >
//           <CartesianGrid vertical={false} />
//           <XAxis
//             dataKey="month"
//             tickLine={false}
//             tickMargin={10}
//             axisLine={false}
//             tickFormatter={(value) => value.slice(0, 3)}
//           />
//           <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
//           <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
//         </BarChart>
//       </ChartContainer>
//     </div>
//   )
// }


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}