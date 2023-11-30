import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

function BaseLayout({ title, children }) {
  return (
    <div className="flex text-neutral-200">
      <main className="bg-bg-dark flex-1 flex h-screen overflow-x-hidden">
        <Sidebar />

        <div className="w-full ml-64 flex flex-col">
          <Navbar />

          <main className="w-full">
            <div className="flex gap-2 px-8 py-4 border-b border-bg-layer">
              <h1 className="text-xl font-medium">{title}</h1>
              {/* <div className="bg-[#BC5252] rounded-full text-sm w-4 h-4 flex items-center justify-center">
                6
              </div> */}
            </div>

            <section className="mx-8 my-4 px-8 py-6 rounded-sm bg-bg-main">
              {children}
            </section>
          </main>
        </div>
      </main>
    </div>
  );
}

export default BaseLayout;
