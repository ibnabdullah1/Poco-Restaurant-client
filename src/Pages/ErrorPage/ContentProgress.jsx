import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ContentProgressImage from "../../assets/contentProgress.png";
import "./progress.css";
import LinkBanner from "../../Components/LinkBanner/LinkBanner";

const ContentProgress = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LinkBanner location={location.pathname.split("/")[1]} />
      {loading ? (
        <div id="wave" className="h-[40vh]  flex justify-center items-center">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="flex justify-center items-center">
            <img className="w-2/3 md:w-1/3" src={ContentProgressImage} alt="" />
          </div>
          <h2 className="text-xl md:text-3xl flex justify-center items-center gap-1 text-[#363636] mt-3 font-bold">
            Content is in progress...
          </h2>
          <p className="text-[#808080] mt-3 px-3 w-full md:w-2/4 mx-auto">
            We are currently in the process of enhancing our content. We
            appreciate your patience as we work diligently to provide you with
            an improved and enriched user experience.
          </p>
          <div className="text-center mt-3 ">
            <Link to="/">
              <button className="rounded-full px-4 md:px-8 py-2 bg-[#00b206b3] hover:bg-[#00B207] text-white font-medium">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentProgress;
