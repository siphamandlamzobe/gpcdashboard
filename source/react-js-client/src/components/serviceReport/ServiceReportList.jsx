import React from "react";
import ServiceReport from "./ServiceReport";

const ServiceReportList = (props) => {
  if (props.serviceReports.length === 0) {
    return <h2 className="text-white text-center">Found no reports</h2>;
  }
  return (
    <ul role="list">
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
