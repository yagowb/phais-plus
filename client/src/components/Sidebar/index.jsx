import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  Home,
  Server,
  Pill,
} from "lucide-react";
import { useContext, createContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "/Logo.svg";

const SidebarContext = createContext();

export default function Sidebar({ setIsExpanded }) {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(true);

  return (
    <nav className="h-screen fixed w-fit flex flex-col bg-bg-main border-r border-bg-layer shadow-sm">
      {/* LOGO E BOTÃO DE ENCOLHER SIDEBAR */}
      <div className="p-4 pb-2 mb-4 flex justify-between items-center">
        <img
          src={Logo}
          className={`overflow-hidden transition-all ${
            expanded ? "w-32" : "w-0"
          }`}
          alt=""
        />
        <button
          onClick={() => {
            setExpanded((curr) => !curr);
            setIsExpanded((curr) => !curr);
          }}
          className="p-1.5 rounded-lg bg-bg-layer hover:bg-bg-layer-hover"
        >
          {expanded ? (
            <ChevronFirst color="#f5f5f5" />
          ) : (
            <ChevronLast color="#f5f5f5" />
          )}
        </button>
      </div>

      {/* ITENS DA SIDEBAR */}
      <SidebarContext.Provider value={{ expanded }}>
        <ul className="flex-1 px-3 space-y-2">
          <SidebarItem
            icon={<Home />}
            size={20}
            path="/home"
            text="Home"
            active={pathname === "/home"}
          />
          <SidebarItem
            icon={<Server />}
            size={20}
            path="/solicitacoes"
            text="Solicitações"
            active={pathname === "/solicitacoes"}
          />
          <SidebarItem
            icon={<Pill />}
            size={20}
            path="/medicamentos"
            text="Medicamentos"
            active={["/medicamentos", "/detalhes"].includes(pathname)}
          />
        </ul>
      </SidebarContext.Provider>

      <div className="border-t border-bg-layer flex p-3">
        <img
          src="https://ui-avatars.com/api/?name=Beatriz+Vidal&background=B0E2D5&color=2E875C&bold=true"
          alt=""
          className="w-10 h-10 rounded-md"
        />
        <div
          className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}
          `}
        >
          <div className="leading-4">
            <h4 className="font-semibold text-neutral-200">Beatriz Vidal</h4>
            <span className="text-xs text-neutral-300">
              beatrizvidal@gmail.com
            </span>
          </div>
          <MoreVertical size={20} color="#cccccc" />
        </div>
      </div>
    </nav>
  );
}

export function SidebarItem({ icon, text, active, path }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className={`relative`}>
      <Link
        to={path}
        className={`
        flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-bg-layer hover:bg-bg-layer-hover text-neutral-200"
            : "hover:bg-bg-layer-hover text-neutral-200"
        }
    `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-40 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>

        {!expanded && (
          <div
            className={`
            absolute z-10 left-full rounded-md px-2 py-1 ml-6
            bg-green-light text-others-green text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {text}
          </div>
        )}
      </Link>
    </li>
  );
}
