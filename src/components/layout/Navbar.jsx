import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight, Home, Utensils, HeartPulse, ChevronDown, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Importación de Logos
import LogoCompleto from '../../assets/logo/logo-completo.svg';
import LogoSimple from '../../assets/logo/logo-simple.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    // Threshold reduced to 10px as requested
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/', icon: Home, type: 'link' },
    { name: 'Servicios', path: '/#servicios', icon: Sparkles, type: 'link' },
    {
      name: 'Ecosistema',
      type: 'dropdown',
      icon: Layers,
      items: [
        { name: 'Gastronomía', path: '/resto', icon: Utensils, desc: 'Gestión moderna' },
        { name: 'Medicina', path: '/med', icon: HeartPulse, desc: 'Salud digital' }
      ]
    },
  ];

  return (
    <>
      {/* --- DESKTOP FLOATING ISLAND --- */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -100, x: "-50%", opacity: 0, scale: 0.9 }}
            animate={{ y: 0, x: "-50%", opacity: 1, scale: 1 }}
            exit={{ y: -100, x: "-50%", opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 120, damping: 15, mass: 0.8 }}
            // Width fixed to 90% max 5xl, justify-between for spacious look
            className="fixed top-6 left-1/2 z-50 hidden md:flex items-center justify-between gap-4 p-2 rounded-full bg-[#0d0d0d]/90 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 w-[90%] max-w-5xl"
          >

            {/* LEFT: LOGO */}
            <Link
              to="/"
              className="flex items-center justify-center px-6 py-2 rounded-full hover:bg-white/[0.03] transition-colors group shrink-0"
            >
              {/* Logo increased to h-8 */}
              <img src={LogoCompleto} alt="Vantra Logo" className="h-8 w-auto opacity-100 transition-all duration-300 transform group-hover:scale-105" />
            </Link>

            {/* CENTER: LINKS */}
            <div className="flex items-center justify-center gap-2 flex-1">
              {navLinks.map((link) => {
                const isDropdown = link.type === 'dropdown';
                const isActive = location.pathname === link.path;
                const isHovered = hoveredTab === link.name;

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setHoveredTab(link.name)}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    {isDropdown ? (
                      // DROPDOWN TRIGGER
                      <button
                        className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${isHovered ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'}`}
                      >
                        {link.name}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isHovered ? 'rotate-180 text-white' : ''}`} />
                      </button>
                    ) : (
                      // STANDARD LINK
                      <Link
                        to={link.path}
                        className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive ? 'text-white bg-white/10 shadow-[inner_0_1px_0_rgba(255,255,255,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                      >
                        {link.name}
                      </Link>
                    )}

                    {/* DROPDOWN MENU - Properly Centered */}
                    {isDropdown && (
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-64 p-1.5 rounded-2xl bg-[#111] border border-white/10 shadow-2xl overflow-hidden z-20"
                          >
                            {/* Arrow Pointer */}
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#111] border-l border-t border-white/10 rotate-45" />

                            <div className="relative flex flex-col gap-1 bg-[#111] z-10">
                              {link.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                                >
                                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover/item:border-[#EDF246]/50 group-hover/item:bg-[#EDF246]/10 transition-colors">
                                    <item.icon size={18} className="text-gray-400 group-hover/item:text-[#EDF246] transition-colors" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-white leading-none mb-1">{item.name}</div>
                                    <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{item.desc}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT: ACTION */}
            <div className="pl-2 shrink-0">
              <Link
                to="/configurar"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#EDF246] text-black text-sm font-bold hover:brightness-110 hover:shadow-[0_0_20px_rgba(237,242,70,0.3)] transition-all duration-300"
              >
                Empezar Proyecto <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>


      {/* --- MOBILE NAV (Simple) --- */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="md:hidden fixed top-0 left-0 right-0 z-50 p-4"
          >
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
              <Link to="/" className="flex items-center justify-center">
                <img src={LogoSimple} alt="Vantra Logo" className="h-10 w-auto" />
              </Link>
              <button className="p-2 rounded-full hover:bg-white/10 text-white transition-colors">
                <Menu size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;