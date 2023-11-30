import { useLocation, useNavigate } from "react-router-dom";
import { MoreVertical, Inbox, Users } from "lucide-react";

import phaisPlusVerticalLogo from "/Logo.svg";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="bg-bg-layer h-screen px-6 py-8 w-64 border-r border-bg-layer flex flex-col justify-between fixed shadow-sm">
      <div className="w-full flex flex-col items-center first-letter gap-8">
        <img
          src={phaisPlusVerticalLogo}
          className="overflow-hidden w-36"
          alt="Logo Phais+"
        />

        <ul className="w-full flex flex-col gap-4">
          <SidebarItem
            icon={<Inbox />}
            path="/admin"
            text="Requisições"
            active={pathname === "/admin"}
          />
          <SidebarItem
            icon={<Users />}
            path="/admin/usuarios"
            text="Usuários"
            active={["/admin/usuarios", "/admin/usuarios/detalhes"].includes(
              pathname
            )}
          />
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <img
          src="https://ui-avatars.com/api/?name=Beatriz+Vidal&background=B0E2D5&color=2E875C&bold=true"
          alt="Foto de perfil do usuário"
          className="w-10 h-10 aspect-square rounded-md"
        />
        <div className="w-full flex items-center justify-between overflow-hidden transition-all">
          <div className="flex flex-col gap-0.5">
            <h4 className="font-semibold text-neutral-200">Beatriz Vidal</h4>
            <span className="text-xs text-neutral-300">
              beatrizvidal@gmail.com
            </span>
          </div>
          <MoreVertical className="text-neutral-200 h-5 w-5 aspect-square hover:cursor-pointer hover:scale-110" />
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, text, active, path }) {
  const navigate = useNavigate();

  return (
    <li
      className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-colors hover:bg-bg-layer-hover hover:cursor-pointer ${
        active ? "font-medium text-green-main" : "text-neutral-200"
      }`}
      onClick={() => navigate(path)}
    >
      {icon}
      <span className="overflow-hidden">{text}</span>
    </li>
  );
}

export default Sidebar;
