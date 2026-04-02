
export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  size: string;
  colors: string;
}

export const featuredProducts : Product[] = [
    {
        id: 1,
        name: "Mazinger Z",
        category: "ANIME",
        description: "El legendario Mazinger Z, el primer robot tripulado de la historia. Figura de alta calidad con acabados...",
        price: "$25",
        image: "/images/mazinger.png",
        size: "18 cm",
        colors: "4 colores"
    },
    {
        id: 2,
        name: "Naruto Uzumaki",
        category: "ANIME",
        description: "Figura coleccionable de Naruto Uzumaki en pose de batalla. Detallada y pintada a mano...",
        price: "$20",
        image: "/images/naruto.png",
        size: "16 cm",
        colors: "3 colores"
    },
    {
        id: 3,
        name: "Sasuke Uchiha",
        category: "ANIME",
        description: "Réplica de Sasuke Uchiha con efecto de Sharingan. Figura de colección premium con detalles grabados",
        price: "$20",
        image: "/images/sasuke.png",
        size: "16 cm",
        colors: "2 colores"
    }

]