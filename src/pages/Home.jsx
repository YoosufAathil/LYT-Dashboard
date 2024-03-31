import React from "react";
import "./home.scss";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Widget from "../Components/Widget/Widget";
import Demochart from "../Components/DemoChart/Demochart";
import Barchart from "../Components/Barchart/Barchart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widget-title">
          <span className="title">Performance Metrics</span>
          <a href="#" className="link">
            Download Summary
          </a>
        </div>
        <div className="widgets">
          <Widget type="followers" />
          <Widget type="likes" />
          <Widget type="comments" />
        </div>
        <div className="charts">
          <Barchart />
          <Demochart />
        </div>
      </div>
    </div>
  );
};

export default Home;
