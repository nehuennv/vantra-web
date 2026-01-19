import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Utensils, HeartPulse, Layers, Sparkles, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import LogoCompleto from '../../assets/logo/logo-completo.svg';
import LogoSimple from '../../assets/logo/logo-simple.svg';

const Navbar = () => {
  // Removed 'scrolled' state dependency for rendering. 
  // We keep the state just in case we need conditional styling later, but basic rendering is permanent.
  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const location = useLocation();

  // Scroll detection (Optional now, but kept for potential future use)
  useEffect(() => {
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
        { name: 'Gastronomía', path: '/resto', icon: Utensils, desc: 'Gestión moderna y eficiente' },
        { name: 'Medicina', path: '/med', icon: HeartPulse, desc: 'Salud digital avanzada' }
      ]
    },
  ];

  return (
    <>
      {/* --- DESKTOP MEGA-ISLAND --- */}
      {/* 
          STATIC RENDER: No AnimatePresence, no Scroll Trigger.
          Always visible, fixed position.
      */}
      <motion.div
        className="fixed top-6 left-1/2 hidden md:flex flex-col w-full max-w-fit"
        style={{ zIndex: 9999, transform: 'translateX(-50%)' }} // Force Z and Center
        onMouseLeave={() => {
          setHoveredTab(null);
          setHoveredSubItem(null);
        }}
      >
        {/* UNIFIED CONTAINER */}
        <div
          className={`
              relative flex flex-col
              overflow-hidden
              rounded-2xl 
              transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
              ${scrolled
              ? 'bg-[#050505]/60 backdrop-blur-3xl border border-white/[0.08] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.05]'
              : 'bg-transparent border-transparent shadow-none backdrop-blur-none ring-0'
            }
          `}
          style={{ borderRadius: 24 }}
        >

          {/* --- CONTENT LAYER --- */}
          <div className="relative z-10">

            {/* --- CONTROL ROW (HEADER) --- */}
            <div className="flex items-center gap-6 px-6 py-3">

              {/* 1. LOGO */}
              <Link to="/" className="shrink-0 block hover:opacity-80 transition-opacity">
                <img src={LogoCompleto} alt="Vantra" className="h-9 w-auto" />
              </Link>

              {/* SEPARATOR */}
              <div className="w-px h-8 bg-white/[0.08]" />

              {/* 2. NAVEGACIÓN */}
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isDropdown = link.type === 'dropdown';
                  const isActive = location.pathname === link.path;
                  const isHovered = hoveredTab === link.name;
                  const isEcosistemaTrigger = hoveredTab === 'Ecosistema' && link.name === 'Ecosistema';

                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setHoveredTab(link.name)}
                    >
                      {isDropdown ? (
                        // DROPDOWN TRIGGER
                        <button
                          className={`
                                relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2
                                ${isHovered || isEcosistemaTrigger ? 'text-white' : 'text-gray-400 hover:text-white'}
                              `}
                        >
                          {link.name}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${isHovered || isEcosistemaTrigger ? 'rotate-180' : ''}`}
                          />

                          {/* Hover BG */}
                          {(isHovered || isEcosistemaTrigger) && (
                            <motion.div
                              layoutId="nav-bg"
                              className="absolute inset-0 bg-white/[0.08] rounded-xl -z-10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </button>
                      ) : (
                        // STANDARD LINK
                        <Link
                          to={link.path}
                          className={`
                                relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
                                ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                              `}
                        >
                          <span className="relative z-10">{link.name}</span>

                          {/* ACTIVE STATE (Chill & Subtle) */}
                          {isActive && (
                            <motion.div
                              layoutId="nav-active"
                              className="absolute inset-0 bg-white/[0.06] border border-white/[0.05] rounded-xl -z-10"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}

                          {/* Hover State */}
                          {!isActive && isHovered && (
                            <motion.div
                              layoutId="nav-bg"
                              className="absolute inset-0 bg-white/[0.03] rounded-xl -z-10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* SEPARATOR */}
              <div className="w-px h-8 bg-white/[0.08]" />

              {/* 3. CTA BUTTON */}
              <Link
                to="/configurar"
                className="
                      group relative flex items-center gap-3 
                      px-7 py-3 rounded-xl 
                      bg-[#EDF246] text-black 
                      font-bold text-sm tracking-wide
                      overflow-hidden transition-transform active:scale-95 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
                    "
              >
                <span className="relative z-10">Empezar Proyecto</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
              </Link>

            </div>

            {/* --- EXPANSION ROW (DRAWER) --- */}
            <AnimatePresence>
              {hoveredTab === 'Ecosistema' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="w-full border-t border-white/[0.05] bg-black/20 overflow-hidden"
                >
                  <div
                    className="flex items-center justify-center gap-2 p-3"
                    onMouseLeave={() => setHoveredSubItem(null)}
                  >
                    {navLinks.find(l => l.name === 'Ecosistema')?.items.map((item) => {
                      const isHovered = hoveredSubItem === item.name;

                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          onMouseEnter={() => setHoveredSubItem(item.name)}
                          className="relative flex-1 flex items-center gap-4 p-4 rounded-xl transition-colors min-w-[240px] group/item"
                        >
                          {/* FLUID HOVER BACKGROUND */}
                          {isHovered && (
                            <motion.div
                              layoutId="submenu-hover-bg"
                              className="absolute inset-0 bg-white/[0.08] rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}

                          {/* ICON CONTAINER */}
                          <div className={`
                                      relative z-10 p-3 rounded-xl 
                                      bg-black/60 border border-white/[0.1] 
                                      group-hover/item:border-[#EDF246]/50 group-hover/item:text-[#EDF246] 
                                      text-gray-400 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_-3px_rgba(237,242,70,0.3)]
                                    `}>
                            <item.icon size={22} strokeWidth={1.5} />
                          </div>

                          {/* TEXT CONTENT */}
                          <div className="relative z-10 flex flex-col items-start translate-x-0 group-hover/item:translate-x-1 transition-transform duration-300">
                            <span className="text-sm font-bold text-white group-hover/item:text-[#EDF246] transition-colors duration-300">
                              {item.name}
                            </span>
                            <span className="text-xs text-gray-400 font-medium group-hover/item:text-gray-200 transition-colors duration-300">
                              {item.desc}
                            </span>
                          </div>

                          {/* ARROW INDICATOR */}
                          <motion.div
                            className="absolute right-4 text-[#EDF246] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                            initial={false}
                          >
                            <ArrowRight size={14} />
                          </motion.div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.div>


      {/* --- MOBILE NAV --- */}
      {/* 
          Keep mobile nav always visible (standard pattern) instead of scroll trigger.
          The user said "sin nada" about animations.
      */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[9999] p-4" style={{ zIndex: 9999 }}>
        <div
          className="flex items-center justify-between px-5 py-3 rounded-2xl bg-[#0A0A0B]/80 backdrop-blur-xl border border-white/10 shadow-lg"
        >
          <Link to="/">
            <img src={LogoSimple} alt="Logo" className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-white bg-white/10 rounded-full active:scale-90 transition-transform"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE FULL SCREEN OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-black/90 flex flex-col justify-center items-center p-6"
            style={{ zIndex: 99999 }} // Maximum z-index
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navLinks.map((link) => (
                <div key={link.name} className="text-center w-full">
                  {link.type === 'dropdown' ? (
                    <div className="space-y-4">
                      <div className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold pb-2 border-b border-white/10 mb-4">
                        {link.name}
                      </div>
                      {link.items.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-2xl font-display text-white hover:text-[#EDF246] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl font-display font-bold text-white hover:text-[#EDF246] transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="w-full h-px bg-white/10 my-4" />

              <Link
                to="/configurar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-[#EDF246] text-black text-center font-bold text-lg rounded-xl uppercase tracking-widest shadow-[0_0_30px_rgba(237,242,70,0.3)]"
              >
                Iniciar Proyecto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;