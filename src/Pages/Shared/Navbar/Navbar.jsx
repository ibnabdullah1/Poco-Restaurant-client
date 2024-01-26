import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";
import pocoLogo from "../../../assets/pocoLogo.png";
import poco from "../../../assets/logo_svg.svg";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeart } from "react-icons/io";
import Dropdown from "../../../Components/DropDown/Dropdown";

const Navbar = () => {
  const [cart] = useCart();

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ffcc00]  " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ffcc00]  " : ""
          }
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ffcc00]  " : ""
          }
        >
          Shop
        </NavLink>
      </li>{" "}
      <li>Pages</li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ffcc00]  " : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar justify-between items-center fixed left-0 px-5 py-3 right-0 top-0 z-50  max-w-screen-2xl mx-auto bg-[#ffffff] text-zinc-700">
      <div className="navbar lg:hidden">
        <div className="dropdown w-full">
          <div className="flex justify-between  w-full">
            <div className="flex items-center">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <Link to="/dashboard/cart">
                <button className="hover:bg-[#ffcc00] flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl  rounded-full hover:text-white">
                  <span className=" top-1 absolute right-1 text-black w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#ffcc00]">
                    {cart?.length}
                  </span>
                  <TiShoppingCart />
                </button>
              </Link>

              <button className="hover:bg-[#ffcc00]  flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl  rounded-full hover:text-white">
                <span className=" top-1 absolute right-1 text-black w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#ffcc00]">
                  {cart?.length}
                </span>
                <IoIosHeart />
              </button>

              <Dropdown />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu  dropdown-content mt-3 z-[1] w-80 p-2 shadow bg-zinc-800 rounded"
          >
            {navLinks}

            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#ffcc00] font-semibold "
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className=" hidden justify-center items-center  lg:flex">
        <div className="flex items-center">
          <img className="w-[60px]" src={pocoLogo} alt="" />
          <img className="w-[90px]" src={poco} alt="" />
        </div>
      </div>
      <div className=" hidden lg:flex gap-2">
        <ul className="px-1 text-xl flex  gap-8">{navLinks}</ul>
      </div>
      <div className=" hidden lg:flex gap-3">
        <Link to="/dashboard/cart">
          <button className="hover:bg-[#ffcc00] flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl  rounded-full hover:text-white">
            <span className=" top-1 absolute right-1 text-black w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#ffcc00]">
              {cart?.length}
            </span>
            <TiShoppingCart />
          </button>
        </Link>

        <button className="hover:bg-[#ffcc00]  flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl  rounded-full hover:text-white">
          <span className=" top-1 absolute right-1 text-black w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#ffcc00]">
            {cart?.length}
          </span>
          <IoIosHeart />
        </button>
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
