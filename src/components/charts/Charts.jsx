import React from "react";
import "./Charts.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { width } from "@mui/system";

const data = [
  {
    name: "Jan",
    total: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    total: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    total: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    total: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    total: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    total: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const Charts = () => {
  return (
    <div className="chart">
      <div className="title">Last 6 Months Revenue</div>
      <ResponsiveContainer width="100%" aspect={3/1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
