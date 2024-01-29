import { MdOutlineRestaurant } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import StarRating from "./StarRating";
import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
const AddItems = () => {
  const [rating, setRating] = useState(0);
  const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const handleStarChange = (starValue) => {
    setRating(starValue);
  };

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.recipe_name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
        rating: rating,
      };
      const menuResponse = await axiosSecure.post("/menu", menuItem);
      if (menuResponse.data.insertedId) {
        toast.success("Menu was added successfully");
      }
    }
    reset();
  };

  return (
    <div>
      <SectionTitle heading={"ADD AN ITEM"} subHeading={"What's new?"} />
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#fff] px-10 py-14 rounded max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor="recipe_name"
                className="text-sm flex gap-1 font-medium text-gray-900  mb-2"
              >
                Recipe name
                <span className="text-red-600 text-[8px]">
                  <FaStarOfLife />
                </span>
              </label>
              <input
                type="text"
                placeholder="Recipe Name"
                {...register("recipe_name", { required: true })}
                required
                className="shadow-sm border  text-gray-900 sm:text-sm rounded  block w-full p-2.5"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Category"
                className="text-sm flex gap-1 font-medium text-gray-900  mb-2"
              >
                Category
                <span className="text-red-600 text-[8px]">
                  <FaStarOfLife />
                </span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                type="text"
                name="category"
                id="category"
                className="shadow-sm bg-white  border  text-gray-900 sm:text-sm rounded  block w-full p-2.5"
                placeholder="Category"
                required=""
              >
                <option disabled value="default">
                  Select a category
                </option>

                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Chicken">Chicken</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
                <option value="Coffee">Coffee</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="text-sm flex gap-1 font-medium text-gray-900  mb-2"
              >
                Price
                <span className="text-red-600 text-[8px]">
                  <FaStarOfLife />
                </span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                name="price"
                id="price"
                className="shadow-sm bg-white   border text-gray-900 sm:text-sm rounded  block w-full p-2.5"
                placeholder="price"
                required=""
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="Recipe_details"
                className="text-sm flex gap-1 font-medium text-gray-900 mb-2"
              >
                Rating
                <span className="text-red-600 text-[8px]">
                  <FaStarOfLife />
                </span>
              </label>
              <StarRating maxStars={5} onChange={handleStarChange} />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="Recipe_details"
                className="text-sm flex gap-1 font-medium text-gray-900  mb-2"
              >
                Recipe Details
                <span className="text-red-600 text-[8px]">
                  <FaStarOfLife />
                </span>
              </label>
              <textarea
                {...register("recipe", { required: true })}
                id="recipe"
                rows="6"
                className="shadow-sm bg-white border  text-gray-900 sm:text-sm rounded  block w-full p-2.5"
                placeholder="Recipe Details"
                defaultValue={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni sequi, ipsum fugiat eum nihil eos. Delectus vitae debitis aliquid."
                }
              ></textarea>

              <input
                {...register("image", { required: true })}
                type="file"
                name="image"
                className="my-4 block w-full text-base file:mr-4 file:rounded file:border-0 file:bg-[#E8E8E8] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-[#444444] hover:file:bg-[#E8E8E8] focus:outline-none disabled:pointer-events-none disabled:opacity-60"
              />
            </div>
          </div>
          <button
            style={{
              background: "linear-gradient(130deg, #079447 10%, #0cb14b 100%)",
            }}
            className="py-2 px-3 flex gap-1 justify-center items-center rounded text-white"
          >
            Add Item <MdOutlineRestaurant />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
