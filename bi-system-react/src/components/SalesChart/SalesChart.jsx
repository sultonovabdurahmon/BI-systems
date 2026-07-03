import CustomTooltip from "./CustomTooltip";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "5k", sales: 20 },
  { month: "6k", sales: 28 },
  { month: "7k", sales: 30 },
  { month: "8k", sales: 50 },
  { month: "9k", sales: 42 },
  { month: "10k", sales: 40 },
  { month: "11k", sales: 53 },
  { month: "12k", sales: 31 },
  { month: "13k", sales: 40 },
  { month: "14k", sales: 35 },
  { month: "15k", sales: 47 },
  { month: "16k", sales: 54 },
  { month: "17k", sales: 43 },
  { month: "18k", sales: 46 },
  { month: "19k", sales: 86 },
  { month: "20k", sales: 35 },
  { month: "21k", sales: 43 },
  { month: "22k", sales: 54 },
  { month: "23k", sales: 49 },
  { month: "24k", sales: 47 },
  { month: "25k", sales: 42 },
  { month: "26k", sales: 55 },
  { month: "27k", sales: 45 },
  { month: "28k", sales: 43 },
  { month: "29k", sales: 48 },
  { month: "30k", sales: 58 },
  { month: "31k", sales: 56 },
  { month: "32k", sales: 62 },
  { month: "33k", sales: 24 },
  { month: "34k", sales: 32 },
  { month: "35k", sales: 31 },
  { month: "36k", sales: 27 },
  { month: "37k", sales: 48 },
  { month: "38k", sales: 47 },
  { month: "39k", sales: 44 },
  { month: "40k", sales: 43 },
  { month: "42k", sales: 73 },
  { month: "44k", sales: 60 },
  { month: "46k", sales: 66 },
  { month: "48k", sales: 60 },
  { month: "50k", sales: 54 },
  { month: "52k", sales: 53 },
  { month: "54k", sales: 53 },
  { month: "56k", sales: 58 },
  { month: "58k", sales: 43 },
  { month: "60k", sales: 57 },
  { month: "62k", sales: 52 },
  { month: "64k", sales: 58 },
  { month: "66k", sales: 53 },
  { month: "68k", sales: 49 },
  { month: "70k", sales: 56 },
];

function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -10,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4379EE" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#4379EE" stopOpacity={0.03} />
          </linearGradient>
        </defs>

        <CartesianGrid
          stroke="#ECEEF6"
          vertical={false}
          strokeDasharray="0"
        />

        <XAxis
          dataKey="month"
          interval={4}
          tick={{
            fill: "#A0A4AA",
            fontSize: 11,
          }}
          tickLine={false}
          axisLine={false}
        />

        <YAxis
          domain={[20, 100]}
          ticks={[20, 40, 60, 80, 100]}
          tickFormatter={(value) => `${value}%`}
          tick={{
            fill: "#A0A4AA",
            fontSize: 11,
          }}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: "#4379EE",
            strokeWidth: 1,
            strokeDasharray: "3 3",
          }}
        />

        <Area
          type="linear"
          dataKey="sales"
          stroke="#4379EE"
          strokeWidth={2}
          fill="url(#salesFill)"
          dot={{
            r: 2.8,
            fill: "#4379EE",
            stroke: "#4379EE",
          }}
          activeDot={{
            r: 5,
            fill: "#4379EE",
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SalesChart;