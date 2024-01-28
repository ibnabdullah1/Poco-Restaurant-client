import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../Hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "Dessert");
  const burger = menu.filter((item) => item.category === "Burger");
  const coffee = menu.filter((item) => item.category === "Coffee");
  const salad = menu.filter((item) => item.category === "Salad");
  const pizza = menu.filter((item) => item.category === "Pizza");
  const drinks = menu.filter((item) => item.category === "Drinks");
  const chicken = menu.filter((item) => item.category === "Chicken");

  return (
    <div>
      <Helmet>
        <title>Poco | Menu</title>
      </Helmet>
      <Cover img={menuImg} location="Menu Restaurant" />
      {/* main cover */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      <MenuCategory items={burger} />
      <MenuCategory items={coffee} location="coffee" img={dessertImg} />
      <MenuCategory items={pizza} location={"pizza"} img={pizzaImg} />
      <MenuCategory items={salad} location={"salad"} img={saladImg} />
      <MenuCategory items={drinks} location={"drinks"} img={saladImg} />
      <MenuCategory items={chicken} location={"chicken"} img={saladImg} />
      <MenuCategory items={desserts} location={"desserts"} img={soupImg} />
    </div>
  );
};

export default Menu;
