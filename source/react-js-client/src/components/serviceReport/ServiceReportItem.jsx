import React from "react";

const ServiceReportItem = () => {
  return (
    <div className="flex">
      <div className="flex-auto">
        <div className="flex p-4 items-center m-8 max-w-[80%] mx-auto w-auto shadow-3xl">
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

        <div className="flex p-4 items-center m-8 mx-auto w-auto max-w-[80%] shadow-3xl h-80">
          
        </div>
      </div>
    </div>
  );
};

export default ServiceReportItem;
