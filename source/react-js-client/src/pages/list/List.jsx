import React from "react";
import ServiceReports from "../../components/serviceReport/ServiceReports";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const List = (props) => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />

      <div className="flex-auto">
        <Navbar />
        <div className="flex p-4 items-center m-8 max-w-[80%] mx-auto w-auto shadow-3xl">
          <div className="flex w-full text-2xl m-2 justify-between bg-white text-gray-500">
            Add New Service Report
            <Link
              to="/serviceReports/new"
              style={{ textDecoration: "none" }}
              className="text-lg font-[400] border-2 border-green-600 rounded-md p-1 no-underline cursor-pointer"
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
