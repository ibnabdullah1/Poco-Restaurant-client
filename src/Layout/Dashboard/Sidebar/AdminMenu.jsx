import { IoFastFoodSharp } from "react-icons/io5";
import { MdManageHistory, MdOutlineNoFood, MdPayment } from "react-icons/md";
import MenuItem from "./MenuItem";

import { FaUsersGear } from "react-icons/fa6";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={IoFastFoodSharp} label="Add items" address="additems" />
      <MenuItem
        icon={MdOutlineNoFood}
        label="Manage Items"
        address="manageitems"
      />
      <MenuItem
        icon={MdPayment}
        label="Manage Orders"
        address="manage-orders"
      />

      <MenuItem
        icon={MdManageHistory}
        label="Manage bookings"
        address="managebookings"
      />
      <MenuItem icon={FaUsersGear} label="All Users" address="users" />
    </>
  );
};

export default AdminMenu;
