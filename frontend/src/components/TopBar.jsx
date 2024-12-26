import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { images } from "./../../public/images";

const TopBar = () => {
  return (
    <header className=" flex justify-between ">
      <div className="flex items-center space-x-3 justify-between  w-1/2  ">
        {/* Search */}
        <div className="flex items-center space-x-2 border-gray-400 border-2 rounded-xl py-1 px-2 w-56 md:w-64 ">
          <FaSearch className="text-gray-400 text-lg" />
          <input
            placeholder="Search"
            className="text-gray-300 bg-transparent outline-none text-sm"
          />
        </div>
      </div>
      {/* the right side */}
      <div className="flex items-center space-x-3">
        <IoMdNotificationsOutline className="text-gray-500 w-5 h-5" />
        <MdOutlineMailOutline className="text-gray-500 w-5 h-5" />
        <div className="flex items-center space-x-2  border-2 px-4 py-1 rounded-xl border-gray-500">
          <img src={images.profile} className="w-7 h-7 rounded-full" />
          <h2 className="text-white text-sm">Admin</h2>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
