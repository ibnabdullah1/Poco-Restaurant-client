import Rating from "react-rating";
import Button from "../../../Components/Button/Button";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import "./SpecialFood.css";

import MyModal from "../../../Components/Madal/ProductCardModal";
const SpecialFood = () => {
  const [menu] = useMenu();

  return (
    <div>
      <SectionTitle
        subHeading="Hot Fresh"
        heading="Shop our favorites"
      ></SectionTitle>
      <div className="grid grid-cols-1 max-w-7xl mx-auto gap-5 md:grid-cols-2 lg:grid-cols-4 px-10 ">
        {menu.slice(0, 12).map((food, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
            key={i}
            className="bg-[#ffffff] card pt-10 border rounded-xl"
          >
            <div className="flex h-[200px] justify-center items-center  ">
              <img
                className="w-[200px] transform duration-500"
                src={food.image}
                alt={food.name}
              />
            </div>
            <div className="px-4 ">
              <div>
                <p className=" text-[#ffcc00] text-xs ">
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
                    initialRating={food.rating}
                    readonly
                  />
                </p>
                <h2 className="font-semibold mb-1">
                  {food.name && food.name.length > 20
                    ? food.name.slice(0, 20) + "..."
                    : food.name}
                </h2>
                <p className="text-[#6c6a6a] text-[12px] mb-2">
                  {food.recipe && food.recipe.length > 60
                    ? food.recipe.slice(0, 60) + "..."
                    : food.recipe}
                </p>
              </div>
              <div className="flex justify-between pb-4 items-end">
                <p className="text-lg font-semibold text-[#ffcc00]">
                  <strike className="text-[#2d2d2d] pr-2">
                    {" "}
                    {food.price * 2}
                  </strike>
                  {food.price}
                </p>
                <MyModal food={food} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {menu.length > 0 && (
        <div className="flex justify-center items-center py-10">
          <Button level={"ALl Products"} address={"order"} />
        </div>
      )}
    </div>
  );
};

export default SpecialFood;
