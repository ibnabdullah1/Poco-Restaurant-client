import Button from "../../../Components/Button/Button";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/products/image9-h4.png";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item  ">
      <div className="lg:flex  justify-center items-center py-20 px-4 max-w-6xl mx-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex-1 mb-4 lg:mb-0"
        >
          <img src={featuredImg} alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="md:ml-10 flex-1"
        >
          <p className="Norican text-2xl text-[#ffcc00] ">Always Fresh</p>
          <h3 className="text-4xl text-gray-800 leading-[40px] font-semibold mb-3">
            Made Right. Make Delicious. Made Especially For You.
          </h3>

          <p className="text-gray-500 text-sm mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <Button level={"Order Now"} address={"order"} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
