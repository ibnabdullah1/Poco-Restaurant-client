import useMenu from "../../Hooks/useMenu";
import MenuItem from "../../Pages/Shared/MenuItem/MenuItem";
import SectionTitle from "../SectionTitle/SectionTitle";
import menuBg from "../../assets/home/menuCard.png";
import menuItemCard from "../../assets/home/menuItemCard.png";
const MenuCard = () => {
  const [menu] = useMenu();
  const burger = menu.filter((item) => item.category === "Burger");
  const pizza = menu.filter((item) => item.category === "Pizza");
  const dessert = menu.filter((item) => item.category === "Dessert");
  const coffee = menu.filter((item) => item.category === "Coffee");
  const salad = menu.filter((item) => item.category === "Salad");
  const drinks = menu.filter((item) => item.category === "Drinks");

  return (
    <section
      style={{ backgroundImage: `url(${menuItemCard})` }}
      className="py-20 px-4 lg:px-10 "
    >
      <SectionTitle
        heading="Poco's Menu Board"
        subHeading="Our Menu"
        color={"white"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className=" bg-white rounded-3xl "
        >
          <h2 className=" Norican font-semibold text-2xl pl-10 pt-5 ">
            Burgers :
          </h2>
          {burger.slice(1, 4).map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>

        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          className="  bg-white rounded-3xl "
        >
          <h2 className="Norican font-bold text-2xl pl-10 pt-5 ">Salads :</h2>
          {salad.slice(1, 4).map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className=" bg-white rounded-3xl "
        >
          <h2 className="Norican font-bold text-2xl pl-10 pt-5 ">Drinks :</h2>
          {drinks.slice(1, 4).map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          className=" bg-white rounded-3xl "
        >
          <h2 className="Norican font-bold text-2xl pl-10 pt-5 ">Pizza :</h2>
          {pizza.slice(1, 4).map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className=" bg-white rounded-3xl "
        >
          <h2 className="Norican font-bold text-2xl pl-10 pt-5 ">Desserts :</h2>
          {dessert.slice(1, 4).map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          className=" bg-white rounded-3xl "
        >
          <h2 className="Norican font-bold text-2xl pl-10 pt-5 ">Coffees :</h2>
          {coffee.slice(1, 4).map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCard;
