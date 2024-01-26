import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaUser } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
const Dropdown = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            {user ? (
              <div className="w-10 rounded-full">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar online"
                >
                  <div className="w-10 border rounded-full">
                    <img
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://www.svgrepo.com/show/525577/user-circle.svg"
                      }
                      alt={user?.displayName}
                    />
                  </div>
                </label>
              </div>
            ) : (
              <button className="hover:bg-[#ffcc00] flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-[#ffcc00] bg-white text-xl  rounded-full hover:text-white">
                <FaUser />
              </button>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  onClick={handleLogOut}
                  className="   text-gray-700   py-2 px-4 "
                >
                  SIGN OUT
                </button>
              </Menu.Item>
            </div>

            <div className="px-1 py-1">
              <Menu.Item>
                <Link to="/dashboard">
                  <button className="   py-2 px-4">Dashboard</button>
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <Link to="/login">
                  <button className="    py-2 px-4 ">Login</button>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
export default Dropdown;
