import React from "react";
import ServiceReport from "./ServiceReport";

const ServiceReportList = (props) => {
  if (props.serviceReports.length === 0) {
    return (
      <div className="container flex w-full items-center p-2 mx-auto justify-between shadow-3xl h-48 rounded-2xl">
        <h2 className="text-black text-6xl font-bold text-center mx-auto justify-center">
          Found no reports
        </h2>
      </div>
    );
  }

  return (
    <div className="container flex w-full mx-auto justify-between">
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
    </div>
  );
};

export default ServiceReportList;
