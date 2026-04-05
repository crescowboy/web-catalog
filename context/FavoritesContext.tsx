"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';


interface FavoritesContextType {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);


export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

 
  useEffect(() => {
    const saved = localStorage.getItem('my-favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  
  const toggleFavorite = (product: Product) => {
    setFavorites((prev) => {
      const isAlreadyFav = prev.some((fav) => fav.id === product.id);
      let updated;

      if (isAlreadyFav) {
        
        updated = prev.filter((fav) => fav.id !== product.id);
      } else {
        
        updated = [...prev, product];
      }

      
      localStorage.setItem('my-favorites', JSON.stringify(updated));
      return updated;
    });
  };

  
  const isFavorite = (productId: number) => {
    return favorites.some((fav) => fav.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};


export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  return context;
};