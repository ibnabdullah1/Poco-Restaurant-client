import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import SpecialFood from "../SpecialFood/SpecialFood";
import Testimonials from "../Testimonials/Testimonials";
import MenuCard from "../../../Components/MenuCard/MenuCard";
import Blog from "../Blog/Blog";
import MdReviews from "../Testimonials/MDReview";
import SmReviews from "../Testimonials/SMReview";
import NewsLetter from "../NewLetter/NewsLetter";
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
      <SmReviews />
      <MdReviews />
      <Testimonials />
      <Blog />
      <NewsLetter />
      <Services />
    </div>
  );
};

export default Home;
