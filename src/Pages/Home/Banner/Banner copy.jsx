import Button from "../../../Components/Button/Button";
import banner from "../../../assets/home/banner.png";
import img1 from "../../../assets/home/h1_shape-6.png";
import img2 from "../../../assets/home/h1_shape-7.png";
import img3 from "../../../assets/home/h1_tomato.png";
import "./Banner.css";
const Banner2 = () => {
  return (
    <div className="banner  px-10 pb-20 pt-36   md:pb-20 md:pt-36">
      <div className="  relative max-w-7xl mx-auto lg:flex justify-between items-center ">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="space-y-3 "
        >
          <h2 className="uppercase font-bold text-4xl z-20 text-center lg:text-left md:text-6xl text-white">
            UNLIMITED <br /> MEDIUM{" "}
            <span className="text-[#FFCC00]">PIZZAS</span>
          </h2>
          <h3 className="font-semibold text-center lg:text-left text-[#00a149] text-3xl">
            Medium 2-topping pizza
          </h3>
          <p className="text-white text-center lg:text-left">
            Additional charge for premium toppings. Minimum of 2 required.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start py-5">
            <Button level="Order Now" />
            <h4 className="font-bold text-[#00a149] text-3xl">
              $12.99
              <sup className="font-semibold text-[#00a149] text-base">
                $19.99
              </sup>
            </h4>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex justify-center z-0"
        >
          <img className="w-[500px]" src={banner} alt="" />
        </div>
        <img
          className="absolute right-0 z-[-10] top-0 bottom-0 my-auto w-[700px]"
          src={img1}
          alt=""
        />
        <img
          className="absolute  left-[-160px]  -top-10  lg:top-0  w-[230px] z-0"
          src={img2}
          alt=""
        />{" "}
        <img
          className="absolute w-[300px] lg:flex hidden z-10 top-[-150px] lg:left-[-100px] lg:right-0 mx-auto"
          src={img3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner2;
