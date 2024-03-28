import React from "react";
import "./widget.scss";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <div className="title">Followers</div>
        <div className="numbers">93.2k</div>
        <div className="description">
          <ArrowUpwardOutlinedIcon className="icon" />
          <p>
            {" "}
            <span>0.8% </span>
            in the last 7 days
          </p>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <ArrowOutwardOutlinedIcon />
        </div>
        <div className="bottom">
          <BarChartOutlinedIcon style={{ color: "#0FA44A" }} />
        </div>
      </div>
    </div>
  );
};

export default Widget;
