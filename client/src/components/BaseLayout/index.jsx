import { useState } from "react";

import Sidebar from "./../Sidebar";
import NavbarMobile from "./../NavbarMobile";

function BaseLayout({
  pageName,
  alignment = "space-y-4 flex flex-col items-center md:items-start",
  style,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState();

  return (
    <div className="flex text-neutral-200">
      <main className="bg-bg-dark flex-1 flex h-screen overflow-x-hidden">
        <div
          className={`hidden md:block ${!isExpanded ? "sm:mr-60" : "sm:mr-16"}`}
        >
          <Sidebar setIsExpanded={setIsExpanded} />
        </div>

        <div className="relative w-full flex flex-col gap-4 p-8">
          <NavbarMobile />

          <h1 className="text-xl font-medium">{pageName}</h1>

          <div className={`bg-bg-main p-5 rounded ${alignment} ${style}`}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BaseLayout;
