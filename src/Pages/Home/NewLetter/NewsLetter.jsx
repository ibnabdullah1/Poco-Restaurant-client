import bannerImage from "../../../assets/Thamnail/banner.png";

const NewsLetter = () => {
  return (
    <div
      style={{
        background: `URL(${bannerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[300px] max-w-7xl mx-auto flex flex-col items-center justify-center px-4"
    >
      <p className="Norican text-2xl text-center text-[#ffcc00] mb-2">
        Newsletter
      </p>
      <h3 className="text-3xl text-center font-semibold uppercase">
        Get <span className="text-[#00A149]"> 10%</span> off your order!
      </h3>
      <p className="text-center text-zinc-300 pt-2 text-sm">
        Enter your email and receive a 10% discount on your next order!
      </p>{" "}
      <div className="w-full py-4 sm:w-5/12">
        <form className="flex rounded-full bg-white   ">
          <input
            className="w-full appearance-none border px-4  rounded-full py-2 bg-white focus:outline-none"
            type="email"
            placeholder="Your email address"
            required
          />
          <button
            className="ml-2 shrink-0 rounded-full text-white  bg-[#ffcc00] px-6 py-1 text-sm font-medium  "
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
