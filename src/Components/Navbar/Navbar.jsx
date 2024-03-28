import React from "react";
import "./navbar.scss";
import avatar from "../../Assets/img/avatar.png";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <span>Metrics looking good, Snow!</span>
        </div>
        <div className="center">
          <div className="search">
            <SearchOutlinedIcon className="icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="right">
          <div className="profile">
            <img src={avatar} alt="" className="avatar" />
            <div className="profile-info">
              <span className="Name"> Snow Olohijere</span>
              <p className="email">uch231@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
