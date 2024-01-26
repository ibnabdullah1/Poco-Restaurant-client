import Sticky from "./Sticky";
import SearchFunc from "./SearchFunc";
import { NavbarWithMegaMenu } from "./Navbar1";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <>
      <Sticky />
      <hr />
      <SearchFunc />
      <NavbarWithMegaMenu />
      <MobileNavbar />
    </>
  );
};

export default Header;
