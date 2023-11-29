import Sidebar from "./../Sidebar";
import NavbarMobile from "./../NavbarMobile";

function BaseLayout({
  pageName,
  alignment = "space-y-4 flex flex-col items-center md:items-start",
  children,
}) {
  return (
    <div className="flex text-neutral-200">
      <main className="bg-bg-dark flex-1 flex h-screen overflow-x-hidden">
        <div className="hidden sm:block">
          <Sidebar />
        </div>

        <div className="relative w-full flex flex-col gap-4 p-8">
          <NavbarMobile />

          <h1 className="text-xl font-medium">{pageName}</h1>

          <div className={`bg-bg-main p-5 rounded ${alignment}`}>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BaseLayout;
