import { Bell } from "lucide-react";
import SearchInput from "../SearchInput";

function Navbar() {
  return (
    <nav className="bg-[#293536] py-4 px-8 h-fit w-full flex items-center gap-8">
      <h1 className="text-green-main font-medium">ADMIN VIEW</h1>
      <SearchInput id="navbar_search" name="navbar-search" />

      <div className="bg-bg-main p-2 rounded-full hover:bg-bg-layer cursor-pointer ">
        <Bell className="h-5 w-5 aspect-square" />
      </div>
    </nav>
  );
}

export default Navbar;
