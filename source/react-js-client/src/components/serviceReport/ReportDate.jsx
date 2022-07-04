import React from "react";
import "./serviceDate.css";

const ReportDate = (props) => {
  const month = props.serviceDate?.toLocaleString("en-US", { month: "long" });
  const day = props.serviceDate?.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.serviceDate?.getFullYear();

  return (
    <div className="service-date">
      <div className="service-date__month">{month}</div>
      <div className="service-date__year">{year}</div>
      <div className="service-date__day">{day}</div>
    </div>
  );
};

export default ReportDate;
