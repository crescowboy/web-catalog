"use client";

import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredProducts } from '@/data/products';
import ProductImage from '@/components/products/ProductImage';
import { CONTACT_CONFIG } from '@/components/constants';
import { useFavorites } from '@/context/FavoritesContext'


interface PageProps {
  params: { id: string }; 
}

export default function ProductDetailPage({ params }: PageProps) {
  
  const productId = parseInt(params.id);
  const product = featuredProducts.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }
  
  const { toggleFavorite , isFavorite} = useFavorites();
  const isFav = isFavorite(product.id);

  return (
    
    <main className="min-h-screen bg-[#020617] text-white p-4 md:p-10 font-sans">
      <nav className="text-sm text-gray-500 mb-8 flex gap-2 items-center">
        <Link href="/" className="hover:text-white transition">Inicio</Link>
        <span>/</span>
        <Link href="/catalog" className="hover:text-white transition">Catálogo</Link>
        <span>/</span>
        <span className="text-orange-400 font-medium">{product.name}</span>
      </nav>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        
        <div className="flex flex-col gap-4">
          <ProductImage
            images={product.images || [product.image]} 
            name={product.name} 
          />
        </div> 
                      
       <div className="flex flex-col gap-y-6">
         <div className="flex justify-between items-center">
            <span className="bg-orange-950 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {product.category}
            </span>
          </div>

          
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight">{product.name}</h1>
            <p className="text-4xl font-bold bg-gradient-to-r from-[#ffea00] to-[#ff4e00] text-transparent bg-clip-text inline-block">{product.price}</p>
            <div className="flex items-center gap-1.5 text-sm text-gray-400">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="font-semibold text-white">4.9/5</span>
              <span>(237 reseñas)</span>
            </div>
          </div>

          <hr className="border-gray-800" />

          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-200">Descripción</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          
          <div className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold text-gray-200">Especificaciones</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between bg-[#10172a] p-4 rounded-xl border border-gray-800">
                <span className="text-gray-400">Tamaño</span>
                <span className="font-medium text-gray-100">{product.size}</span>
              </div>
              <div className="flex justify-between bg-[#10172a] p-4 rounded-xl border border-gray-800">
                <span className="text-gray-400">Material</span>
                <span className="font-medium text-gray-100">{product.material}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <h3 className="text-lg font-semibold text-gray-200">
              Colores disponibles ({product.colors.length})
            </h3>
            
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button key={index}className="px-5 py-2 text-sm rounded-full bg-[#10172a] border border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all text-gray-300 font-medium">
                  {color}
                </button>
              ))}
            </div>
          </div>

          
          <div className="flex flex-col gap-4 mt-6">
            <div className="w-full bg-[#061a14] text-[#4ade80] py-3 rounded-lg border border-[#166534]/30 flex justify-center items-center gap-2 text-sm font-medium">
              <span>✓</span> En stock
            </div>

          <Link 
            href={CONTACT_CONFIG.whatsapp.getLink(product.name, product.category)}
            target="_blank"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#dc2626] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-orange-950/20"
          >
            <span className="text-xl">💬</span>
                Contactar por WhatsApp
          </Link>
          

          <button 
            onClick={() => toggleFavorite(product)} 
            className={`w-full py-4 rounded-xl font-bold border flex items-center justify-center gap-2 transition-all shadow-lg ${
            isFav 
              ? "bg-orange-500/10 border-orange-500 text-orange-500" 
              : "border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b]/5 shadow-[0_0_15px_rgba(245,158,11,0.1)]" 
            } `}
          >
            <span className="text-xl">
              {isFav ? '❤️' : '♡'}
            </span>
              {isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
           </button>
          
          <Link href="/catalog" className="text-center text-gray-400 text-sm hover:text-white transition-colors py-2">
            ← Volver al catálogo
          </Link>
          
          <div className="mt-4 bg-[#0f172a]/40 border border-gray-800 rounded-2xl p-6 space-y-3">
            <h4 className="text-[#60a5fa] font-bold flex items-center gap-2 text-sm">
              <span className="bg-[#1e293b] p-1 rounded-md">ℹ️</span> Información
            </h4>
            <ul className="text-gray-400 text-xs space-y-2.5 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-gray-500">✓</span>
                  Envío gratis en pedidos mayores a $100
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">✓</span>
                  Empaque seguro
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">✓</span>
                  Tiempo de producción: 2-5 días hábiles
              </li>
            </ul>
          </div>
        </div>
       </div>
      </div>
    </main>
  );
}