
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  ClipboardList,
  Wrench,
  Users,
  SlidersHorizontal,
  Menu,
} from "lucide-react";

function DropDownMenu() {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Ordens de Serviço",
      path: "/os",
      icon: ClipboardList,
    },
    {
      title: "Técnicos",
      path: "/tecnicos",
      icon: Wrench,
    },
    {
      title: "Clientes",
      path: "/clientes",
      icon: Users,
    },
    {
      title: "Parâmetros",
      path: "/configuracoes",
      icon: SlidersHorizontal,
    },
  ];

  return (
    <div className="dropdown">
      {/* Botão do menu */}
      <button
        tabIndex={0}
        className="btn btn-ghost btn-circle
                   text-base-content/70
                   hover:bg-base-300 hover:text-primary"
        aria-label="Abrir menu"
      >
        <Menu size={21} strokeWidth={1.7} />
      </button>

      {/* Menu dropdown */}
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content z-50
                   mt-2 w-60 rounded-xl border border-base-300
                   bg-base-200 p-2 shadow-lg"
      >
        <li className="menu-title px-3 py-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-base-content/40">
            Menu principal
          </span>
        </li>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex flex-row items-center gap-3 rounded-lg px-3 py-2.5
                  transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-base-content/70 hover:bg-base-300 hover:text-base-content"
                  }`
                }
              >
                <Icon size={17} strokeWidth={1.8} />

                <span className="text-sm">
                  {item.title}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropDownMenu;