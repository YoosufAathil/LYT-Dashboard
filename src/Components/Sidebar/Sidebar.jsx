import React from "react";
import "./sidebar.scss";

// importing icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">LYT </div>
      </div>
      <div className="center">
        <ul>
          <li>
            <DashboardOutlinedIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <EqualizerOutlinedIcon className="icon" />
            <span>Analytics</span>
          </li>
          <li>
            <GroupsOutlinedIcon className="icon" />
            <span>Communities</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <PermMediaOutlinedIcon className="icon" />
            <span>Media</span>
          </li>
          <li>
            <ContactSupportOutlinedIcon className="icon" />
            <span>Support</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <LogoutIcon className="icon" />
        <span>Log-out</span>
      </div>
    </div>
  );
};

export default Sidebar;
