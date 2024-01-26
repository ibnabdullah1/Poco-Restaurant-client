import image from "../../../assets/Thamnail/sectionBanner.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

const Cover = ({ location }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/D4SPzKk/section-Banner.jpg)`,
      }}
      className="h-[300px] max-w-[1300px] mx-auto flex flex-col justify-center items-center bg-cover bg-center"
    >
      <h2 className=" text-zinc-800 text-5xl font-semibold flex gap-1 justify-start items-center">
        {location}
      </h2>
      <h4 className=" text-black   flex gap-1 mt-3 justify-start items-center">
        <IoHomeOutline className="text-zinc-500" /> <MdArrowForwardIos />
        <span className="text-zinc-800" style={{ textTransform: "capitalize" }}>
          {capitalizeFirstLetter(location)}
        </span>
      </h4>
    </div>
  );
};

export default Cover;
