"use client"

import { Menu } from "lucide-react"

export default function Header () {
    return (
        <header className="bg-white text-black border-b shadow-sm h-16 flex items-center px-6 justify-between">
            <div className="texty-lg font-semibold">Paner de admisnistración</div>
            <div className="flex item-center gap-4">
                <button className="hover:text-blue-600 transition">
                    <Menu/>
                </button>
            </div>
        </header>
    )
}