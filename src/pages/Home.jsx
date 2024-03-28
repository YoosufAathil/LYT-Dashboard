import React from "react";
import "./home.scss";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Widget from "../Components/Widget/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widget-title">
          <span className="title">Performance Metrics</span>
          <a href="www.google.com" className="link">
            Download Summary
          </a>
        </div>
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
        </div>
        Home Container
      </div>
    </div>
  );
};

export default Home;
