import { Link } from "react-router-dom";
import pocoLogo from "../../../assets/pocoLogo.png";
import poco from "../../../assets/logo_svg.svg";
import { IoIosHeart } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import Dropdown from "../../../Components/DropDown/Dropdown";
import useCart from "../../../Hooks/useCart";
import { Avatar } from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";
import { CartDrawer } from "../../../Components/DrawerCart/CartDrawer";
const SearchFunc = () => {
  const [cart] = useCart();
  const { user } = useAuth();
  return (
    <div className="lg:flex hidden justify-between py-3 items-center max-w-5xl mx-auto">
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <img className="w-[60px]" src={pocoLogo} alt="" />
          <img className="w-[90px]" src={poco} alt="" />
        </div>
      </Link>

      <div>
        <form className="flex flex-col md:flex-row gap-3">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for the tool you like"
              className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-[#00B207] focus:outline-none focus:border-[#00B207]"
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
      <div className="flex gap-4 justify-center items-center ">
        {/* <Link to="/dashboard/shopping-cart">
          <button className="hover:bg-[#ffcc00] flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl  rounded-full hover:text-white">
            <span className=" top-1 absolute right-1 text-black w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#ffcc00]">
              {cart?.length}
            </span>
            <TiShoppingCart />
          </button>
        </Link> */}
        <CartDrawer />

        <button className="hover:bg-[#ffcc00]  flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl  rounded-full hover:text-white">
          <span className=" top-1 absolute right-1 text-black w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#ffcc00]">
            {cart?.length}
          </span>
          <IoIosHeart />
        </button>
        <Avatar
          src={
            user?.photoURL
              ? user?.photoURL
              : "https://www.svgrepo.com/show/525577/user-circle.svg"
          }
          alt={user?.displayName}
          withBorder={true}
          color="green"
          className="w-[40px] h-[40px]"
        />
        {/* <Dropdown /> */}
      </div>
    </div>
  );
};

export default SearchFunc;
