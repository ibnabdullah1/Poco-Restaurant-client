import { CiLocationOn } from "react-icons/ci";
import Language from "./Language";
import MoneyRent from "./MoneyRant";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const Sticky = () => {
  const { logOut, user } = useAuth();
  const handleLogout = () => {
    logOut();
  };

  return (
    <div>
      <div className="inset-x- top-0 py-2 z-50 justify-between  hidden lg:flex items-center max-w-5xl mx-auto">
        <div className="flex items-center gap-10">
          <p className="flex text-gray-800 text-sm items-center">
            <CiLocationOn />
            CALL US: +381 65 666 6666 71
          </p>
          <p className="flex   text-gray-800 text-sm items-center">
            <CiLocationOn />
            Madison Ave
          </p>
        </div>
        <div className="flex justify-center items-center">
          {/* <Language />
        <MoneyRent /> */}
          <div className="flex text-sm  text-gray-800 justify-center items-center">
            <Link to={"/login"}>
              <h2 className="mr-1">Sign In</h2>
            </Link>
            /
            {user ? (
              <button onClick={handleLogout}>
                <h2 className="ml-1  text-gray-800 ">Log Out</h2>
              </button>
            ) : (
              <Link to={"/signup"}>
                <h2 className="ml-1  text-gray-800">Sign Up</h2>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sticky;
