import React from "react";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row w-full min-h-screen gap-12 bg-slate-950 p-4">
      <div className="hidden md:inline-block md:w-48 ">
        <Sidebar />
      </div>
      <div className="flex flex-col md:w-full gap-y-5">
        <TopBar />
        <main className="bg-black/50 min-h-screen overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
