import burger from "../../../assets/categories/h1_banner1-1.png";
import roll from "../../../assets/categories/h1_banner2-2.png";
import map from "../../../assets/categories/map.png";
import yellowCercle from "../../../assets/categories/yellowCercle.png";
import grayCircle from "../../../assets/categories/grayCircle.png";
import "./PopularMenu.css";

const PopularMenu = () => {
  return (
    <div className="bg-[#f7f2e2]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  py-16 max-w-7xl mx-auto px-10">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className=" anyday-popup bg-white rounded flex py-7 justify-between  px-5 "
        >
          <div className="space-y-2 flex-1">
            <h2 className="font-bold text-gray-700 leading-[24px] mt-3 text-2xl">
              Any day <br /> offers
            </h2>
            <p className="text-xs ">
              NEW PHENOMENON <br />
              BURGER TASTE
            </p>
            <h4 className="font-bold text-[#00a149] pt-7 text-xl">$12.90</h4>
          </div>
          <div className="relative flex-1">
            <img
              className="z-20 absolute top-0 bottom-0 my-auto"
              src={burger}
              alt=""
            />
            <img
              className="yellowCircle transform duration-500 "
              src={yellowCercle}
              alt=""
            />
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" flavors-popup bg-[#00a149] text-white rounded flex py-7 justify-between  px-5 "
        >
          <div className="space-y-2 flex-1">
            <h2 className="font-bold  leading-[24px] mt-3 text-2xl">
              Other <br />
              flavors
            </h2>
            <p className="text-xs">
              SAVE ROOM.
              <br />
              WE MADE SALATS
            </p>
            <h4 className="font-bold text-[#FFCC00] pt-6 text-xl">$12.90</h4>
          </div>
          <div className="relative flex-1">
            <img
              className="z-20 absolute top-0 bottom-0 my-auto"
              src={roll}
              alt=""
            />
            <img
              className="grayCircle transform duration-500"
              src={grayCircle}
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className=" anyday-popup bg-white rounded flex py-7 justify-between  px-5 "
        >
          <div className="space-y-2 flex-1">
            <h2 className="font-bold leading-[24px] mt-3 text-gray-700 text-2xl">
              Find a Poco
              <br /> store
              <br /> near you
            </h2>

            <a href="">
              <h4 className="font-bold hover:text-[#1b1b1b]  text-[#FFCC00]  pt-10 ">
                CONTACT US
              </h4>
            </a>
          </div>
          <div className="relative flex-1">
            <img
              className="z-20 absolute top-0 bottom-0 my-auto"
              src={map}
              alt=""
            />
            <img
              className="yellowCircle transform duration-500"
              src={grayCircle}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
