import {
  MdHistoryToggleOff,
  MdOutlineCollectionsBookmark,
} from "react-icons/md";

import MenuItem from "./MenuItem";
import { TbHomeShield } from "react-icons/tb";
import { BsCalendar2Date, BsCart4 } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { IoBagCheckOutline } from "react-icons/io5";

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={TbHomeShield} label="User Home" address="userhome" />
      <MenuItem icon={IoBagCheckOutline} label="Checkout" address="checkout" />
      <MenuItem
        icon={BsCalendar2Date}
        label="Reservation"
        address="reservation"
      />
      <MenuItem
        icon={MdHistoryToggleOff}
        label="Payment history"
        address="paymentHistory"
      />
      <MenuItem icon={BsCart4} label="My cart" address="shopping-cart" />
      <MenuItem icon={VscPreview} label="add review" address="addriview" />
      <MenuItem
        icon={MdOutlineCollectionsBookmark}
        label="my booking"
        address="mybooking"
      />
    </>
  );
};

export default UserMenu;
