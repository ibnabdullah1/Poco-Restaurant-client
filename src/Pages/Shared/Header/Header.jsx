import Sticky from "./Sticky";
import SearchFunc from "./SearchFunc";
import { NavbarWithMegaMenu } from "./Navbar1";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <div className="relative">
      <Sticky />
      <hr />
      <div className="sticky top-0 ">
        <SearchFunc />
        <NavbarWithMegaMenu />
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Header;
