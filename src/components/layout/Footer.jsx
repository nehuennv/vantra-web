import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoCompleto from '../../assets/logo/logo-completo.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black/20 backdrop-blur-3xl text-white overflow-hidden border-t border-white/5 pt-20">

            {/* --- DECORATIVE GLOW --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EDF246]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* 1. TOP CTA SECTION */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20 border-b border-white/10 pb-20">
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="font-display font-normal text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            ¿Listo para escalar <br />
                            <span className="text-[#EDF246]">tu negocio?</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            Transformamos empresas con tecnología, diseño y estrategia. Agendá una reunión hoy mismo.
                        </p>
                    </div>

                    <Link
                        to="/configurar"
                        className="group relative px-10 py-5 bg-[#EDF246] text-[#050507] font-medium text-lg rounded-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(237,242,70,0.3)] shrink-0"
                    >
                        <div className="relative z-10 flex items-center gap-3">
                            Comenzar Ahora <ArrowUpRight size={24} />
                        </div>
                        <div className="absolute inset-0 bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    </Link>
                </div>

                {/* 2. MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">

                    {/* BRANDING (Span 5 cols) */}
                    <div className="md:col-span-5 flex flex-col items-start">
                        <Link to="/" className="mb-8 block">
                            <img src={LogoCompleto} alt="Vantra" className="h-10 w-auto" />
                        </Link>
                        <p className="text-gray-500 mb-8 max-w-sm leading-relaxed font-light">
                            Agencia de desarrollo web y marketing digital. Creamos productos digitales que marcan la diferencia.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-3 rounded-full bg-white/5 text-white hover:bg-[#EDF246] hover:text-black transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 text-white hover:bg-[#EDF246] hover:text-black transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:vantradigital@gmail.com" className="p-3 rounded-full bg-white/5 text-white hover:bg-[#EDF246] hover:text-black transition-all duration-300">
                                <Send size={20} />
                            </a>
                        </div>
                    </div>

                    {/* LINKS COLUMN 1 (Span 2) */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-white font-normal text-lg mb-6">Explorar</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-400 hover:text-[#EDF246] transition-colors">Inicio</Link></li>
                            <li><Link to="/servicios" className="text-gray-400 hover:text-[#EDF246] transition-colors">Servicios</Link></li>
                            <li><a href="#ecosystem" className="text-gray-400 hover:text-[#EDF246] transition-colors">Ecosistema</a></li>
                            <li><Link to="/configurar" className="text-gray-400 hover:text-[#EDF246] transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* LINKS COLUMN 2 (Span 2) */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-normal text-lg mb-6">Productos</h4>
                        <ul className="space-y-4">
                            <li><Link to="/resto" className="text-gray-400 hover:text-[#EDF246] transition-colors">Vantra Resto</Link></li>
                            <li><Link to="/med" className="text-gray-400 hover:text-[#EDF246] transition-colors">Vantra Med</Link></li>
                        </ul>
                    </div>

                    {/* LINKS COLUMN 3 (Span 2) */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-normal text-lg mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link to="/privacidad" className="text-gray-400 hover:text-[#EDF246] transition-colors">Privacidad</Link></li>
                            <li><Link to="/terminos" className="text-gray-400 hover:text-[#EDF246] transition-colors">Términos</Link></li>
                        </ul>
                    </div>
                </div>

                {/* 3. BOTTOM BAR */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-600">
                        &copy; {currentYear} Vantra Inc. Todos los derechos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
