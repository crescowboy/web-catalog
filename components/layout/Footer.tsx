"use client";
import Link from 'next/link';
import { Bird, Camera, SquarePlay,MessageSquare } from "lucide-react";

const footerLinks=[  
    {
        title: 'Enlaces',
        links: [  
            { name: 'Inicio', href: '/' },
            { name: 'Catálogo', href: '/catalog'},
            { name: 'Contacto', href: '#' },
            { name: 'Blog', href: '#' },
        ],
    },
    {
        title: 'Categorías',
        links: [
            { name: 'Anime', href: '#' },
            { name: 'Peliculas', href: '#' },
            { name: 'Series', href: '#' },
        ],
    },
]

const socialLinks=[
    {icon: Bird, href:"#"},
    {icon: Camera , href:"#"},
    {icon: SquarePlay, href:"#"},
    {icon:MessageSquare, href:"#"},
]

const legalLinks = [
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' },
    { name: 'Política de cookies', href: '#' },
]



export default function Footer(){
    const currentYear =new Date().getFullYear();

    return(
        <footer className ="bg-[#030712] text-gray-400 px-6 sm:px-10 md:px-16 lg:px-24 py-16 border-t border-gray-900">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-16">

                    <div className="col-span-2 md:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold text-amber-400">Cowboy Studio</h2>
                        <p className="text-gray-500 max-w-sm leading-relaxed">
                            Figuras de tus personajes favoritos. Hecho con precisión para coleccionistas exigentes.
                        </p>
                    </div>

                    {footerLinks.map((section)=>(
                        <div key={section.title} className="space-y-4">
                            <h3 className="font-semibold text-white text-base">{section.title}</h3>
                            <ul className="space-y-2.5">
                                {section.links.map((link)=>(
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-amber-400 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-4 col-span-2 md:col-span-1">
                        <h3 className="font-semibold text-white text-base">Síguenos</h3>
                        <div className="flex gap-4" >
                            {socialLinks.map((social,index)=>(
                                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-900 rounded-full hover:bg-amber-400 group transition-colors">
                                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#030712]" strokeWidth={1.5}/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-10 mt-6 border-t border-gray-900 text-xs text-gray-600 flex flex-col sm:flex-row justify-between gap-4">
                    <p>©{currentYear} Cowboy Studio. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        {legalLinks.map((link)=>(
                            <Link key={link.name}href={link.href} className="hover:text-amber-400 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}