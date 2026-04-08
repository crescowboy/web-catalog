import { Product } from '@/types/product'

export const featuredProducts : Product[] = [
    {
        id: 1,
        name: "Mazinger Z",
        category: "ANIME",
        description: "Figura coleccionable de alta gama del legendario Mazinger Z. Diseñada con precisión digital y acabados metalizados que simulan el 'Chogokin'. Una pieza de ingeniería 3D esencial para nostálgicos y coleccionistas.",
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
        material:"PLA" , 
        subCategory:"Mazinger Z",
        isFeatured: false
        
    },
    {
        id: 2,
        name: "Naruto Uzumaki",
        category: "ANIME",
        description: "Figura dinámica de Naruto Uzumaki en pose de batalla. Esculpido detallado que captura la fluidez de su movimiento y expresión determinada. Fabricada en material rígido de alta calidad con pintura artesanal.",
        price: "$20",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775604721/catalog-products/naruto_perfil_frontal_sqejdt.png", 
        images: [
            {id: "naruto-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604721/catalog-products/naruto_perfil_frontal_sqejdt.png"}, 
            {id: "naruto-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604720/catalog-products/naruto_perfil_derecho_ics6uq.png"},
            {id: "naruto-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604720/catalog-products/naruto_perfil_izquierdo_ujlomc.png"},
            {id: "naruto-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604721/catalog-products/naruto_perfil_dorsal_g61dud.png"}
        ],
        size: "16 cm",
        colors: ["Naranja", "Negro", "Amarillo", "Azul"],
        material:"PLA" , 
        subCategory:"Naruto",
        isFeatured: false
          
    },
    {
        id: 3,
        name: "Sasuke Uchiha",
        category: "ANIME",
        description: "Réplica premium esculpida de Sasuke Uchiha. Destaca por el detalle realista en su Sharingan y el acabado nítido de su uniforme. Estructura sólida y base de exhibición diseñada para la estabilidad de la pose.",
        price: "$20",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775604838/catalog-products/sasuke_perfil_frontal_jyvtf8.png", 
        images: [
            {id: "sasuke-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604838/catalog-products/sasuke_perfil_frontal_jyvtf8.png"},
            {id: "sasuke-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604837/catalog-products/sasuke_perfil_derecho_svrotj.png"},
            {id: "sasuke-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604839/catalog-products/sasuke_perfil_izquierdo_k5ftiw.png"},
            {id: "sasuke-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604837/catalog-products/sasuke_perfil_dorsal_wqt1rh.png"}
        ],
        size: "16 cm",
        colors:["Azul Marino", "Blanco", "Gris", "Morado"],
        material:"PLA" , 
        subCategory:"Naruto",
        isFeatured: true
    },
    {
        id: 4,
        name: "Pennywise (It)",
        category: "SERIES",
        price: "$30",
        description: "Figura de colección del payaso Pennywise con esculpido de alta definición. Incluye accesorios rígidos como el icónico globo rojo y base temática detallada. Pintura premium que resalta su expresión siniestra.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775604959/catalog-products/it_perfil_frontal_z2fj0g.png", 
        images: [
            {id: "it-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604959/catalog-products/it_perfil_frontal_z2fj0g.png"},
            {id: "it-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604956/catalog-products/it_perfil_derecho_fvubeo.png"},
            {id: "it-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604967/catalog-products/it_perfil_izquierdo_kwwrrt.png"},
            {id: "it-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775604957/catalog-products/it_perfil_dorsal_rrhil9.png"}
        ],
        size: "18 cm",
        colors: ["Blanco Crema", "Rojo", "Naranja", "Gris"],
        material: "PLA", 
        subCategory:"it",
        isFeatured: false
    },
    {
        id: 5, 
        name: "Levi Ackerman",
        category: "ANIME",
        price: "$30",
        description: "Estatua detallada del Capitán Levi Ackerman. Capta con precisión el uniforme del Cuerpo de Exploración y la capa verde con tecnología de esculpido digital. Acabado mate premium y expresión seria rígida.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775605060/catalog-products/levi_perfil_frontal_ia2fh4.png", 
        images: [
            {id: "levi-1", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775605060/catalog-products/levi_perfil_frontal_ia2fh4.png"},
            {id: "levi-2", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775605059/catalog-products/levi_perfil_derecho_br9har.png"},
            {id: "levi-3", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775605064/catalog-products/levi_perfil_izquierdo_st3bup.png"},
            {id: "levi-4", url:"https://res.cloudinary.com/dowfnegc1/image/upload/v1775605059/catalog-products/levi_perfil_dorsal_q6iugn.png"}
        ],
        size: "17 cm",
        colors: ["Gris Oscuro", "Verde", "Blanco", "Marrón"],
        material: "PLA", 
        subCategory:"Shingeki no Kyojin",
        isFeatured: true
    },
    {
        id: 6,
        name: "Gaara",
        category: "ANIME",
        price: "$35",
        description: "Figura premium esculpida de Gaara del Desierto. Incluye la calabaza de arena con textura rugosa simulada y esculpido facial de alta fidelidad. Estructura compacta y sólida para coleccionistas exigentes.",
        image: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775605140/catalog-products/gaara_perfil_frontal_ehprov.png", 
        images: [
            {id: "gaara-1", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775605140/catalog-products/gaara_perfil_frontal_ehprov.png"},
            {id: "gaara-2", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775605137/catalog-products/gaara_perfil_derecho_b7tw0e.png"},
            {id: "gaara-3", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775605144/catalog-products/gaara_perfil_izquierdo_rxjzw1.png"},
            {id: "gaara-4", url: "https://res.cloudinary.com/dowfnegc1/image/upload/v1775605138/catalog-products/gaara_perfil_dorsal_uukqoj.png"}
        ],
        size: "18 cm",
        colors: ["Rojo Granate", "Arena", "Marrón", "Negro"],
        material: "PLA", 
        subCategory: "Naruto",
        isFeatured: false
    }
]