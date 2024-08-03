import { Link } from "react-router-dom";
import boxMeal from "../../../assets/categories/boxmeals.png";
import burger from "../../../assets/categories/burger.png";
import chicken from "../../../assets/categories/chicken.png";
import combo from "../../../assets/categories/combo.png";
import dessert from "../../../assets/categories/dessert.png";
import drinks from "../../../assets/categories/drinks.png";
import pizza from "../../../assets/categories/pizza.png";
import saucts from "../../../assets/categories/saucts.png";
const Category = () => {
  return (
    <section className="max-w-6xl mx-auto py-10 grid gap-1 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 ">
      <Categories img={combo} address={"/products/Salad"} name={"Salad"} />
      <Categories
        img={dessert}
        address={"/products/Dessert"}
        name={"Desserts"}
      />
      <Categories img={pizza} address={"/products/Pizza"} name={"Pizza"} />
      <Categories img={boxMeal} address={"/products/Coffee"} name={"Coffee"} />
      <Categories
        img={chicken}
        address={"/products/Chicken"}
        name={"Chicken"}
      />
      <Categories img={burger} address={"/products/Burger"} name={"Burger"} />
      <Categories img={saucts} address={"/products/Saucts"} name={"Saucts"} />
      <Categories img={drinks} address={"/products/Drinks"} name={"Drinks"} />
    </section>
  );
};

export default Category;

function Categories({ img, address, name }) {
  return (
    <Link
      to={address}
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex z-0 flex-col justify-end items-center text-center lg:h-[80px] h-[120px] font-semibold text-black hover:text-[#FFCC00]"
    >
      <img
        className=" z-0 w-[100px] transform duration-500 overflow-hidden lg:w-[70px]"
        src={img}
        alt="Category"
      />
      <h5>{name}</h5>
    </Link>
  );
}
