import { Helmet } from "react-helmet";
import MenuCard from "../../../Components/MenuCard/MenuCard";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import NewsLetter from "../NewLetter/NewsLetter";
import PopularMenu from "../PopularMenu/PopularMenu";
import Reviews from "../Reviews/Reviews";
import SpecialFood from "../SpecialFood/SpecialFood";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Poco Restaurant/Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <SpecialFood />
      <MenuCard />
      <Featured />
      <Reviews />
      <Blog />
      <NewsLetter />
      <Services />
    </div>
  );
};

export default Home;
