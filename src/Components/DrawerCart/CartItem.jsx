import useCart from "../../Hooks/useCart";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CartItem = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const subtotal = cart
    .reduce((total, item) => total + parseFloat(item.price), 0)
    .toFixed(2);
  const shipping = 8;
  const totalPrice = (parseFloat(subtotal) + shipping).toFixed(2);

  const handleDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success("Food Successfully deleted ");
      }
    });
  };

  return (
    <div className="">
      {cart?.map((item, i) => (
        <div key={i} className="flex justify-between py-3 ">
          <div className="flex gap-1">
            <div className="shrink-0 relative rounded-full">
              <span className=" top-1 absolute right-1 text-black w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#ffcc00]">
                {item?.quantity}
              </span>
              <img
                className="h-10 w-10 overflow-hidden object-cover"
                src={item?.image}
                alt=""
              />
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-900">
                {item?.foodName}
              </p>
              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
            </div>
          </div>
          <div className="flex flex-col  items-end">
            <p className=" text-base  font-semibold text-gray-900">
              ${item?.price}
            </p>
            <button
              onClick={() => handleDelete(item._id)}
              className="hover:text-[#ffcc00]"
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6 space-y-3 border-t border-b py-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-400">Subtotal</p>
          <p className=" font-semibold text-gray-900">${subtotal}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-400">Shipping</p>
          <p className=" font-semibold text-gray-900">${shipping}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-xl font-semibold text-gray-900">
          <span className="text-xs font-normal text-gray-400">USD</span>{" "}
          {totalPrice}
        </p>
      </div>
      <Link to={"/dashboard/checkout"}>
        <button className="inline-block w-full px-5 mt-4 py-3 text-sm font-medium text-black bg-[#FFCC00] border border-[#FFCC00] transform duration-200 rounded active:text-[#FFCC00] hover:bg-transparent hover:text-[#FFCC00] focus:outline-none focus:ring">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
