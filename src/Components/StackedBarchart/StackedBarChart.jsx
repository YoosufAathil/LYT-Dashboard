import React from "react";
import "./stackedbarchart.scss";
import {
  BarChart,
  Bar,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const renderCustomizedLabel = (props) => {
  const { x, y, height, value } = props;
  return (
    <text
      x={x}
      y={y + height / 2}
      fill="#fff"
      textAnchor="start"
      dominantBaseline="middle"
    >
      {value}
    </text>
  );
};

const data = [
  {
    name: "16-25",
    male: 4780,
    female: 3908,
    other: 1500,
  },
  {
    name: "25-35",
    male: 3890,
    female: 4800,
    other: 881,
  },
  {
    name: "35-55",
    male: 4390,
    female: 3800,
    other: 600,
  },
  {
    name: "55+",
    male: 2490,
    female: 4300,
    other: 300,
  },
];

const StackedBarChart = () => {
  return (
    <div className="stackedbarchart">
      <ResponsiveContainer width="80%" height={200}>
        <BarChart
          layout="vertical"
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis tick={false} type="number" />
          <YAxis tick={false} type="category" dataKey="name" />
          <Bar dataKey="male" stackId="a" fill="#283350">
            <LabelList
              dataKey="name"
              position="insideLeft"
              content={renderCustomizedLabel}
            />
          </Bar>
          <Bar dataKey="female" stackId="a" fill="#0FA44A"></Bar>
          <Bar dataKey="other" stackId="a" fill="#FFF854"></Bar>
          <text x={280} y={30} fill="#000">
            40%
          </text>
          <text x={265} y={70} fill="#000">
            30%
          </text>
          <text x={250} y={110} fill="#000">
            20%
          </text>
          <text x={210} y={150} fill="#000">
            10%
          </text>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
