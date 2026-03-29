"use client";

import Image from "next/image";
import { Star, Heart,Ruler,Palette} from 'lucide-react';
import Link from 'next/link';

const featuredProducts= [
    {
        id: 1,
        name: "Mazinger Z",
        category: "ANIME",
        description: "El legendario Mazinger Z, el primer robot tripulado de la historia. Figura de alta calidad con acabados...",
        price: "$25",
        image: "/images/mazinger.png",
        size: "18 cm",
        colors: "4 colores"
    },
    {
        id: 2,
        name: "Naruto Uzumaki",
        category: "ANIME",
        description: "Figura coleccionable de Naruto Uzumaki en pose de batalla. Detallada y pintada a mano...",
        price: "$20",
        image: "/images/naruto.png",
        size: "16 cm",
        colors: "3 colores"
    },
    {
        id: 3,
        name: "Sasuke Uchiha",
        category: "ANIME",
        description: "Réplica de Sasuke Uchiha con efecto de Sharingan. Figura de colección premium con detalles grabados",
        price: "$20",
        image: "/images/sasuke.png",
        size: "16 cm",
        colors: "2 colores"
    }

]

export default function Products(){
    return(
        <section className="bg-[#0a0f1e] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className ="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                        Productos Destacados
                    </h2>
                    <p className="text-gray-400">Nuestras figuras más populares y exquisitas</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product)=>(
                        <div key={product.id} className="relative bg-bg-[#0a0f1e] rounded-[24px] border border-gray-800/50 p-4 shadow-2xl group transition-all hover:border-gray-700/50">
                            
                            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg ">
                                <Star className="w-3 h-3 fill-white" /> DESTACADO
                            </div>

                            <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-gray-400 hover:text-red-500 transition-colors">
                                <Heart className="w-4 h-4" />
                            </button>

                            <div className="relative w-full aspect-[4/4] rounded-[20px] overflow-hidden mb-4 border border-gray-800/40">
                                <Image 
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="inline-block bg-[#1c1917] border border-orange-900/30 text-orange-500 text-[10px] font-bold px-3 py-1 rounded-full mb-3">
                                {product.category}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{product.name}</h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                                {product.description}
                            </p>

                            <div className="flex gap-4 border-t border-gray-800/50 pt-4 mb-4 text-gray-400 text-[12px]">
                                <span className="flex items-center gap-2">
                                    <Ruler className="w-4 h-4 text-orange-500/70" /> {product.size}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Palette className="w-4 h-4 text-orange-500/70" /> {product.colors}
                                </span>
                            </div>

                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-3xl font-bold text-orange-500 tracking-tighter">
                                    {product.price}
                                </span>
                                <Link href="/details" className="bg-gradient-to-br from-orange-500 to-red-600 px-5 py-2 rounded-lg text-white font-bold flex items-center gap-2 hover:brightness-110 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all active:scale-95">
                                    Ver <span className="text-lg">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}