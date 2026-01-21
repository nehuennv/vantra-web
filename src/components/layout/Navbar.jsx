import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Utensils, HeartPulse, Layers, Sparkles, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import LogoCompleto from '../../assets/logo/logo-completo.svg';

const Navbar = () => {
  // Removed 'scrolled' state dependency for rendering? No, we need it.
  const [scrolled, setScrolled] = useState(false);

  const [hoveredTab, setHoveredTab] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const location = useLocation();

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock Body Scroll when Mobile Menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      {/* --- MOBILE NAVBAR (Visible < md) --- */}
      <motion.div
        className="fixed top-6 left-0 right-0 z-[9999] flex md:hidden justify-between items-center px-6 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="pointer-events-auto px-5 py-2.5 rounded-full bg-[#0A0A12]/50 backdrop-blur-xl border border-white/[0.08] shadow-lg active:scale-95 transition-transform flex items-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img src={LogoCompleto} alt="Vantra" className="h-7 w-auto drop-shadow-lg" />
        </Link>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="pointer-events-auto p-3 rounded-full bg-[#0A0A12]/50 backdrop-blur-xl border border-white/[0.08] shadow-lg text-white active:scale-95 transition-transform"
        >
          <Menu size={20} />
        </button>
      </motion.div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-3xl flex flex-col"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#EDF246]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#6666D9]/10 blur-[80px] rounded-full pointer-events-none" />

            {/* HEADER */}
            <div className="flex justify-between items-center px-6 pt-6 pb-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src={LogoCompleto} alt="Vantra" className="h-8 w-auto" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white active:scale-95 transition-transform"
              >
                <X size={20} />
              </button>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <div key={link.name}>
                    {link.type === 'dropdown' ? (
                      <div className="flex flex-col gap-2">
                        <div className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2 pl-2">
                          {link.name}
                        </div>
                        {link.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] active:bg-white/[0.08] transition-colors"
                          >
                            <div className="p-2.5 rounded-full bg-[#EDF246]/10 text-[#EDF246] group-active:scale-110 transition-transform">
                              <subItem.icon size={20} />
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-lg text-white">{subItem.name}</div>
                              <div className="text-sm text-gray-400">{subItem.desc}</div>
                            </div>
                            <ArrowRight size={16} className="text-white/20 -rotate-45" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-4 rounded-2xl text-2xl font-bold text-white hover:text-[#EDF246] transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          {/* <link.icon size={24} className="text-gray-500" /> */}
                          {link.name}
                        </span>
                        <ArrowRight size={20} className="text-white/20 -rotate-45" />
                      </Link>
                    )}
                    {index !== navLinks.length - 1 && <div className="h-px bg-white/[0.05] my-2" />}
                  </div>
                ))}
              </nav>
            </div>

            {/* FOOTER CTA */}
            <div className="p-6 border-t border-white/[0.05]">
              <Link
                to="/configurar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#EDF246] text-black font-bold text-lg active:scale-[0.98] transition-transform"
              >
                Empezar Proyecto
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- DESKTOP MEGA-ISLAND --- */}
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
              will-change-transform transform-gpu
              ${scrolled
              // OPTIMIZATION: Reduced blur 3xl -> md. Increased opacity 60 -> 85.
              ? 'bg-[#0A0A12]/80 backdrop-blur-md border border-white/[0.08] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.05]'
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
                              // OPTIMIZATION: Simple border/bg, cheap to render
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
                          {/* Hover Background - FLUID */}
                          {isHovered && (
                            <motion.div
                              layoutId="submenu-hover-bg"
                              className="absolute inset-0 bg-white/[0.05] rounded-xl -z-10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}

                          {/* Icon Circle */}
                          <div className={`
                                p-3 rounded-full border transition-all duration-300
                                ${isHovered ? 'bg-[#EDF246] border-[#EDF246] text-black scale-110 shadow-[0_0_15px_rgba(237,242,70,0.3)]' : 'bg-white/5 border-white/10 text-white'}
                              `}>
                            <item.icon size={20} />
                          </div>

                          <div>
                            <div className={`font-bold text-sm transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                          </div>

                          {/* Arrow Hint */}
                          <ArrowRight size={14} className={`ml-auto text-white/50 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
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
    </>
  );
};

export default Navbar;