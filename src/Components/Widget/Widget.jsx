import React from "react";
import "./widget.scss";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "followers":
      data = {
        title: "Followers",
        numbers: "93.2k",
        percentage: "0.8%",
      };
      break;

    case "likes":
      data = {
        title: "Likes",
        numbers: "400k",
        percentage: "1.21%",
      };
      break;

    case "comments":
      data = {
        title: "Comments",
        numbers: "289.1k",
        percentage: "2.7% ",
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="numbers">{data.numbers} </div>
        <div className="description">
          <ArrowUpwardOutlinedIcon className="icon" />
          <p>
            {" "}
            <span>{data.percentage}</span>
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
