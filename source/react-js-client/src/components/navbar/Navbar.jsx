import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex-none h-14 bg-white sticky top-0 w-full block z-10 shadow-b">
      <div className="flex w-44 h-14 items-center justify-evenly">
        <Link to="/" className="flex justify-center">
          <img src="../../assets/gpc512.png" alt="" className="z-0 h-11"/>
          <span className="text-lg text-black font-bold cursor-pointer p-1 py-2 justify-evenly">
            GPC
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;