import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex-none h-14 bg-slate-500 sticky top-0 w-full block z-10">
      <div className="flex w-44 h-14 items-center justify-evenly">
        <Link to="/">
          <span className="text-lg text-white font-bold cursor-pointer">
            GPC
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
