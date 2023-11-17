import { Link, useLocation } from "react-router-dom";

import { MoreVertical, Inbox, Users } from "lucide-react";

import Logo from "/Logo.svg";

function Sidebar() {
  const { pathname } = useLocation();

  return (
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
        <div className="flex justify-between items-center overflow-hidden transition-all w-44 ml-3">
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
  );
}

function SidebarItem({ icon, text, active, path }) {
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
        <span className="overflow-hidden transition-all w-44 ml-3">{text}</span>
      </Link>
    </li>
  );
}

export default Sidebar;
