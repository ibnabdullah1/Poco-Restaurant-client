import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <div className="px-6 mb-4">
      <NavLink
        to={address}
        end
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-[6px]  rounded-full  transition-colors duration-300 transform  hover:bg-[rgb(12,177,75,0.3)]   hover:text-[#0cb14b] ${
            isActive ? "bg-[#0cb14b]  text-[#ffffff]" : "text-[#2d2c2c]"
          }`
        }
      >
        <Icon className="w-6 h-6" />

        <span className="font-medium text-sm uppercase">{label}</span>
      </NavLink>
    </div>
  );
};

export default MenuItem;
