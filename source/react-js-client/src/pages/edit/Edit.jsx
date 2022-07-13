import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ServiceReportEditForm from "./ServiceReportEditForm";

const Edit = (props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-auto">
        <Navbar />

        <div className="flex p-4 items-center m-8 max-w-[80%] mx-auto w-auto shadow-3xl">
          <div className="flex w-full text-2xl m-2 justify-between bg-white text-gray-500">
            Edit Service Report
          </div>
        </div>

        <div className="flex p-4 items-center m-8 mx-auto w-auto max-w-[80%] shadow-3xl">
          <ServiceReportEditForm onEditServiceReportHandler={props.onEditServiceReportHandler}/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Edit;
