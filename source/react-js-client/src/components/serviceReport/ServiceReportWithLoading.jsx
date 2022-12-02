import React from "react";
import ReportNotFound from "./ReportNotFound";
import ServiceReport from "./ServiceReport";

function ServiceReportWithLoading(props) {
  if (props.serviceReports.length === 0) {
    return <ReportNotFound />;
  }

  return (
    <ul className="list-none w-full">
      {props.serviceReports.map((report) => (
        <ServiceReport
          onDeleteHandler={props.onDeleteHandler}
          id={report.id}
          key={report.id}
          attendance={report.attendance}
          serviceDate={report.serviceDate}
          serviceType={report.serviceType}
          serviceReview={report.serviceReview}
          firsttimers={report.firsttimers}
          soulsSaved={report.soulsSaved}
          searchTerm={props.searchTerm}
        />
      ))}
    </ul>
  );
}

export default ServiceReportWithLoading;
