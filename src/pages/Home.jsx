import React from "react";
import "./home.scss";
import Sidebar from "../Components/Sidebar/Sidebar";
// import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">Home Container</div>
      {/* <Navbar /> */}
    </div>
  );
};

export default Home;
