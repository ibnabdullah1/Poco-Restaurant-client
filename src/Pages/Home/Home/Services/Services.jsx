import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsHandbag } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuStore } from "react-icons/lu";

const Services = () => {
  return (
    <div className="bg-[#00A149]">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto  py-7 px-5">
        <div>
          <div className="flex items-center gap-2 mb-1 ">
            <TbTruckDelivery className="text-3xl text-[#ffcc00]" />
            <h3 className="text-sm text-[#fff] font-semibold">Free Shipping</h3>
          </div>
          <p className="text-xs text-[#fff]">Free shipping on all your order</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <TfiHeadphoneAlt className="text-3xl text-[#ffcc00]" />
            <h3 className="text-sm text-[#fff] font-semibold">
              Customer Support 24/7
            </h3>
          </div>
          <p className="text-xs text-[#fff]">Instant access to Support</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <LuStore className="text-3xl text-[#ffcc00]" />
            <h3 className="text-sm text-[#fff] font-semibold">Our Store</h3>
          </div>
          <p className="text-xs text-[#fff]">
            You can see our “here and now” products
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <IoFastFoodOutline className="text-3xl text-[#ffcc00]" />
            <h3 className="text-xs text-[#fff] font-semibold">Best Quality</h3>
          </div>
          <p className="text-xs text-[#fff]">
            We are international chain of restaurants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
