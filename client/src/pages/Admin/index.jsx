import { MoreVertical, Inbox, Search, Users, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Logo from "/Logo.svg";

export default function Admin() {
  const { pathname } = useLocation();

  return (
    <div className="flex text-gray-200">
      <main className="bg-bg-dark flex-1 flex h-screen overflow-x-hidden">
        <aside className="h-screen fixed w-fit flex flex-col bg-bg-layer border-r border-bg-layer shadow-sm">
          {/* LOGO E BOTÃO DE ENCOLHER SIDEBAR */}
          <div className="p-4 pb-2 mb-6 flex justify-between items-center">
            <img
              src={Logo}
              className="overflow-hidden transition-all w-32"
              alt=""
            />
          </div>

          <ul className="flex-1 px-3 space-y-6">
            <SidebarItem
              icon={<Inbox />}
              size={20}
              path="/admin"
              text="Requisições"
              active={pathname === "/admin"}
            />
            <SidebarItem
              icon={<Users />}
              size={20}
              path="/admin/usuarios"
              text="Usuários"
              active={["/admin/usuarios", "/admin/usuarios/detalhes"].includes(
                pathname
              )}
            />
          </ul>

          <div className="border-t border-bg-layer flex p-3">
            <img
              src="https://ui-avatars.com/api/?name=Beatriz+Vidal&background=B0E2D5&color=2E875C&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div className="flex justify-between items-center overflow-hidden transition-all w-40 ml-3">
              <div className="leading-4">
                <h4 className="font-semibold text-gray-200">Beatriz Vidal</h4>
                <span className="text-xs text-gray-300">
                  beatrizvidal@gmail.com
                </span>
              </div>
              <MoreVertical size={20} color="#cccccc" />
            </div>
          </div>
        </aside>
        
        <div className="w-full ml-[245px] flex flex-col">
            <nav className="bg-[#293536] py-3 px-7 h-fit w-full flex items-center gap-7">
                <h1 className="font-medium text-green-main">ADMIN VIEW</h1>
                <div className="relative">
                    <input className="bg-bg-main ps-2 pe-4 py-0.5 rounded-sm border border-bg-main focus:outline-none focus:border-bg-layer-hover/50" type="search" name="navbar-search" id="navbar_search" placeholder="Pesquisar..." />
                    <Search className="absolute top-1 right-2" size={19} />   
                </div>
                <div className="bg-bg-main p-1 rounded-sm hover:bg-bg-layer cursor-pointer ">
                    <Bell size={20} />
                </div>
            </nav>

            <main className="w-full">
                <div className="flex gap-2 px-7 py-4 border-b border-bg-layer">
                    <h1 className=" font-medium text-xl">Requisições - Novos Pedidos</h1>
                    <div className="bg-[#BC5252] rounded-full text-sm w-4 h-4 flex items-center justify-center">6</div>
                </div>
            </main>
        </div>
        
      </main>
    </div>
  );
}

export function SidebarItem({ icon, text, active, path }) {
  return (
    <li
      className={`
            relative`}
    >
      <Link
        to={path}
        className={`
            flex items-center py-2 px-3 my-1 rounded-md cursor-pointer
            transition-colors group
            ${active ? "font-medium text-green-main" : "text-gray-200"}
        `}
      >
        {icon}
        <span className="overflow-hidden transition-all w-40 ml-3">{text}</span>
      </Link>
    </li>
  );
}
