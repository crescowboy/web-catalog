import {ArrowRight}from "lucide-react";
import Link from 'next/link';
export default function CatalogCTA(){
    return(
        <section className="bg-[#0a0f1e] py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold  bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
                    ¿Listo para tu próxima figura?
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                    Únete a los otros coleccionistas que confían en nosotros para obtener las mejores figuras.
                </p>
                <Link href="/catalog" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20 w-fit mx-auto group">
                    Ir al Catálogo Completo <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}