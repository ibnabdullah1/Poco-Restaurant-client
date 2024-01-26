import { Link } from "react-router-dom";
import burger from "../../../assets/categories/burger.png";
import combo from "../../../assets/categories/combo.png";
import dessert from "../../../assets/categories/dessert.png";
import pizza from "../../../assets/categories/pizza.png";
import boxMeal from "../../../assets/categories/boxmeals.png";
import chicken from "../../../assets/categories/chicken.png";
import saucts from "../../../assets/categories/saucts.png";
import drinks from "../../../assets/categories/drinks.png";
const Category = () => {
  return (
    <section className="max-w-6xl mx-auto py-10 grid gap-1 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 ">
      {/* <section className="max-w-6xl mx-auto flex gap-5 items-center justify-center"> */}
      <Categories img={combo} address={"/"} name={"Combo"} />
      <Categories img={dessert} address={"/"} name={"Desserts"} />
      <Categories img={pizza} address={"/"} name={"Pizza"} />
      <Categories img={boxMeal} address={"/"} name={"Box Meals"} />
      <Categories img={chicken} address={"/"} name={"Chicken"} />
      <Categories img={burger} address={"/"} name={"Burger"} />
      <Categories img={saucts} address={"/"} name={"Saucts"} />
      <Categories img={drinks} address={"/"} name={"Drinks"} />
    </section>
  );
};

export default Category;

function Categories({ img, address, name }) {
  return (
    <Link to={address}>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col   justify-end items-center text-center lg:h-[80px] h-[120px] font-semibold text-black hover:text-[#FFCC00]"
      >
        <img
          className=" w-[100px] transform duration-500 overflow-hidden lg:w-[70px]"
          src={img}
          alt=""
        />
        <h5>{name}</h5>
      </div>
    </Link>
  );
}
