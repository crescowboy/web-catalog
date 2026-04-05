import { ArrowRight } from "lucide-react";
import Link from 'next/link';
export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#0b0c10]">
            <div className="absolute inset-0  bg-gradient-to-br from-[#1a0f2e] via-[#0b0c10] to-[#2a0f0f]"></div>
            <div className="absolute inset-0  bg-[radial-gradient(circle_at_center,_rgba(255,140,0,0.2),_transparent_70%)]"></div>
            
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="inline-block text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-[#ffea00] to-[#ff4e00] text-transparent bg-clip-text pb-2">
                    Cowboy Studio
                </h1>
                
                <h2 className="text-2xl md:text-4xl text-gray-300 font-medium mb-6">
                    Figuras de tus personajes favoritos
                </h2>
                
                <p className="max-w-2xl text-gray-400 text-lg mb-10">
                    Colecciona tus personajes favoritos de anime, películas y series. Cada
                    figura es hecha con precisión, usando materiales de alta calidad para
                    durabilidad garantizada.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/catalog" className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_25px_rgba(255,140,0,0.4)]">
                        Ver Catálogo
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    
                    <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-500/10 transition-colors">
                        Conocer Más
                    </button>
                </div>
            </div>
        </section>
    );
}
