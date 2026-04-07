
"use client";

import Image from "next/image";
import { Star, Heart,Ruler,Palette} from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useFavorites } from '@/context/FavoritesContext'


export default function ProductCard({ info }: { info: Product }){
     
    const { toggleFavorite, isFavorite } = useFavorites();
    const isFav = isFavorite(info.id)


    return(
        <div className="relative bg-bg-[#0a0f1e] rounded-[24px] border border-gray-800/50 p-4 shadow-2xl group transition-all hover:border-gray-700/50">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg ">
                <Star className="w-3 h-3 fill-white" /> DESTACADO
            </div>

            <button 
                onClick={() => toggleFavorite(info)} 
                className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 ${
                    isFav 
                    ? 'bg-red-500/20 text-red-500 border-red-500/50' 
                    : 'bg-black/20 text-gray-400 hover:text-red-500' 
                }`}
            >
                <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500' : ''}`} /> 
            </button>

            <div className="relative w-full aspect-[4/4] rounded-[20px] overflow-hidden mb-4 border border-gray-800/40">
                <Image 
                    src={info.image}
                    alt={info.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>

            <div className="inline-block bg-[#1c1917] border border-orange-900/30 text-orange-500 text-[10px] font-bold px-3 py-1 rounded-full mb-3">
                {info.category}
            </div>
            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{info.name}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                {info.description}
            </p>

            <div className="flex gap-4 border-t border-gray-800/50 pt-4 mb-4 text-gray-400 text-[12px]">
                <span className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-orange-500/70" /> {info.size}
                </span>
                <span className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-orange-500/70" /> {info.colors.length} {info.colors.length === 1 ? 'color' : 'colores'}
                </span>
            </div>

            <div className="flex justify-between items-center mt-auto">
                <span className="text-3xl font-bold text-orange-500 tracking-tighter">
                    {info.price}
                </span>
                <Link href={`/details/${info.id}`} className="bg-gradient-to-br from-orange-500 to-red-600 px-5 py-2 rounded-lg text-white font-bold flex items-center gap-2 hover:brightness-110 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95">
                    Ver <span className="text-lg">→</span>
                </Link>
            </div>
        </div>
    );
}
