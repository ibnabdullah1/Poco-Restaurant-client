import { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import FoodCardSkeleton from "../../../Components/Skeleton/FoodCardSkeleton";

const OrderTab = ({ items, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = items.slice(startIndex, endIndex);
  const totalItems = items.length;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numberOfPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div>
      <div className="grid md:grid-cols-2    px-5 lg:grid-cols-3 gap-10 max-w-6xl py-10 mx-auto">
        {isLoading
          ? Array(12)
              .fill()
              .map((_, i) => <FoodCardSkeleton key={i} />)
          : itemsToShow.map((food) => (
              <FoodCard key={food?._id} food={food}></FoodCard>
            ))}
      </div>

      {items.length > 5 && (
        <div className="  flex-wrap md:flex justify-center py-16 gap-3">
          <button
            className=" flex items-center justify-center w-8  text-[#ffcc00] h-8"
            onClick={handlePreviousPage}
          >
            <HiArrowNarrowLeft className="text-xl" />
          </button>
          <div className="flex justify-center gap-3">
            {pages.map((page) => (
              <button
                className={` w-8   h-8 rounded-full ${
                  currentPage === page
                    ? "font-semibold bg-[#ffcc00]  text-white"
                    : "hover:bg-[rgb(255,204,0,0.2)] text-[#ffcc00]"
                }`}
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
              </button>
            ))}
            <button
              className="rounded-full text-[#ffcc00] text-xl  flex items-center justify-center w-8 hover:bg-gray-100 h-8"
              onClick={handleNextPage}
            >
              <HiArrowNarrowRight className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTab;
