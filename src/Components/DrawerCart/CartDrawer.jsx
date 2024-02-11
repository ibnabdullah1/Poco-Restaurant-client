import React from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../Hooks/useCart";
import "./CartDrawer.css";
import CartItem from "./CartItem";
export function CartDrawer() {
  const [openRight, setOpenRight] = React.useState(false);
  const [cart] = useCart();
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={openDrawerRight}
          className="hover:bg-[#ffcc00] flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl text-[#090909]  rounded-full hover:text-white"
        >
          <span className=" top-1 absolute right-1 text-black w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#ffcc00]">
            {cart?.length}
          </span>
          <TiShoppingCart />
        </button>
      </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="px-4 overflow-y-auto pt-10 pb-20"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Shopping Cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <CartItem />
      </Drawer>
    </React.Fragment>
  );
}
