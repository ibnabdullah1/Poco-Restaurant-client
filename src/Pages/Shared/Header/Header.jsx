import Sticky from "./Sticky";
import SearchFunc from "./SearchFunc";
import { NavbarWithMegaMenu } from "./Navbar1";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <>
      <Sticky />
      <hr />
      <div className="  z-40 sticky top-0 bg-white w-full ">
        <SearchFunc />
        <NavbarWithMegaMenu />
      </div>
      <MobileNavbar />
    </>
  );
};

export default Header;
