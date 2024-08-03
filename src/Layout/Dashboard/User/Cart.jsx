import { RxCross2, RxMinus, RxPlus } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const subtotal = cart
    .reduce((total, item) => total + parseFloat(item?.price), 0)
    .toFixed(2);
  const shippingCost = subtotal >= 1 ? 10.99 : 0;
  const totalPrice = (parseFloat(subtotal) + shippingCost).toFixed(2);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle subHeading="My Cart" heading="WANNA ADD MORE?" />

      <div className="justify-center flex-1 ">
        <div className="p-8 bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
              <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-[40%] md:mb-0">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Product name
                  </h2>
                </div>
                <div className="hidden px-4 lg:block lg:w-2/12">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Price
                  </h2>
                </div>
                <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Quantity
                  </h2>
                </div>
                <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Subtotal
                  </h2>
                </div>
              </div>

              <div className="py-4 mb-8  border-t border-b border-gray-200 ">
                {cart &&
                  cart.map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8"
                    >
                      <div className="w-full mb-6 md:w-4/6 lg:w-[40%] md:mb-0">
                        <div className="flex flex-wrap items-center -mx-4">
                          <div className="w-full px-4 mb-3 md:w-1/3">
                            <div className="w-full  md:h-24 md:w-24 p-3">
                              <img
                                src={item?.image}
                                alt=""
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="w-2/3 px-4">
                            <h2 className="mb-1 text-lg font-bold ">
                              {item?.name}
                            </h2>
                            <p className="text-gray-500  ">{item?.category}</p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden px-4 lg:block lg:w-2/12">
                        <p className="text-lg font-bold text-[#ffcc00] ">
                          ${item?.price}.00
                        </p>
                        <span className="text-xs text-gray-500 line-through ">
                          ${item?.price ? item.price * 2 : "00"}.00
                        </span>
                      </div>
                      <div className="border w-[100px] ml-3 h-8 flex items-center justify-between">
                        <div className="border-r h-full px-1 flex items-center justify-center">
                          <RxMinus disabled />{" "}
                        </div>
                        {item?.quantity}
                        <div className="border-l h-full px-1 flex items-center justify-center">
                          <RxPlus disabled />{" "}
                        </div>
                      </div>
                      <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                        <p className="text-lg font-bold text-pribg-[#ffcc00] ">
                          {item?.price * item?.quantity}.00
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-[#ffcc00] hover:text-white bg-[#ffcc00]/10 hover:bg-[#ffcc00]/50 hover p-1 rounded-full"
                      >
                        <RxCross2 className="text-xl" />
                      </button>
                    </div>
                  ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <span className="text-gray-700 dark:text-gray-400">
                  Apply Coupon
                </span>
                <input
                  type="text"
                  className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400 dark:bg-gray-800"
                  placeholder="x304k45"
                  disabled
                />
                <button
                  disabled
                  className="flex-1 inline-block px-8 py-4 font-semibold text-center text-gray-400 bg-gray-300 rounded-md md:flex-none"
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="w-full px-4 xl:w-4/12">
              <div className="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-blue-50 md:p-8">
                <h2 className="mb-8 text-xl font-bold text-gray-700 dark:text-gray-400">
                  Order Summary
                </h2>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                  <span className="text-gray-700 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">
                    ${subtotal}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700 dark:text-gray-400 ">
                    Shipping
                  </span>
                  <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">
                    ${shippingCost}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700 dark:text-gray-400">
                    Order Total
                  </span>
                  <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
                    ${totalPrice}
                  </span>
                </div>
                <h2 className="text-lg text-gray-500 dark:text-gray-400">
                  We offer:
                </h2>
                <div className="flex items-center mb-4 ">
                  <a href="#">
                    <img
                      src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                      alt=""
                      className="object-cover h-16 mr-2 w-26"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                      alt=""
                      className="object-cover h-16 mr-2 w-26"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                      alt=""
                      className="object-cover h-16 mr-2 w-26"
                    />
                  </a>
                </div>

                {cart.length > 0 ? (
                  <Link to={"/dashboard/checkout"}>
                    <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-[#ffcc00] rounded-md hover:bg-[#ffcc00cd]">
                      Checkout
                    </button>
                  </Link>
                ) : (
                  <button className="block w-full py-4 font-bold text-center text-gray-400 uppercase bg-gray-300 rounded-md ">
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
