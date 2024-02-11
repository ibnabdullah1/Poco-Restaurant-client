import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { useEffect } from "react";
import ReactGA from "react-ga";

const DashboardLayout = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <div className="relative min-h-screen lg:flex">
      <Helmet></Helmet>
      <Sidebar />
      <div className="flex-1 bg-[#f7f3e8] lg:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
