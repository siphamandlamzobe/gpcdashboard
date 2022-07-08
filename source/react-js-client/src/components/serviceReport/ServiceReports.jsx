import React from "react";
import FilterServiceReports from "./FilterServiceReports";
import ServiceReportList from "./ServiceReportList";

const ServiceReports = (props) => {
  return (
    <div className="flex my-auto max-w-[80%] mx-auto w-full">
      <div className="flex w-full">
        <FilterServiceReports />
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
