import { Link } from "react-router-dom";
import pocoLogo from "../../../assets/pocoLogo.png";
import poco from "../../../assets/logo_svg.svg";
import { IoIosHeart } from "react-icons/io";
import Dropdown from "../../../Components/DropDown/Dropdown";
import { CartDrawer } from "../../../Components/DrawerCart/CartDrawer";
import getWishlist from "../../../Api/wishlist";
import { useEffect, useState } from "react";

const SearchFunc = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const myWishlist = getWishlist();
    setWishlist(myWishlist);
  }, []);
  return (
    <div className="lg:flex  hidden justify-between py-3 items-center max-w-5xl mx-auto">
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <img className="w-[60px]" src={pocoLogo} alt="" />
          <img className="w-[90px]" src={poco} alt="" />
        </div>
      </Link>

      <div className="items-center hidden max-w-md py-2 px-4  rounded bg-[rgba(234,234,234,0.3)]  lg:flex">
        <div className="pr-4">
          <select
            name=""
            id=""
            className="pl-3 pr-4 border-0  border-r bg-[rgba(225,89,89,0.0)] border-gray-400 cursor-pointer focus:border-0 focus:ring-0 focus:outline-none active:border-0"
          >
            <option value="">All Categories</option>
            <option value="salad">Salad</option>
            <option value="chicken">Chicken</option>
            <option value="drinks">Drinks</option>
            <option value="coffee">Coffee</option>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>

        <input
          type="text"
          className="w-full bg-[rgba(234,234,234,0.0)] py-2 pl-3 border-0 focus:border-0 focus:ring-0 focus:outline-none active:border-0"
          placeholder="Search..."
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="mr-2 bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <div className="flex gap-4 justify-center items-center ">
        <CartDrawer />
        <Link to={"/wishlist"}>
          <button className="hover:bg-[#ffcc00]  flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl  rounded-full hover:text-white">
            <span className=" top-1 absolute right-1 text-black w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#ffcc00]">
              {wishlist?.length}
            </span>
            <IoIosHeart />
          </button>
        </Link>
        <Dropdown />
      </div>
    </div>
  );
};

export default SearchFunc;
