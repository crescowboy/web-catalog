"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ProductImageItem } from '@/types/product';

interface Props {
  images: ProductImageItem[];
  name: string;
}

export default function ProductImageGallery({ images, name }: Props) {
  
  const [selectedImage, setSelectedImage] = useState(images[0].url);

  return (
    <div className="flex flex-col gap-4">
      
      <div className="bg-[#10172a] p-8 rounded-3xl shadow-2xl flex justify-center items-center aspect-square overflow-hidden border border-gray-800">
        <Image 
          src={selectedImage} 
          alt={name}
          width={600}
          height={600}
          className="object-contain w-full h-auto transition-opacity duration-300"
          priority 
        />
      </div>

      
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, index) => (
          <button 
            key={img.id}
            onClick={() => setSelectedImage(img.url)}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all bg-[#10172a] ${
              selectedImage === img.url ? 'border-orange-500 scale-105' : 'border-gray-800 opacity-60 hover:opacity-100'
            }`}
          >
            <Image 
              src={img.url} 
              alt={`${name} vista ${index + 1}`} 
              width={150} 
              height={150} 
              className="object-contain w-full h-full p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}