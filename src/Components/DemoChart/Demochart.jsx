import "./demochart.scss";
import { PieChart, Pie, Cell } from "recharts";
import CircleIcon from "@mui/icons-material/Circle";
import StackedBarChart from "../StackedBarchart/StackedBarChart";
import LocationTable from "../LocationTable/LocationTable";
const data = [
  {
    name: "Male",
    value: 35,
  },
  {
    name: "Female",
    value: 55,
  },
  {
    name: "Other",
    value: 17,
  },
];
const COLORS = ["#0FA44A", "#283350", "#FFF854"];
const Demochart = () => {
  return (
    <div className="demochart">
      <div className="title">Audience Demography</div>
      <div className="top">
        <ul className="list">
          <li>
            <CircleIcon className="icon" style={{ color: "#283350" }} />
            <span>Male</span>{" "}
          </li>
          <li>
            <CircleIcon className="icon" style={{ color: "#0FA44A" }} />
            <span>Female</span>{" "}
          </li>
          <li>
            <CircleIcon className="icon" style={{ color: "#FFF854" }} />
            <span>Other</span>{" "}
          </li>
        </ul>
      </div>
      <div className="middle">
        <div className="left">
          <span className="heading">Gender</span>
          <div className="chart-container">
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <text x={160} y={40} fill="#000">
                55%
              </text>
              <text x={5} y={160} fill="#000">
                35%
              </text>
              <text x={165} y={160} fill="#000">
                15%
              </text>
            </PieChart>
          </div>
        </div>
        <div className="right">
          <span className="heading">Age Group</span>
          <div className="stackedbar-chart-container">
            <StackedBarChart />
          </div>
        </div>
      </div>
      <hr className="line" />
      <div className="bottom">
        <div className="header">
          <span className="title1">Top Locations</span>
          <span className="button">See More</span>
        </div>
        <div className="table">
          <LocationTable />
        </div>
      </div>
    </div>
  );
};

export default Demochart;
