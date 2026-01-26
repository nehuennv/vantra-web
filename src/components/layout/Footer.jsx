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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[120px] rounded-full pointer-events-none opacity-50"
                style={{ backgroundColor: 'var(--product-primary)', opacity: 0.1 }}
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* 1. TOP CTA SECTION */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20 border-b border-white/10 pb-20">
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="font-display font-normal text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            ¿Listo para escalar <br />
                            <span style={{ color: 'var(--product-primary)' }}>tu negocio?</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            Transformamos empresas con tecnología, diseño y estrategia. Agendá una reunión hoy mismo.
                        </p>
                    </div>

                    <Link
                        to="/configurar"
                        className="group relative px-10 py-5 text-[color:var(--product-on-primary,#18181b)] font-medium text-lg rounded-xl overflow-hidden transition-all hover:scale-105 shrink-0"
                        style={{
                            backgroundColor: 'var(--product-primary)',
                            boxShadow: '0 0 30px var(--product-primary-opacity-30, rgba(237,242,70,0.3))' // Fallback handled by CSS var if correctly set, else default
                        }}
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
                            <a href="#" className="p-3 rounded-full bg-white/5 text-white hover:text-black transition-all duration-300"
                                style={{ ':hover': { backgroundColor: 'var(--product-primary)' } }}
                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--product-primary)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                            >
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 text-white hover:text-black transition-all duration-300"
                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--product-primary)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                            >
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:vantradigital@gmail.com" className="p-3 rounded-full bg-white/5 text-white hover:text-black transition-all duration-300"
                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--product-primary)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
                            >
                                <Send size={20} />
                            </a>
                        </div>
                    </div>

                    {/* LINKS COLUMN 1 (Span 2) */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-white font-normal text-lg mb-6">Explorar</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-400 hover:text-[color:var(--product-primary)] transition-colors">Inicio</Link></li>
                            <li><Link to="/servicios" className="text-gray-400 hover:text-[color:var(--product-primary)] transition-colors">Servicios</Link></li>
                            <li><a href="#ecosystem" className="text-gray-400 hover:text-[color:var(--product-primary)] transition-colors">Ecosistema</a></li>
                            <li><Link to="/configurar" className="text-gray-400 hover:text-[color:var(--product-primary)] transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* LINKS COLUMN 2 (Span 2) */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-normal text-lg mb-6">Productos</h4>
                        <ul className="space-y-4">
                            <li><Link to="/resto" className="text-gray-400 hover:text-[color:var(--product-primary)] transition-colors">Vantra Resto</Link></li>
                            <li><Link to="/med" className="text-gray-400 hover:text-[color:var(--product-primary)] transition-colors">Vantra Med</Link></li>
                        </ul>
                    </div>

                    {/* LINKS COLUMN 3 (Span 2) */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-normal text-lg mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link to="/privacidad" className="text-gray-400 hover:text-[color:var(--product-primary)] transition-colors">Privacidad</Link></li>
                            <li><Link to="/terminos" className="text-gray-400 hover:text-[color:var(--product-primary)] transition-colors">Términos</Link></li>
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
