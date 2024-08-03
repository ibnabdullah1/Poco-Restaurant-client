import { useEffect, useState } from "react";
import getWishlist from "../../Api/wishlist";
import { RxCrossCircled } from "react-icons/rx";
import Cover from "../Shared/Cover/Cover";
import { Button, Spinner } from "@material-tailwind/react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const Wishlist = () => {
  const { refetch } = useCart();
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [noData, setNoData] = useState();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    const myWishlist = getWishlist();
    if (myWishlist.length > 0) {
      setLoading(false);
      setWishlist(myWishlist);
    } else if (myWishlist.length === 0) {
      setLoading(false);
      setNoData("Empty wishlist!");
    }
  }, []);

  const handleDeleteFromWishlist = (id) => {
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedWishlist = existingWishlist.filter(
      (item) => item.menuItemID !== id
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
    toast.success("Product removed successfully from wishlist");
  };

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuItemID: food?.menuItemID,
        email: user?.email,
        category: food?.category,
        foodName: food?.name,
        price: food?.price,
        rating: food?.rating,
        quantity: food?.quantity,
        image: food?.image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          refetch();
          const existingWishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];
          const updatedWishlist = existingWishlist.filter(
            (item) => item.menuItemID !== food?.menuItemID
          );
          localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
          setWishlist(updatedWishlist);
          toast.success("Product added successfully to cart");
        }
      });
    }
  };

  return (
    <>
      <Cover location={"Wishlist"} />
      <div className="py-20">
        <div className="rounded-sm max-w-6xl mx-auto border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default  dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    Image
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Name
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Price
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Category
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item, i) => (
                  <tr key={i}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 ">
                      <p className="text-black dark:text-white">
                        {item?.foodName}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 ">
                      <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                        {item?.price}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 ">
                      <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                        {item?.category}
                      </p>
                    </td>
                    <td className="border-b  border-[#eee] py-5 px-4 ">
                      <div className="flex gap-2 items-center">
                        <Button
                          onClick={() => handleAddToCart(item)}
                          className="bg-[#00B207] py-2 px-4 rounded-full"
                        >
                          {" "}
                          Add To Cart
                        </Button>
                        <button
                          onClick={() =>
                            handleDeleteFromWishlist(item?.menuItemID)
                          }
                        >
                          <RxCrossCircled className="text-3xl hover:text-red-500 text-[#8e8b8bdd]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex flex-col py-5 justify-center items-center">
              {isLoading && <Spinner color="green" />}
              {noData}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
