import MobileNavbar from "./MobileNavbar";
import { NavbarWithMegaMenu } from "./Navbar1";
import SearchFunc from "./SearchFunc";
import Sticky from "./Sticky";

const Header = () => {
  return (
    <div>
      <Sticky />
      <hr />
      <SearchFunc />
      <NavbarWithMegaMenu />

      <MobileNavbar />
    </div>
  );
};

export default Header;
