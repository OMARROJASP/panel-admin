"use client"

import Link from "next/link";
import { usePathname  } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Boxes,
  Tags,
  Image as ImageIcon,
} from "lucide-react";


const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Producto", href: "/dashboard/productos", icon: Boxes },
  { label: "Categorías", href: "/dashboard/categories", icon: Tags },
  { label: "Banners", href: "/dashboard/banners", icon: ImageIcon },
];

export const Sidebar = () => {
    const pathname = usePathname(); // para poder obtener la ruta actual
 
    return (
        <aside className="w-64 text-black bg-white shadow-md border-r h-full">
      <div className="p-4 text-xl font-bold ">Admin Panel</div>
      <nav className="mt-4">
        <ul>
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3  hover:bg-gray-100",
                    isActive && "bg-gray-200 font-medium"
                  )}
                >
                  <Icon size={20} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
    )
}