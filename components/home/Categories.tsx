import { Sparkles, Clapperboard, Tv, ArrowRight } from "lucide-react";
import Link from 'next/link';

const categories=[
    {
        title:'Anime',
        description:'Personajes de anime favoritos',
        icon:Sparkles,    
    },
    {
        title:'Películas',
        description:'Iconos del cine mundial',
        icon:Clapperboard ,    
    },
    {
        title:'Series',
        description:'Personajes de series aclamadas',
        icon:Tv,    
    },

];

export default function Categories(){
    return(
        <section className="bg-[#0a0f1e] py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                    Nuestras Categorías
                </h2>
                <p className="text-slate-400">Explora nuestras colecciones por géneros </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((cat,index)=>(
                    <div key={index} className="bg-[#111827] border border-slate-800 p-8 rounded-2xl hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:-translate-y-1 transition-all duration-300 group">
                        <div className="mb-4">
                            <cat.icon className="w-12 h-12 text-amber-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                        <p className="text-slate-400 mb-6">{cat.description}</p>
                        <Link href="/catalog" className="flex items-center text-amber-400 font-semibold group-hover:gap-2 transition-all ">
                            Explorar <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}