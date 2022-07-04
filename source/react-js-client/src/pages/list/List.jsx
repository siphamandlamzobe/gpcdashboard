import React from "react";
import ServiceReports from "../../components/serviceReport/ServiceReports";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";

const List = (props) => {
  return (
    <div className="list">
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <div className="titleWrapper">
          <div className="reportListTitle">
            Add New Service Report
            <Link
              to="/serviceReports/new"
              style={{ textDecoration: "none" }}
              className="link"
            >
              Add New
            </Link>
          </div>
        </div>

        <ServiceReports serviceReports={props.serviceReports} />
      </div>
    </div>
  );
};

export default List;
