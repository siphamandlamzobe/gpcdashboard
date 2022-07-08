import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const PageNotFound = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-auto">
        <Navbar />

        <div className="flex p-4 justify-center align-center m-8 mx-auto w-auto max-w-[80%]">
          <div className="flex flex-col">
            <h1 className="text-7xl font-bold text-red-600">
              404 Page Not Found
            </h1>
            <p className="font-bold text-center my-4">
              The page you're looking for doesn't exist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
