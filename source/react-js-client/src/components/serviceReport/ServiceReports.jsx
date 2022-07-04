import React from "react";
import ServiceReportList from "./ServiceReportList";
import "./serviceReports.css";

const ServiceReports = (props) => {
  return (
    <li>
        <div className="service-reports">
            <ServiceReportList serviceReports={props.serviceReports} />
        </div>
    </li>
  );
};

export default ServiceReports;
