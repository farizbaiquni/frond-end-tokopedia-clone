import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full flex-col bg-white px-9">
      <TopNavbar />
      <BottomNavbar />
    </nav>
  );
}

export default Navbar;
