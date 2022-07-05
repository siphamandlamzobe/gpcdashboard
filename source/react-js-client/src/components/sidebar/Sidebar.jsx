import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="flex-none w-40 border-r-2 border-indigo-100 min-h-screen bg-white">
        <div className="flex h-14 bg-slate-400 items-center justify-center">
          <span className="text-lg font-bold">GPC</span>
        </div>
        <hr className="h-0 border-solid border-gray-200" />
        <div className="pl-3">
          <ul className="list-none m-0 p-0">
            <p className="text-base font-bold mt-4 mb-1">REPORTS</p>
            <Link to="/serviceReports" style={{ textDecoration: "none" }}>
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
