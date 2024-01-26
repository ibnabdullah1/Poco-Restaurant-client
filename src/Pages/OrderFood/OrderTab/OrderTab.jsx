import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { useState } from "react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

const OrderTab = ({ items }) => {
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
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper pagination={pagination} className="mySwiper min-h-screen">
        <SwiperSlide className="min-h-[60vh]">
          <div className="grid md:grid-cols-2    px-5 lg:grid-cols-3 gap-10 max-w-6xl py-10 mx-auto">
            {itemsToShow.map((food) => (
              <FoodCard key={food?._id} food={food}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
        <div className="  flex-wrap md:flex justify-center py-16 gap-3">
          <button
            className=" flex items-center justify-center w-8  text-[#ffcc00] h-8"
            onClick={handlePreviousPage}
          >
            <HiArrowNarrowLeft className="text-xl" />
          </button>
          {items.length >= 6 && (
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
            </div>
          )}{" "}
          <button
            className="rounded-full text-[#ffcc00] text-xl  flex items-center justify-center w-8 hover:bg-gray-100 h-8"
            onClick={handleNextPage}
          >
            <HiArrowNarrowRight className="text-xl" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default OrderTab;
