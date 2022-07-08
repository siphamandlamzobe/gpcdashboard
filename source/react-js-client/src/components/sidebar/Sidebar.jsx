import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="flex-none w-48 border-r-2 border-slate-100 min-h-screen  bg-slate-100">
        <div className="flex h-14 bg-slate-500 items-center justify-center">
          <span className="text-lg font-bold">GPC</span>
        </div>
        <hr className="h-0 border-solid border-slate-100" />
        <div className="pl-3">
          <ul className="list-none m-0 p-0">
            <p className="text-sm font-light mt-4 mb-1">REPORTS</p>
            <Link
              to="/serviceReports"
              className="flex"
              style={{ textDecoration: "none" }}
            >
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
              <li className="flex items-center">
                <p>Service Report</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
