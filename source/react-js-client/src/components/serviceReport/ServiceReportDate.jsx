import React from "react";

const ServiceReportDate = (props) => {
  const month = props.serviceDate?.toLocaleString("en-US", { month: "long" });
  const day = props.serviceDate?.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.serviceDate?.getFullYear();

  const fullDate = day + " " + month + " " + year;
  props.getFullDate(fullDate);

  return (
    <div className="flex flex-col w-40 h-40 items-center justify-center bg-black text-white rounded-xl border-white">
      <div className="text-3xl font-bold">{day}</div>
      <div className="text-3xl font-bold">{month}</div>
      <div className="text-3xl font-bold">{year}</div>
    </div>
  );
};

export default ServiceReportDate;
