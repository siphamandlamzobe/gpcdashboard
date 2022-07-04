import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">GPC</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">REPORTS</p>
          <Link to="/serviceReports" style={{ textDecoration: "none" }}>
            <li>
              <p>Service Report</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
