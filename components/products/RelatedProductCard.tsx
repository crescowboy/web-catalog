import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

export default function SimpleProductCard({ product }: { product: Product }) {
  return (
    <Link 
      href={`/product/${product.id}`} 
      className="group flex flex-col bg-[#0f172a]/30 rounded-2xl p-3 border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300"
    >
      
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      
      <div className="px-1">
        <h3 className="text-sm font-semibold text-gray-200 truncate group-hover:text-orange-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-orange-500 font-bold text-base mt-1">
          {product.price}
        </p>
      </div>
    </Link>
  );
}