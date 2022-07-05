import React from "react";
import ServiceReportList from "./ServiceReportList";

const ServiceReports = (props) => {
  return (
    <div className="container mx-auto px-8 max-w-[95%] w-auto">
      <ServiceReportList serviceReports={props.serviceReports} />
    </div>
  );
};

export default ServiceReports;