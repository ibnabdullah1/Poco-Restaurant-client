import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Rating from "react-rating";
import { FaStarOfLife } from "react-icons/fa6";
import StarRating from "../../Layout/Dashboard/StarRating";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const ReviewFrom = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [rate, setRate] = useState(0);
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const handleStarChange = (starValue) => {
    setRate(starValue);
  };
  const handleAddReview = async (e) => {
    e.preventDefault();
    if (rate > 0) {
      const name = user?.displayName;
      const title = "Front End Developer";
      const rating = rate;
      const image = user?.photoURL;
      const review = e.target.review.value;
      const date = formattedDate;
      const reviewData = { name, title, rating, image, review, date };

      const res = await axiosSecure.post("/review", reviewData);
      if (res.data.insertedId) {
        refetch();
        toast.success("Review Send successfully");
      }
    } else {
      toast.error("Please select a rating");
    }
    handleStarChange(0);
  };
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
        <div className="lg:grid-cols-[50%,1fr] grid grid-cols-1 gap-6">
          <div>
            {reviews.map((review) => (
              <div
                key={review._id}
                className="p-6 mb-6 bg-gray-100 rounded-md lg:p-6 dark:bg-gray-900"
              >
                <div className="items-center justify-between block mb-4 lg:flex">
                  <div className="flex flex-wrap items-center mb-4 lg:mb-0">
                    <img
                      className="object-cover mb-1 mr-2 rounded-full shadow w-14 h-14 lg:mb-0"
                      src={review?.image}
                    />
                    <div>
                      <h2 className="mr-2 text-lg font-medium text-gray-700 dark:text-gray-400">
                        {review?.name}
                      </h2>
                      <h2 className="mr-2 text-xs font-medium text-gray-700 dark:text-gray-400">
                        {review?.title}
                      </h2>
                      <p className="text-xs font-medium text-gray-400 dark:text-gray-400">
                        {review?.date}
                      </p>
                    </div>
                  </div>
                  <div>
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
                        initialRating={review?.rating}
                        readonly
                      />
                    </p>
                    <p className="text-xs font-thin text-gray-400 dark:text-gray-400">
                      2h ago
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  {review?.review}
                </p>
                <div className="flex items-center">
                  <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-hand-thumbs-up-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"></path>
                      </svg>
                    </a>
                    <span>Like</span>
                  </div>
                  <div className="flex text-sm text-gray-700 dark:text-gray-400">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4 mr-1 text-blue-800 dark:text-blue-500 bi bi-chat"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                      </svg>
                    </a>
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="p-6 sticky top-0 bg-gray-100 rounded-md dark:bg-gray-900">
              <h2 className="px-2 mb-6 text-2xl font-semibold text-left text-gray-600 dark:text-gray-400">
                Leave a comment
              </h2>
              <form onSubmit={handleAddReview} action="" className="">
                <div className="px-2 mb-6">
                  <label
                    htmlFor="rating"
                    className="mb-2 font-medium text-gray-700 dark:text-gray-400 flex "
                  >
                    Rating
                    <span className="text-red-600 text-[8px]">
                      <FaStarOfLife />
                    </span>
                  </label>
                  <StarRating maxStars={5} onChange={handleStarChange} />
                </div>
                <div className="px-2 mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-gray-700 dark:text-gray-400"
                  >
                    Your review *
                  </label>
                  <textarea
                    type="message"
                    name="review"
                    placeholder="write a review"
                    required=""
                    defaultValue={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed veniam voluptate pariatur rerum autem, velit quasi repudiandae illo commodi?"
                    }
                    className="block w-full h-[100px] leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-500 p-3 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                  ></textarea>
                </div>
                <div className="px-2">
                  <button className="px-4 py-2 font-medium text-gray-100 bg-blue-800 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                    Submit Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewFrom;
