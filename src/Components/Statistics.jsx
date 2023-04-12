import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A - 1",
      fullMarks: 60,
      obtainedMarks: 60,
    },
    {
      name: "A - 2",
      fullMarks: 60,
      obtainedMarks: 59,
    },
    {
      name: "A - 3",
      fullMarks: 60,
      obtainedMarks: 60,
    },
    {
      name: "A - 4",
      fullMarks: 60,
      obtainedMarks: 60,
    },
    {
      name: "A - 5",
      fullMarks: 60,
      obtainedMarks: 60,
    },
    {
      name: "A - 6",
      fullMarks: 60,
      obtainedMarks: 60,
    },
    {
      name: "A - 7",
      fullMarks: 60,
      obtainedMarks: 60,
    },
    {
      name: "A - 8",
      fullMarks: 60,
      obtainedMarks: 60,
    },
  ];
  return (
    <div className="my-container flex flex-col justify-center items-center">
      <div>
        <p className="text-2xl font-semibold text-center my-5">
          Presenting you the marks I got till now in Programming Hero's
          Assignments
        </p>
      </div>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="fullMarks"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="obtainedMarks"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </div>
  );
};

export default Statistics;
