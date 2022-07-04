import React from "react";
import ServiceReport from "./ServiceReport";
import "./serviceReportList.css";

const ServiceReportList = (props) => {
  if (props.serviceReports.length === 0) {
    return <h2 className="reports-list__fallback">Found no reports</h2>;
  }
  return (
    <ul className="reports-list">
      {props.serviceReports.map((report) => (
        <ServiceReport
          key={report.id}
          attendance={report.attendance}
          serviceDate={report.serviceDate}
          serviceType={report.serviceType}
          serviceReview={report.serviceReview}
        />
      ))}
    </ul>
  );
};

export default ServiceReportList;
