import { Bell } from "lucide-react";
import SearchInput from "../SearchInput";

function Navbar() {
  return (
    <nav className="bg-[#293536] py-3 px-7 h-fit w-full flex items-center gap-7">
      <h1 className="font-medium text-green-main">ADMIN VIEW</h1>
      <SearchInput id="navbar_search" name="navbar-search" />

      <div className="bg-bg-main p-1 rounded-sm hover:bg-bg-layer cursor-pointer ">
        <Bell size={20} />
      </div>
    </nav>
  );
}

export default Navbar;
