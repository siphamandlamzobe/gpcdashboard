import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const PageNotFound = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-auto">
        <Navbar />

        <div className="flex p-4 justify-center align-center m-8 mx-auto w-auto max-w-[80%]">
          <div className="flex flex-col shadow-3xl rounded-2xl m-4 p-8">
            <h1 className="text-7xl font-bold text-red-600">
              404 Page Not Found
            </h1>
            <p className="font-bold text-center my-4">
              The page you're looking for doesn't exist
            </p>
            <div className="flex mx-auto relative">
              <Link to={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-6 w-6 top-1/2 right-3 mr-10 -mt-2.5 group-focus-within:text-green-500"
                  fill="none"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
                <button className="focus:ring-2 focus:ring-green-400 focus:outline-none appearance-none rounded-lg border-2 border-gray-500 p-1 gap-2 text-black font-bold ring-1">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
