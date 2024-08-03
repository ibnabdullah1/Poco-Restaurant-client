import banner from "../../../assets/home/chiken.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner px-10 pb-20 pt-10   md:pb-20 md:pt-36">
      <div className="max-w-7xl mx-auto lg:flex relative justify-between items-center ">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-white"
        >
          <p className="text-[#ffcc00] mb-5 font-semibold">
            Crispy, Every Bite Taste
          </p>
          <h2 className="text-[55px] md:text-[80px] lg:text-[120px] font-bold leading-[60px] md:leading-[90px] lg:leading-[120px]">
            FAVORITE <br />
            FRIED <br /> CHICKEN
          </h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex justify-center z-10"
        >
          <img className="md:w-[500px] lg:w-[600px] " src={banner} alt="" />
        </div>{" "}
        <div className="z-0 hidden md:flex md:absolute bottom-[-60px] left-10 text-center text-white opacity-10 text-[160px] font-bold">
          <h2 data-aos="zoom-in" data-aos-duration="2000">
            {" "}
            Past Food
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
