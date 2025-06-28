import Header from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: {children: ReactNode}) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
         <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>     
    </div>
  )
}