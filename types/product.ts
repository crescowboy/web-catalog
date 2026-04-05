export interface ProductImageItem {
  id: string;
  url: string;
}


export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  images: ProductImageItem[];
  description: string;
  size: string;
  colors: string[];  
  material: string;
}