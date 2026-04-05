
import { Product } from '@/types/product'


export const featuredProducts : Product[] = [
    {
        id: 1,
        name: "Mazinger Z",
        category: "ANIME",
        description: "El legendario Mazinger Z, el primer robot tripulado de la historia. Figura de alta calidad con acabados...",
        price: "$25",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775081856/catalog-products/mazinger_uuqf6f.png",
        size: "18 cm",
        colors: ["Rojo", "Azul", "Negro", "Gris"],
        material:"PLA" 
    },
    {
        id: 2,
        name: "Naruto Uzumaki",
        category: "ANIME",
        description: "Figura coleccionable de Naruto Uzumaki en pose de batalla. Detallada y pintada a mano...",
        price: "$20",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775082392/catalog-products/naruto_wqziv2.png",
        size: "16 cm",
        colors: ["Naranja", "Negro", "Amarillo", "Azul"],
        material:"PLA" 
        
    },
    {
        id: 3,
        name: "Sasuke Uchiha",
        category: "ANIME",
        description: "Réplica de Sasuke Uchiha con efecto de Sharingan. Figura de colección premium con detalles grabados",
        price: "$20",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775082394/catalog-products/sasuke_kzqctu.png",
        size: "16 cm",
        colors:["Azul Marino", "Blanco", "Gris", "Morado"],
        material:"PLA" 
    },
    {
        id: 4,
        name: "Pennywise (It) ",
        category: "SERIES",
        price: "$30",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775093427/catalog-products/it_fdb4ay.png", 
        description: "El payaso más temido en una versión amigurumi coleccionable, sosteniendo su clásico globo rojo. Esta edición incluye un escenario de alcantarilla detallado y oscuro. Una pieza imprescindible para fans del terror.",
        size: "18 cm",
        colors: ["Blanco Crema", "Rojo", "Naranja", "Gris"],
        material: " PLA "
    },
    {
        id: 5, 
        name: "Levi Ackerman ",
        category: "ANIME",
        price: "$30",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775093433/catalog-products/levi_kryhtv.png", 
        description: "El capitán del Cuerpo de Exploración en una detallada versión amigurumi. Cuenta con su uniforme completo, incluyendo la capa verde y su expresión seria. Esta edición incluye un escenario detallado y oscuro de Shiganshina. Imprescindible para fans de Attack on Titan.",
        size: "17 cm",
        colors: ["Gris Oscuro", "Verde", "Blanco", "Marrón"],
        material: "Hilo de Algodón "
    },
    {
        id: 6, 
        name: "Joker (Guasón)",
        category: "PELÍCULAS",
        price: "$28",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775093428/catalog-products/joker_sjztp0.png", 
        description: "El icónico villano de Gotham en una versión coleccionable. Detalles precisos en su traje púrpura, vest amarillo y su expresión característica. Ideal para fans de DC Comics.",
        size: "17 cm",
        colors: ["Púrpura", "Verde", "Blanco", "Naranja"],
        material: "Hilo de Algodón "
    }


]