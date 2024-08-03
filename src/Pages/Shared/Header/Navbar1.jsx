import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GiTeamIdea } from "react-icons/gi";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";
import {
  MdDashboardCustomize,
  MdHomeFilled,
  MdOutlineManageAccounts,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import poco from "../../../assets/logo_svg.svg";
import pocoLogo from "../../../assets/pocoLogo.png";
import Dropdown from "../../../Components/DropDown/Dropdown";
const pagesMenuItems = [
  {
    title: "FAQs",
    icon: MdOutlineProductionQuantityLimits,
    address: "faqs",
  },
  {
    title: "Support",
    icon: RiCustomerService2Line,
    address: "",
  },
  {
    title: "Our Team",
    icon: GiTeamIdea,
    address: "our-team",
  },
  {
    title: "Special Offers",
    icon: BiSolidOffer,
    address: "",
  },
];
const homeMenuItems = [
  {
    title: "Home",
    icon: MdHomeFilled,
    address: "",
  },
  {
    title: "Login",
    icon: MdOutlineManageAccounts,
    address: "login",
  },
  {
    title: "Create Account",
    icon: MdOutlineManageAccounts,
    address: "signup",
  },
  {
    title: "Dashboard",
    icon: MdDashboardCustomize,
    address: "dashboard",
  },
  {
    title: "Wishlist",
    icon: LuLayoutList,
    address: "wishlist",
  },
  {
    title: "Shopping Cart",
    icon: BsCart4,
    address: "dashboard/shopping-cart",
  },
  {
    title: "Checkout",
    icon: IoBagCheckOutline,
    address: "dashboard/checkout",
  },
];

function PagesListMenu({ setOpenNav }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = pagesMenuItems.map(
    ({ title, icon: Icon, address }, key) => (
      <NavLink
        onClick={() => setOpenNav()}
        to={`/${address}`}
        key={key}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " text-[#ffcc00] font-semibold "
            : "text-[#303030] "
        }
      >
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="hidden lg:flex items-center justify-center rounded-lg bg-[rgb(0,0,0,0.02)] p-2 ">
            <Icon className="h-6  w-6" />
          </div>
          <div>
            <Typography
              variant="h6"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </NavLink>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white bg-none hover:bg-none"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Pages
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function HomeListMenu({ setOpenNav }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = homeMenuItems.map(
    ({ title, icon: Icon, address }, key) => (
      <NavLink
        onClick={() => setOpenNav()}
        to={`/${address}`}
        key={key}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " text-[#ffcc00] font-semibold "
            : "text-[#ffffff] lg:text-gray-800"
        }
      >
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="hidden lg:flex items-center justify-center rounded-lg bg-[rgb(0,0,0,0.02)] p-2 ">
            <Icon className="h-6  w-6" />
          </div>
          <div>
            <Typography
              variant="h6"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </NavLink>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 hover:bg-none font-medium text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Home
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ setOpenNav, openNav }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <HomeListMenu setOpenNav={setOpenNav} openNav={openNav} />
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center text-white gap-2 py-2 pr-4">
          <NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#ffcc00]  " : ""
            }
          >
            Menu
          </NavLink>
        </ListItem>
      </Typography>
      <PagesListMenu setOpenNav={setOpenNav} openNav={openNav} />
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center text-white gap-2 py-2 pr-4">
          <NavLink
            to="/order"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#ffcc00]  " : ""
            }
          >
            Shop
          </NavLink>
        </ListItem>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center text-white gap-2 py-2 pr-4">
          <NavLink
            to="/about-us"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#ffcc00]  " : ""
            }
          >
            About Us
          </NavLink>
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center text-white gap-2 py-2 pr-4">
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#ffcc00]  " : ""
            }
          >
            Contact Us
          </NavLink>
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="  bg-[#333333] px-4 w-full py-2">
      <div className="flex items-center max-w-5xl mx-auto bg-[#333333] justify-between text-white">
        <div className="hidden lg:block">
          <NavList setOpenNav={setOpenNav} openNav={openNav} />
        </div>
        <div className="hidden gap-2 lg:flex items-center">
          <FiPhoneCall />
          <p>+1 718-904-4450</p>
        </div>
        <div className="flex lg:hidden items-center gap-2 ">
          <div className="flex items-center">
            <img className="w-[60px]" src={pocoLogo} alt="" />
            <img className="w-[90px]" src={poco} alt="" />
          </div>
        </div>

        <div className="flex gap-2 items-center lg:hidden">
          <Dropdown />
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden rounded-full"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon
                className="h-6 w-6 rounded-full text-white"
                strokeWidth={4}
              />
            ) : (
              <Bars3Icon
                className="h-6 w-6 rounded-full text-white"
                strokeWidth={4}
              />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
}
