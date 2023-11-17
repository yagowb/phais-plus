import Sidebar from "./../Sidebar";
import NavbarMobile from "./../NavbarMobile";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Undo2 } from "lucide-react";

function BaseLayout({
  pageName,
  alignment = "flex flex-col items-center md:items-start",
  backPath,
  style,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState();
  
  return (

    <div className="flex text-gray-200">
      <main className="bg-bg-dark flex-1 flex h-screen overflow-x-hidden">
        <div className={`hidden md:block transition-all ${!isExpanded ? 'sm:mr-64' : 'sm:mr-16'}`}>
          <Sidebar setIsExpanded={setIsExpanded} />
        </div>
        <div className="w-full flex flex-col py-5 px-10 gap-6 md:gap-3">
          <NavbarMobile />

          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium">{pageName}</h1>
            {backPath && 
              <Link
                to={backPath}
                className="flex items-center gap-2 cursor-pointer hover:text-[#c0c0c7]"
              >
                <Undo2 size={18} />
                <p className="text-sm">Voltar</p>
              </Link>
            }
          </div>

          <div className={`bg-bg-main p-5 rounded ${alignment} ${style}`}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BaseLayout;
