import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiceReportById } from "../../utils/utils.js";
import ServiceReportDate from "./ServiceReportDate";

const ServiceReportItem = () => {
  const stateData = useParams();

  const [data, setData] = useState({ ...stateData });

  const [fullServiceDate, setFullServiceDate] = useState("");

  const fullDateHandler = (date) => {
    setFullServiceDate(date);
  };

  useLayoutEffect(() => {
    const loadData = async () => {
      await getServiceReportById(stateData.id).then((report) => {
        report.serviceDate = new Date(report.serviceDate.slice(0, 10));
        setData(report);
      });
    };
    loadData();
  }, [stateData.id]);

  return (
    <div>
      <div className="flex p-4 items-center m-8 max-w-[70%] mx-[20%] w-full shadow-3xl">
        <div className="flex w-full text-2xl m-2 justify-start bg-white text-gray-500">
          Service Report - {fullServiceDate}
        </div>
      </div>

      <div className="p-4 items-center m-8 mx-[20%] w-full max-w-[70%] shadow-3xl min-h-full">
        <div class="grid overflow-hidden grid-cols-3 grid-rows-3 gap-2 h-80">
          <div class="row-span-2 p-4 h-32 min-h-full min-w-full">
            <ServiceReportDate
              serviceDate={data.serviceDate}
              getFullDate={fullDateHandler}
            />
          </div>
          <div class="col-start-2 p-4 col-span-1 h-20 min-h-full min-w-full rounded-lg bg-lime-100">
            <span className="flex flex-col text-sm font-normal">
              ATTENDANCE
            </span>
            <div className="m-2 text-2xl text-black font-bold">
              {data.attendance}
            </div>
          </div>
          <div class="col-start-2 col-span-1 p-4 h-20 min-h-full min-w-full rounded-lg  bg-orange-100">
            <span className="flex flex-col text-sm font-normal">
              SOULS SAVED
            </span>
            <div className="m-2 text-2xl text-black font-bold">
              {data.soulsSaved}
            </div>
          </div>
          <div class="row-start-1 col-start-3 p-4 col-span-1 h-20 min-h-full min-w-full rounded-lg bg-red-100">
            <span className="flex flex-col text-sm font-normal">
              FIRST TIMERS
            </span>
            <div className="m-2 text-2xl text-black font-bold">
              {data.firsttimers}
            </div>
          </div>
          <div class="row-start-2 col-start-3 p-4 h-20 min-h-full min-w-full rounded-lg">
            <span className="flex flex-col text-sm font-normal">
              SERVICE TYPE
            </span>
            <div className="m-2 text-2xl text-black font-bold">
              {data.serviceType}
            </div>
          </div>
          <div class="col-span-3 rounded-lg p-4 h-32 min-h-full min-w-full">
            <span className="flex flex-col text-sm font-normal">
              SERVICE REVIEW
            </span>
            <div className="m-2 text-lg text-black font-bold">
              {data.serviceReview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReportItem;
