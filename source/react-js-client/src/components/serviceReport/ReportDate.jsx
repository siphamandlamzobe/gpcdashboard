import React from "react";

const ReportDate = (props) => {
  const month = props.serviceDate?.toLocaleString("en-US", { month: "long" });
  const day = props.serviceDate?.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.serviceDate?.getFullYear();

  return (
    <div className="flex flex-col w-20 h-20 items-center justify-center bg-black text-white rounded-xl border-white ">
      <div className="text-base font-bold">{day}</div>
      <div className="text-sm font-bold">{month}</div>
      <div className="text-sm font-bold">{year}</div>
    </div>
  );
};

export default ReportDate;
