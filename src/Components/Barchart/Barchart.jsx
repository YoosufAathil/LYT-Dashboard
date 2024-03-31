import "./Barchart.scss";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PostActivity from "../Post/PostActivity";

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
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="rgba(15, 164, 74, 0.3)" barSize={30} />
        </BarChart>
      </div>
      <div className="postactivity">
        <PostActivity />
      </div>
    </div>
  );
};

export default Barchart;
