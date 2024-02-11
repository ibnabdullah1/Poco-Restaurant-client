// ProductCardModal
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaPlus,
  FaTwitter,
} from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Rating from "react-rating";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { Spinner } from "@material-tailwind/react";
export default function MyModal({ food }) {
  let [isOpen, setIsOpen] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const [, refetch] = useCart();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleQuantityUp = () => {
    setItemQuantity(itemQuantity + 1);
  };

  if (loading) {
    return <Spinner color="amber" />;
  }
  const handleQuantityDown = () => {
    if (itemQuantity >= 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const totalPrice = (food?.price * itemQuantity).toFixed(2);

  const handleAddToWishlist = () => {
    setIsOpen(false);
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const cartItem = {
      menuItemID: food?._id,
      category: food?.category,
      foodName: food?.name,
      price: totalPrice,
      rating: food?.rating,
      quantity: itemQuantity,
      image: food?.image,
    };
    const updatedWishlist = [cartItem, ...existingWishlist];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.success("Product added successfully to wishlist");
  };

  const handleAddToCart = () => {
    setIsOpen(false);
    setItemQuantity(0);
    if (user && user.email) {
      const cartItem = {
        menuItemID: food?._id,
        email: user?.email,
        category: food?.category,
        foodName: food?.name,
        price: totalPrice,
        rating: food?.rating,
        quantity: itemQuantity,
        image: food?.image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          toast.success("Product added successfully to cart");
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not log in ?",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div className="">
        <button
          onClick={openModal}
          className="bg-[#ffcc00] text-xl p-2 rounded-full hover:text-white"
        >
          <TiShoppingCart />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed flex justify-center    inset-0 text-zinc-800 overflow-y-auto">
            <div className="flex  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full mt-[10px] md:mt-[400px] lg:mt-0 max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button onClick={closeModal}>
                    <RxCross2 className="text-3xl text-gray-500" />
                  </button>
                  <div className="md:flex justify-between items-start ">
                    <div className="flex-1 items-center flex justify-center">
                      <img
                        className="h-[200px] md:h-[300px] w-auto"
                        src={food?.image}
                        alt=""
                      />
                    </div>
                    <div className="text-left  flex-1 ">
                      <h2 className="text-2xl my-2 font-semibold flex items-start  gap-2 text-zinc-800">
                        {food?.name}
                        <span className="py-1  px-2.5 w-[100px] border-none rounded bg-[rgb(239,240,210,0.4)] flex justify-center items-center text-sm text-[rgb(255,204,0,0.6)] font-medium">
                          In Stock
                        </span>
                      </h2>

                      <p className=" text-[#ffcc00] flex justify-start items-center gap-4 my-1 text-xs ">
                        <Rating
                          emptySymbol={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          }
                          fullSymbol={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          }
                          initialRating={food?.rating}
                          readonly
                        />
                        <span className="text-[#666666]">4 Review</span>
                        <span className="text-[#202020]">SKU: 2,51,594</span>
                      </p>
                      <p className="text-[#ffcc00] font-semibold flex gap-1 items-center my-1 ">
                        ${food?.price}
                        <span className="py-1 px-2.5 border-none rounded-full bg-[#fdeded] text-xs text-[#EA4B48] font-medium">
                          60% off
                        </span>
                      </p>
                      <p className="text-[#131313] font-semibold flex gap-1 items-center my-1 ">
                        Total Price: {totalPrice}
                      </p>
                      <div className="h-[1px] bg-gray-200 my-3"></div>

                      <div className="flex justify-between items-center my-3">
                        <div className="flex justify-start items-center">
                          <p>Share item:</p>
                          <div className="hover:bg-[#ffcc00] p-1.5 rounded-full text-[#4D4D4D] hover:text-white ">
                            <FaFacebookF className=" text-sm" />
                          </div>
                          <div className="hover:bg-[#ffcc00] p-1.5 rounded-full text-[#4D4D4D] hover:text-white ">
                            <FaPinterestP className=" text-sm" />
                          </div>
                          <div className="hover:bg-[#ffcc00] p-1.5 rounded-full text-[#4D4D4D] hover:text-white ">
                            <FaTwitter className=" text-sm" />
                          </div>
                          <div className="hover:bg-[#ffcc00] p-1.5 rounded-full text-[#4D4D4D] hover:text-white ">
                            <FaInstagram className=" text-sm" />
                          </div>
                        </div>
                      </div>
                      <p>{food?.recipe}</p>
                      <div className="flex my-3 justify-between items-center">
                        <div className="border max-w-[100px] flex px-2 rounded-full gap-2 py-2 items-center justify-between">
                          <div className="bg-[#F2F2F2] text-sm rounded-full p-1">
                            <FaMinus onClick={handleQuantityDown} />{" "}
                          </div>
                          {itemQuantity}
                          <div className="bg-[#F2F2F2] text-sm rounded-full p-1">
                            <FaPlus onClick={handleQuantityUp} />{" "}
                          </div>
                        </div>
                        <button
                          onClick={handleAddToCart}
                          disabled={
                            itemQuantity === 0 && !user?.email === "null"
                          }
                          className={`px-10 ${
                            itemQuantity === 0 && !user?.email
                              ? "bg-[#eaeaea]  text-blue-gray-300"
                              : "bg-[rgb(239,240,210,0.4)] hover:bg-[#ffcc00] text-[rgb(255,204,0)]  hover:text-white "
                          } py-2 rounded-full flex justify-center items-center gap-2 transform duration-500`}
                        >
                          Add to Cart
                          <HiOutlineShoppingBag />
                        </button>

                        <button
                          onClick={handleAddToWishlist}
                          className="bg-[rgb(239,240,210,0.4)] p-3 text-[#ffcc00] hover:bg-[#ffcc00] hover:text-white rounded-full transform duration-500"
                        >
                          <CiHeart />
                        </button>
                      </div>
                      <div className="my-3">
                        <p className=" text-sm">
                          Category:
                          <span className="text-[#474646]">
                            {food?.category}
                          </span>
                        </p>
                        <p className="text-sm">
                          Tag:
                          <span className="text-[#808080]">
                            Vegetables Healthy Chinese Cabbage Green
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
