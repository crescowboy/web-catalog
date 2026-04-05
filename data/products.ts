import { Product } from '@/types/product'


export const featuredProducts : Product[] = [
    {
        id: 1,
        name: "Mazinger Z",
        category: "ANIME",
        description: "El legendario Mazinger Z, el primer robot tripulado de la historia. Figura de alta calidad con acabados...",
        price: "$25",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775081856/catalog-products/mazinger_uuqf6f.png",
        images: [
            {id: "mazinger-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775081856/catalog-products/mazinger_uuqf6f.png"},
            {id: "mazinger-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775253220/catalog-products/mazinger_perfil_derecho_pgahzh.png"},
            {id: "mazinger-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775253362/catalog-products/mazinger_perfil_izquierdo_jeuknt.png"},
            {id: "mazinger-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775253221/catalog-products/mazinger_perfil_dorsal_puqsjw.png"}
        ],
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
        images: [
            {id: "naruto-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775082392/catalog-products/naruto_wqziv2.png"},
            {id: "naruto-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775252506/catalog-products/naruto_perfil_derecho_kswmpf.png"},
            {id: "naruto-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775239299/catalog-products/naruto_perfil_izquierdo_xrkvi9.png"},
            {id: "naruto-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775252506/catalog-products/naruto_perfil_dorsal_lhnzss.png"}
        ],
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
        images: [
            {id: "sasuke-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775082394/catalog-products/sasuke_kzqctu.png"},
            {id: "sasuke-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775253057/catalog-products/sasuke_perfil_derecho_hwhm88.png"},
            {id: "sasuke-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775253062/catalog-products/sasuke_perfil_izquierdo_c21do1.png"},
            {id: "sasuke-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775253058/catalog-products/sasuke_perfil_dorsal_pernvv.png"}
        ],
        size: "16 cm",
        colors:["Azul Marino", "Blanco", "Gris", "Morado"],
        material:"PLA" 
    },
    {
        id: 4,
        name: "Pennywise (It) ",
        category: "SERIES",
        price: "$30",
        description: "El payaso más temido en una versión amigurumi coleccionable, sosteniendo su clásico globo rojo. Esta edición incluye un escenario de alcantarilla detallado y oscuro. Una pieza imprescindible para fans del terror.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775093427/catalog-products/it_fdb4ay.png", 
        images: [
            {id: "it-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775093427/catalog-products/it_fdb4ay.png"},
            {id: "it-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775253687/catalog-products/it_perfil_derecho_qyfchl.png"},
            {id: "it-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775253763/catalog-products/it_perfil_izquierdo_w9zzlp.png"},
            {id: "it-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775253781/catalog-products/it_perfil_dorsal_v1g919.png"}
        ],
        size: "18 cm",
        colors: ["Blanco Crema", "Rojo", "Naranja", "Gris"],
        material: " PLA "
    },
    {
        id: 5, 
        name: "Levi Ackerman ",
        category: "ANIME",
        price: "$30",
        description: "El capitán del Cuerpo de Exploración en una detallada versión amigurumi. Cuenta con su uniforme completo, incluyendo la capa verde y su expresión seria. Esta edición incluye un escenario detallado y oscuro de Shiganshina. Imprescindible para fans de Attack on Titan.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775093433/catalog-products/levi_kryhtv.png", 
        images: [
            {id: "levi-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775093433/catalog-products/levi_kryhtv.png"},
            {id: "levi-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775254235/catalog-products/levi_perfil_derecho_hotm17.png"},
            {id: "levi-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775254234/catalog-products/levi_perfil__izquierdo_w3k4mu.png"},
            {id: "levi-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775254236/catalog-products/levi_perfil_dorsal_ilv2yl.png"}
        ],
        size: "17 cm",
        colors: ["Gris Oscuro", "Verde", "Blanco", "Marrón"],
        material: "Hilo de Algodón "
    }
         
]