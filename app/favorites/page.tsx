"use client";

import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import ProductCard from '@/components/products/ProductCard'; 

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-[#010318] text-white pt-24 pb-12 px-8">
      <div className="max-w-[1200px] mx-auto">
        
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            <h1 className="text-4xl font-bold tracking-tight">Mis Favoritos</h1>
          </div>
          <p className="text-gray-400">
            Guarda las figuras que más te gustan para tenerlas siempre a mano.
          </p>
          
          {favorites.length > 0 && (
            <p className="text-sm text-orange-500 mt-4 font-medium">
              Tienes {favorites.length} {favorites.length === 1 ? 'producto' : 'productos'} en tu lista de deseos.
            </p>
          )}
        </div>

        
        {favorites.length === 0 ? (
          
          <div className="flex flex-col items-center justify-center py-20 bg-[#0a0f1e]/50 rounded-[32px] border border-gray-800/50 border-dashed">
            <div className="w-24 h-24 bg-gray-800/30 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Tu lista está vacía</h2>
            <p className="text-gray-400 text-center max-w-md mb-8 px-6">
              Parece que aún no has añadido ninguna figura a tus favoritos. 
              ¡Explora nuestro catálogo y encuentra tu próxima pieza de colección!
            </p>
            <Link 
              href="/catalog" 
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-orange-500/20"
            >
              <ShoppingBag className="w-5 h-5" />
              Explorar Catálogo
            </Link>
          </div>
        ) : (
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} info={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}