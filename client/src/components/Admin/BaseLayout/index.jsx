import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

function BaseLayout({ children }) {
  return (
    <div className="flex text-gray-200">
      <main className="bg-bg-dark flex-1 flex h-screen overflow-x-hidden">
        <Sidebar />

        <div className="w-full ml-[245px] flex flex-col">
          <Navbar />

          <main className="w-full">
            <div className="flex gap-2 px-7 py-4 border-b border-bg-layer">
              <h1 className=" font-medium text-xl">
                Requisições - Novos Pedidos
              </h1>
              <div className="bg-[#BC5252] rounded-full text-sm w-4 h-4 flex items-center justify-center">
                6
              </div>
            </div>

            <section className="mx-7 my-4 p-6 rounded-sm bg-bg-main">
              {children}
            </section>
          </main>
        </div>
      </main>
    </div>
  );
}

export default BaseLayout;
