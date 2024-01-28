import { Link } from "react-router-dom";
import errorPage from "../../assets/404.png";

const ErrorPage = () => {
  return (
    <div className="text-center h-[80vh] py-20">
      <div className=" flex justify-center items-center">
        <img className="w-1/3" src={errorPage} alt="" />
      </div>
      {/* <h2 className="text-3xl text-[#363636] mt-3 font-bold">
        Content is in progress...
      </h2> */}
      <h2 className="text-3xl text-[#363636] mt-3 font-bold">
        Oops! page not found{" "}
      </h2>

      <p className="text-[#808080] mt-3 ">
        Ut consequent ac tortor eu vehicula. Aenean accumsan purus eros. <br />
        Maecenas sagittis tortor at metus mollis
      </p>
      <div className="text-center mt-3 ">
        <Link to="/">
          <button className="rounded-full px-4 md:px-8 py-2 bg-[#00b206b3]  hover:bg-[#00B207] text-white font-semibold">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
