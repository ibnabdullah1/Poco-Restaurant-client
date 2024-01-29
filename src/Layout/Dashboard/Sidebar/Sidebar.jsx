import { useState } from "react";
import MenuItem from "./MenuItem";
import { AiFillHome, AiOutlineBars } from "react-icons/ai";
import UserMenu from "./UserMenu";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import {
  MdOutlineConnectWithoutContact,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import image from "../../../assets/logo_svg.svg";
import image1 from "../../../assets/pocoLogo.png";
import { CgProfile } from "react-icons/cg";
import useRole from "../../../Hooks/useRole";
import { BsFillMenuButtonFill, BsShopWindow } from "react-icons/bs";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const Sidebar = () => {
  const [isActive, setActive] = useState(true);
  const { userRole } = useRole();
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-end lg:hidden">
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          {isActive ? (
            <HiMiniBars3 className="h-5 w-5" />
          ) : (
            <MdClose className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-20 lg:fixed flex flex-col justify-between overflow-x-hidden bg-[#fff] w-[280px] space-y-6  py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="flex justify-center ">
            <Link to="/">
              <button className="flex items-center px-7 py-2  ">
                <div className="flex items-center gap-2">
                  <img className="w-[100px]" src={image} alt="" />
                </div>
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem
                icon={MdOutlineDashboardCustomize}
                label="Dashboard"
                address=""
              />
              <MenuItem
                icon={CgProfile}
                label="Profile"
                address="user-profile"
              />
              <AdminMenu /> <UserMenu />
              {/* {userRole == "admin" ? <AdminMenu /> : <UserMenu />} */}
              <div className="h-[1px] w-[80%] mx-auto bg-gray-400 my-8" />
              <MenuItem icon={AiFillHome} label="Home" address="/" />
              <MenuItem
                icon={BsFillMenuButtonFill}
                label="Menu"
                address="menu"
              />
              <MenuItem icon={BsShopWindow} label="SHop" address="order" />
              <MenuItem
                icon={MdOutlineConnectWithoutContact}
                label="Contact"
                address="/contact"
              />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
