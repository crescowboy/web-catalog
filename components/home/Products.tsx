"use client";

import { featuredProducts } from '@/data/products';
import ProductCard from '../ProductCard';


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
                        
                        <ProductCard key={product.id} info={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}