import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen lg:flex">
      <Helmet></Helmet>
      <Sidebar />
      <div className="flex-1 bg-gray-100 lg:ml-64">
        {/* <div className="flex-1 bg-[#f7f3e8] lg:ml-64"> */}
        <div className="p-5 lg:pl-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
