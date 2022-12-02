import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReportDate from "./ReportDate";
import { getServiceReportById } from "../../utils/utils.js";

const ServiceReportItem = () => {

  const stateData = useParams();

  const [data, setData] = useState({ ...stateData });

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Service Report
        </div>
      </div>

      <div className="flex p-4 items-center m-8 mx-[20%] w-full max-w-[70%] shadow-3xl h-80">
        <ReportDate serviceDate={data.serviceDate} />
      </div>
    </div>
  );
};

export default ServiceReportItem;
