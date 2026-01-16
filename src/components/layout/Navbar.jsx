import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll para aumentar el efecto vidrio
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Resto', path: '/resto' },
    { name: 'Médicos', path: '/medicos' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
          ? 'bg-vantra-bg/80 backdrop-blur-xl border-white/5 py-4'
          : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-1">
          VANTRA
          <span className="w-2 h-2 bg-vantra-neon rounded-full animate-pulse" />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-vantra-neon ${location.pathname === link.path ? 'text-white' : 'text-gray-400'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <a href="#contacto" className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm hover:bg-vantra-neon hover:text-black hover:border-vantra-neon transition-all duration-300">
            Agendar Demo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* MOBILE MENU (Icono simple por ahora) */}
        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;