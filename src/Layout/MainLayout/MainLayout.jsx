import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");

  return (
    <div>
      {/* {noHeaderFooter || <Navbar />} */}
      {noHeaderFooter || <Header />}
      {noHeaderFooter || <Outlet />}
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
