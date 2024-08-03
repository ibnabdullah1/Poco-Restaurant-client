import { useQuery } from "@tanstack/react-query";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCardSkeleton from "../../../Components/Skeleton/ReviewsCardSkeleton";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import "./Review.css";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });
  return (
    <div className="bg-[rgb(247,242,226,0.4)]  pt-2 lg:px-10 px-10 ">
      <div className=" max-w-7xl mx-auto pt-2 pb-16 ">
        <div className="flex  justify-between items-end py-8">
          <div className="">
            <p className="Norican text-2xl text-[#ffcc00] mb-2">
              What Our Client Say
            </p>
            <h3 className={`text-3xl font-semibold uppercase `}>
              Testimonials
            </h3>
          </div>

          <div className="flex justify-end  gap-2 ">
            <button className="swiper-button-prev button text-xl  p-2 rounded-full border">
              <IoIosArrowBack />
            </button>
            <button className="swiper-button-next  button text-xl p-2 rounded-full border">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <Swiper
          freeMode={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
        >
          <div>
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <SwiperSlide key={i}>
                    <ReviewsCardSkeleton />
                  </SwiperSlide>
                ))
              : reviews.map((review, i) => (
                  <SwiperSlide key={i}>
                    <ReviewsCard review={review} />
                  </SwiperSlide>
                ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
