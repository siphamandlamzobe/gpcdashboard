import React from "react";
import ServiceReportList from "./ServiceReportList";

const ServiceReports = (props) => {
  return (
    <div className="flex my-auto max-w-[80%] mx-auto w-full">
      <div className="flex w-full">
        <div className="w-1/5 rounded-2xl my-3 h-60 shadow-3xl"></div>
        <div className="w-4/5">
          <ServiceReportList
            serviceReports={props.serviceReports}
            onEditHandler={props.onEditHandler}
            onDeleteHandler={props.onDeleteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceReports;
