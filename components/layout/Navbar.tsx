"use client";
import { Heart } from "lucide-react";
import Link from 'next/link';

export default function Navbar() {
    return (
    <nav className="bg-[#010318]/85 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Cowboy Studio
            </div>
            <div className="flex items-center gap-12">
                <div className="flex gap-8 text-sm">
                    <a href="/" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full">
                        Inicio
                    </a>
                    <a href="/catalog"className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full">
                        Catálogo
                    </a>
                    <a href="#" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full">
                        Anime
                    </a>
                    <a href="#" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full">
                        Películas
                    </a>
                    <a href="#" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full" >
                        Series
                    </a>
                </div>
        
                <Link href ="/favorites" className="relative flex items-center group cursor-pointer">
                    <Heart className="w-6 h-6 text-transparent fill-red-500 transition-all duration-300 group-hover:scale-110 group-hover:fill-orange-500" />
                        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-red-500 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center text-black shadow-md">
                            2
                        </span>
                </Link>
            </div>
        </div>
    </nav>
    );
}
