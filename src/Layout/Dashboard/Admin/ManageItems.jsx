import { useState } from "react";
import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineUpdate } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMenu from "../../../Hooks/useMenu";

const ManageItems = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [menu, isLoading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);

        if (res.data.deletedCount > 0) {
          refetch();
          toast.success("Menu deleted successfully");
        }
      }
    });
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = menu.slice(startIndex, endIndex);
  const totalItems = menu.length;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numberOfPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <>
      <div>
        <SectionTitle
          subHeading={"Hurry Up!"}
          heading={"MANAGE ALL PRODUCTS"}
        />
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="px-3 py-5 text-left">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Item Name
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
                {isLoading
                  ? Array.from({ length: 10 }).map((_, i) => (
                      <tr key={i}>
                        <td className="py-4 px-4 ">
                          <Skeleton width={14} height={14} />
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                          <Skeleton circle={true} height={48} width={48} />
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4">
                          <Skeleton width={100} />
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4">
                          <Skeleton width={50} />
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4">
                          <Skeleton width={80} />
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4">
                          <div className="flex gap-2 items-center">
                            <Skeleton width={24} height={24} />
                            <Skeleton width={24} height={24} />
                          </div>
                        </td>
                      </tr>
                    ))
                  : itemsToShow.map((item, i) => (
                      <tr key={i}>
                        <td className="py-4 px-3 ">
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="border-b px-4 border-[#eee]">
                          <div className="flex items-center gap-2">
                            <img
                              className="w-12 h-12"
                              src={item?.image}
                              alt=""
                            />
                            <h3 className="text-[16px]">
                              {item?.name.length > 25
                                ? item?.name.slice(0, 20) + "..."
                                : item?.name}
                            </h3>
                          </div>
                        </td>

                        <td className="border-b border-[#eee] py-5 px-4">
                          <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 text-sm font-medium text-success">
                            {item?.price}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4">
                          <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                            {item?.category}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4">
                          <div className="flex gap-2 items-center">
                            <Link to={`/dashboard/updateItem/${item._id}`}>
                              <MdOutlineUpdate className="text-2xl text-gray-700" />
                            </Link>
                            <button onClick={() => handleDeleteItem(item)}>
                              <FcDeleteDatabase className="text-2xl" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
            {menu?.length >= 10 && (
              <div className="flex-wrap md:flex justify-center py-16 gap-3">
                <button
                  className="flex items-center justify-center w-8 text-[#00B207] h-8 hover:bg-[rgb(44,116,47,0.1)] rounded-full"
                  onClick={handlePreviousPage}
                >
                  <HiArrowNarrowLeft className="text-xl" />
                </button>

                <div className="flex justify-center gap-3">
                  {pages.map((page) => (
                    <button
                      className={`w-8 h-8 rounded-full ${
                        currentPage === page
                          ? "font-semibold bg-[#00B207] text-white"
                          : "hover:bg-[rgb(44,116,47,0.1)] text-[#00B207]"
                      }`}
                      key={page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page + 1}
                    </button>
                  ))}
                </div>

                <button
                  className="rounded-full text-[#00B207] text-xl flex items-center justify-center w-8 hover:bg-[rgb(44,116,47,0.1)] h-8"
                  onClick={handleNextPage}
                >
                  <HiArrowNarrowRight className="text-xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
