import "./Barchart.scss";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  // Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", uv: 32 },
  { name: "Tue", uv: 20 },
  { name: "Wed", uv: 62 },
  { name: "Thu", uv: 46 },
  { name: "Fri", uv: 98 },
  { name: "Sat", uv: 58 },
  { name: "Sun", uv: 80 },
];

const Barchart = () => {
  return (
    <div className="barchart">
      <div className="top">
        <span className="heading">Engagement Rates</span>
        <span className="filter">
          Weekly <ExpandMoreOutlinedIcon />{" "}
        </span>
      </div>
      <div className="bottom">
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" stroke="rgba(106, 106, 106, 1)" />
          <YAxis />
          <Tooltip
            wrapperStyle={{
              width: 80,
            }}
          />
          {/* <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          /> */}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="rgba(15, 164, 74, 0.3)" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

export default Barchart;
