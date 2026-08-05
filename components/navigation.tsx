"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
Users,
Dumbbell,
CreditCard,
Settings,
LogOut,
ChevronLeft,
ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Alunos",
    href: "/alunos",
    icon: Users,
  },
  {
    name: "Treinos",
    href: "/treinos",
    icon: Dumbbell,
  },
  {
    name: "Mensalidades",
    href: "/mensalidades",
    icon: CreditCard,
  },
  {
    name: "Configurações",
    href: "/configuracoes",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

useEffect(() => {
  const stored = localStorage.getItem("sidebar");

  if (stored !== null) {
    setCollapsed(JSON.parse(stored));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "sidebar",
    JSON.stringify(collapsed)
  );
}, [collapsed]);

  return (
    <aside
  className={`
    ${collapsed ? "w-24" : "w-72"}
    h-screen bg-zinc-950 border-r border-zinc-800
    flex flex-col justify-between p-6
    transition-all duration-300
  `}
>

  <div className="flex items-center justify-between mb-10">

  {!collapsed && (
    <div>
      <h1 className="text-3xl font-bold text-red-500">
        Gym<span className="text-blue-500">Flow</span>
      </h1>

      <p className="text-zinc-400 text-sm mt-1">
        Sistema de Academia
      </p>
    </div>
  )}

  <button
  onClick={() => setCollapsed(!collapsed)}
    className="
      p-2 rounded-lg
      bg-zinc-900
      hover:bg-zinc-800
      text-white
      transition
    "
  >
    {collapsed ? (
      <ChevronRight size={20} />
    ) : (
      <ChevronLeft size={20} />
    )}
  </button>

</div>

      <div>
        
        

        
        <nav className="flex flex-col gap-2">
          {links.map((link) => {
            const Icon = link.icon;

            const isActive = pathname === link.href;

            return (
              <Link
  key={link.href}
  href={link.href}
  title={collapsed ? link.name : ""}
  className={`
    group
    flex items-center
    ${collapsed ? "justify-center" : "gap-3"}
    p-3 rounded-xl
    transition-all duration-200
    ${
      isActive
        ? "bg-blue-500 text-white"
        : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
    }
  `}
>
                <Icon size={20} />

                {!collapsed && (
  <span className="font-medium">
    {link.name}
  </span>
)}
              </Link>
            );
          })}
        </nav>
      </div>

      
      <div className="border-t border-zinc-800 pt-4">

        {!collapsed && (
          <>
            <div className="mb-4">
              <p className="text-white font-semibold">
                Admin
              </p>

              <p className="text-zinc-400 text-sm">
                admin@gymflow.com
              </p>
            </div>

            <button
              className={`w-full flex items-center ${collapsed ? "justify-center" : "gap-3"} p-3 rounded-xl text-zinc-400 hover:bg-red-500 hover:text-white transition-all duration-200`}
            >
              <LogOut size={20} />

              {!collapsed && (
  <span className="font-medium">
    Sair
  </span>
)}
            </button>
          </>
        )}

      </div>
    </aside>
  );
}