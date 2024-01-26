import image from "../../../assets/logo_svg.svg";
import image1 from "../../../assets/pocoLogo.png";
import payment from "../../../assets/others/footer_img1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="mx-auto max-w-7xl  px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="pr-3">
            <div className="flex items-center gap-2">
              <img className="w-[60px]" src={image1} alt="" />
              <img className="w-[100px]" src={image} alt="" />
            </div>

            <p className="mt-4  text-gray-300">
              We believe it has the power to do amazing things.
            </p>

            <h2 className=" text-[#ffcc00] font-bold pb-1">+1 718-904-4450</h2>

            <h2 className=" text-gray-300 text-sm  pb-1">
              pocoresturent@gmail.com
            </h2>
          </div>
          <div className="pr-3 pt-7">
            <div className="flex items-center gap-2  lg:gap-0">
              <h2 className="font-semibold text-sm lg:w-[105px] text-left text-gray-300">
                Address:
              </h2>
              <p className="text-gray-300 text-xs">
                570 8th Ave, New York, NY 10018 United States
              </p>
            </div>
            <div className="flex items-center gap-2  lg:gap-0">
              <h2 className="font-semibold text-sm lg:w-[85px] text-gray-300">
                Hours :
              </h2>
              <p className="text-gray-400 text-xs">
                9.30am – 6.30pm Monday to Friday
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium mt-6 lg:mt-0 text-[#FFFFFF]">
              USEFUL LINKS
            </p>

            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  New Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Bundle & Save
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Online Gift Card
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Discount
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium mt-6 lg:mt-0 text-[#FFFFFF]">
              MY ACCOUNT
            </p>

            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  My Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  My Order History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Order Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Shopping Cart
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium mt-6 lg:mt-0 text-[#FFFFFF]">
              INFORMATION
            </p>

            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Refund policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Shipping & Return
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Term Of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-[#ffcc00]"
                >
                  Advertise
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-5 bg-zinc-600 h-[1px] w-full" />
        <div className="lg:flex flex space-y-2 flex-col justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <div className="hover:bg-[#ffcc00] bg-zinc-800 p-2 rounded-full text-[#ffcc00] hover:text-white ">
              <FaFacebookF className=" text-xl" />
            </div>
            <div className="hover:bg-[#ffcc00] bg-zinc-800 p-2 rounded-full text-[#ffcc00] hover:text-white ">
              <FaPinterestP className=" text-xl" />
            </div>
            <div className="hover:bg-[#ffcc00] bg-zinc-800 p-2 rounded-full text-[#ffcc00] hover:text-white ">
              <FaTwitter className=" text-xl" />
            </div>
            <div className="hover:bg-[#ffcc00] bg-zinc-800 p-2 rounded-full text-[#ffcc00] hover:text-white ">
              <FaInstagram className=" text-xl" />
            </div>
          </div>
          <p className="text-[13px] text-center text-gray-500">
            Copyright © 2022
            <span className="text-[#ffcc00]"> Poco&rsquo;s Restaurant</span>.
            All Rights Reserved || Designed By
            <a href="https://web.facebook.com/ArafatIbnAbdullah.A">
              Arafat Hosen
            </a>
          </p>

          <div className="flex items-center gap-3">
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
