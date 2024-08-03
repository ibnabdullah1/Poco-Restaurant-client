import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";

const MainLayout = () => {
  return (
    <div>
      {/* {noHeaderFooter || <Navbar />} 
          {noHeaderFooter || <Header />}
          {noHeaderFooter || <Outlet />}
          {noHeaderFooter || <Footer />} */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
