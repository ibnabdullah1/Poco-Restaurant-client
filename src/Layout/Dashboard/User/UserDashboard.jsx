import CountUp from "react-countup";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuShoppingBasket } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import useAuth from "../../../Hooks/useAuth";

const UserDashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <section className="px-4 pt-6">
        <h2 className="text-3xl font-medium mb-4">
          Hi, Welcome
          <span className="text-[#0cb14b] text-4xl">
            {" "}
            {user?.displayName ? user?.displayName : "Back!"}
          </span>
        </h2>
        <div className="grid  gap-6 grid-cols-1 lg:grid-cols-4">
          <div className=" bg-[#ffffff] rounded-lg shadow hover:shadow-xl  p-4">
            <div className="flex justify-between ">
              <div className="flex-1 ">
                <h2 className=" text-[14px] font-bold text-[#0cb14b] uppercase">
                  Total orders
                </h2>
                <p className="mb-2 text-sm font-semibold text-blue-gray-800 ">
                  <CountUp end={110} duration={1} />
                </p>
              </div>
              <div className=" text-[#0cb14b]">
                <LuShoppingBasket className="text-4xl" />
              </div>
            </div>
            <p className="text-xs font-medium text-gray-800 ">
              Lorem ipsum dor amet
            </p>
          </div>
          <div className=" bg-[#ffffff] rounded-lg shadow hover:shadow-xl  p-4">
            <div className="flex justify-between ">
              <div className="flex-1 ">
                <h2 className=" text-[14px] font-bold text-[#0cb14b] uppercase">
                  Total Revenue
                </h2>
                <p className="mb-2 text-sm font-semibold text-gray-800 ">
                  <CountUp end={569} duration={1} />
                </p>
              </div>
              <div className=" text-[#0cb14b]">
                <HiOutlineShoppingBag className="text-4xl" />
              </div>
            </div>
            <p className="text-xs font-medium text-gray-800 ">
              Lorem ipsum dor amet
            </p>
          </div>
          <div className=" bg-white rounded-lg shadow hover:shadow-xl  p-4">
            <div className="flex justify-between ">
              <div className="flex-1 ">
                <h2 className=" text-[14px] font-bold text-[#0cb14b] uppercase">
                  Total Payment
                </h2>
                <p className="mb-2 text-sm font-semibold text-gray-800 ">
                  <CountUp end={4567} duration={1} />
                </p>
              </div>
              <div className=" text-[#0cb14b]">
                <MdPayment className="text-4xl" />
              </div>
            </div>
            <p className="text-xs font-medium text-gray-800 ">
              Lorem ipsum dor amet
            </p>
          </div>
          <div className=" bg-[#ffffff] rounded-lg shadow hover:shadow-xl  p-4">
            <div className="flex justify-between ">
              <div className="flex-1 ">
                <h2 className="text-[14px] font-bold text-[#0cb14b] uppercase">
                  Total Customers
                </h2>
                <p className="mb-2 text-sm font-semibold text-gray-800s ">
                  $ <CountUp end={10567} duration={2.5} />
                </p>
              </div>
              <div className=" text-[#0cb14b]">
                <PiUsersThreeFill className="text-4xl" />
              </div>
            </div>
            <p className="text-xs font-medium text-gray-800 ">
              Lorem ipsum dor amet
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
