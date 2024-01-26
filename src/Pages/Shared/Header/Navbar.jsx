import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import image from "../../../assets/logo.png";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  let Links = [
    { name: "Shop", link: "/shop" },
    { name: "Pages", link: "/pages" },
    { name: "Blog", link: "/blog" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="  w-full  relative top-0 left-0 bg-[#333333]">
      <div className="max-w-5xl mx-auto flex items-center justify-between  py-4 px-5 lg:px-0 ">
        <div className="flex lg:hidden items-center gap-2 ">
          <img src={image} alt="" />
          <h2 className="text-2xl text-white font-bold">EcoBazar</h2>
        </div>
        <div className="md:flex hidden">
          <form className="flex flex-col md:flex-row gap-3">
            <div className="flex">
              <input
                type="text"
                placeholder="Search... "
                className="w-full md:w-480 px-3 h-10 rounded-l border-2 border-[#00B207] focus:outline-none focus:border-[#00B207]"
              />
              <button
                type="submit"
                className="bg-[#00B207] text-white rounded-r px-2 md:px-3 py-0 md:py-1"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className=" flex text-white justify-end lg:hidden "
        >
          {open ? <RxCross2 /> : <FaBars />}
        </div>

        <ul
          className={`lg:flex bg-[#333333] lg:items-center lg:pb-0 pb-12 absolute lg:static  lg:z-auto z-[50] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-neutral-800 text-white" : "top-[-490px]"
          }`}
        >
          <MegaMenu setOpen={setOpen} />

          {Links.map((link, i) => (
            <li key={i} className="md:mr-8 lg:my-0 my-7 font-medium">
              <NavLink
                to={link.link}
                onClick={() => setOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-[#00B207] font-semibold "
                    : "text-[#999999]"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="lg:flex hidden  items-center gap-2 text-white">
          <FiPhoneCall />
          <p>(219) 555-0114</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
