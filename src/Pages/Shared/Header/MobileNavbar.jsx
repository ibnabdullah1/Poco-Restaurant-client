import { FaShopify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { HiShoppingCart } from "react-icons/hi";
import { LuUserCircle } from "react-icons/lu";
import { MdDashboardCustomize } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="fixed flex md:hidden bottom-0  left-0 z-50  py-2 bg-white mx-auto w-full border-t border-gray-200 ">
      <div className="flex  justify-around gap-8  w-full items-center  font-medium px-2">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-[#00B207] text-sm  "
              : " text-sm text-gray-800   "
          }
        >
          <button
            type="button"
            className="inline-flex flex-col  items-center justify-center group"
          >
            <GoHomeFill className="w-6 h-6 mb-1" />
            <span>Home</span>
          </button>{" "}
        </NavLink>
        <NavLink
          to={"dashboard/shopping-cart"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-[#00B207] text-sm  "
              : " text-sm text-gray-800   "
          }
        >
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center   group"
          >
            <HiShoppingCart className="w-6 h-6 mb-1 " />
            <span>Cart</span>
          </button>
        </NavLink>

        <NavLink
          to={"/order"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-[#00B207] text-sm  "
              : " text-sm text-gray-800   "
          }
        >
          <button
            type="button"
            className="inline-flex flex-col  items-center justify-center   group"
          >
            <FaShopify className="w-6 h-6 mb-1 " />
            <span>Shop</span>
          </button>
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-[#00B207] text-sm  "
              : " text-sm text-gray-800   "
          }
        >
          <button
            type="button"
            className="inline-flex flex-col items-center  justify-center  group"
          >
            <MdDashboardCustomize className="w-6 h-6 mb-1 " />
            <span>Dashboard</span>
          </button>
        </NavLink>

        <NavLink
          to={"/dashboard/user-profile"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-[#00B207] text-sm  "
              : " text-sm text-gray-800   "
          }
        >
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center "
          >
            <LuUserCircle className="w-6 h-6 mb-1 " />
            <span>Profile</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
