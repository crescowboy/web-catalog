import Link from 'next/link';
import { Palette, Ruler, Smile, Truck } from 'lucide-react';
import { CONTACT_CONFIG } from '../constants';

const features=[
    {
        icon:Palette,
        title:'Personaliza tu Figura',
        description:'Elige cualquier personaje que desees',
    },
    {
        icon:Ruler,
        title:'Elige tu Tamaño',
        description:'De 5cm a 50cm de altura',
    },
    {
        icon:Smile,
        title:'Personaliza Detalles',
        description:'Poses, colores y accesorios únicos',
    },
    {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Fabricación y envío en 7-15 días',
  },

]


export default function CustomFigure(){
    const whatsappUrl = CONTACT_CONFIG.whatsapp.getLink();

    return(
        <section className="md:py-24 text-white px-4 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-5 max-w-md">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                        Crea Tu Figura Personalizada
                    </h2>
                    <p className="text-gray-300 text-base">
                        ¿No encontraste lo que buscas? Tenemos la solución perfecta para ti. Crea tu propia figura 3D personalizada exactamente como la imaginas.
                    </p>
                    <p className="text-gray-400 text-sm">
                        Nuestro equipo de expertos en diseño 3D puede crear cualquier personaje, objeto o figura que tengas en mente. Desde personajes de anime y películas hasta creaciones completamente originales.
                    </p>
                    
                    <div className='flex flex-col sm:flex-row gap-3 pt-3'>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-medium text-center hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] transition-all duration-300 w-fit">
                            Solicitar por WhatsApp →
                        </a>
                        <Link href="/catalog" className="px-6 py-2.5 border border-amber-400 text-amber-400 rounded-lg font-medium hover:bg-amber-400/10 transition-colors text-center w-fit">
                            Ver Catálogo
                        </Link>
                    </div> 
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature,index)=>(
                        <div key={index} className="bg-[#111827] p-8 rounded-2xl border border-gray-800 space-y-2 hover:border-amber-400/50 transition-colors grou">
                            <feature.icon className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
                            <h3 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                                {feature.title}
                            </h3> 
                            <p className="text-gray-400 text-xs"> 
                            {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}