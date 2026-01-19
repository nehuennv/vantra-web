import React, { useRef, useState, useEffect } from 'react';
import {
  ArrowRight,
  Terminal,
  ShieldCheck,
  Globe,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence, // Asegurarnos de tener esto
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';

// --- COMPONENTE: STATUS BAR ITEM (Limpio y Premium) ---
const StatusBarItem = ({ icon: Icon, value, label, color, active }) => {
  return (
    <div className="relative flex items-center gap-5 px-8 py-5 cursor-default group/item">
      {/* Icono minimalista */}
      <div className={`text-gray-400 transition-colors duration-200 ${active ? color : `group-hover/item:${color}`}`}>
        <Icon size={20} strokeWidth={1.5} />
      </div>

      <div className="flex flex-col">
        <div className="text-2xl font-display font-bold leading-none mb-1 text-white">
          {value}
        </div>
        <div className={`text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 transition-colors duration-200 ${active ? 'text-[#EDF246]' : 'group-hover/item:text-[#EDF246]'}`}>
          {label}
        </div>
      </div>

      {/* Separador Vertical Sutil */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10 group-last:hidden" />

      {/* Brillo de fondo muy sutil - Solo al hover del item o si está activo */}
      <div className={`absolute inset-0 bg-white/[0.02] transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'}`} />
    </div>
  );
};

// --- HERO PRINCIPAL ---

const Hero = () => {
  const containerRef = useRef(null);
  const [isMultiplicaActive, setIsMultiplicaActive] = useState(false);

  // Spotlight y background removidos para usar los globales (App.jsx)
  // Variants para entrada escalonada premium
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] min-h-[700px] flex flex-col justify-center pt-20 md:pt-28 overflow-hidden bg-transparent group"
    >
      {/* --- LAYER 0 y 1 REMOVIDOS para consistencia global --- */}

      {/* --- CONTENIDO --- */}
      <motion.div
        className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* 2. TÍTULO PRINCIPAL (Multiplica Italic + Cursor Inclinado) */}
        <motion.div
          className="max-w-6xl text-center relative mb-10"
          variants={itemVariants}
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tight text-white drop-shadow-2xl">
            <span className="block text-white font-medium">Tecnología que</span>

            {/* Bloque interactivo completo */}
            <div
              className="relative inline-flex items-center justify-center my-1 cursor-pointer"
              onMouseEnter={() => setIsMultiplicaActive(true)}
              onMouseLeave={() => setIsMultiplicaActive(false)}
            >

              {/* Corchete Izquierdo */}
              <motion.span
                className={`text-[#EDF246] text-4xl md:text-7xl font-light absolute -left-6 md:-left-12 top-2 transition-all duration-300 ${isMultiplicaActive ? 'opacity-100 -translate-x-4 -rotate-12 scale-110' : 'opacity-30'}`}
              >
                {`{`}
              </motion.span>

              {/* TEXTO ITALIC */}
              <span className={`relative z-10 font-bold lowercase italic text-transparent bg-clip-text bg-gradient-to-b from-white via-[#EDF246] to-[#EDF246] pr-5 md:pr-8 transition-all duration-300 ${isMultiplicaActive ? 'brightness-125 drop-shadow-[0_0_15px_rgba(237,242,70,0.5)]' : ''}`}>
                multiplica
              </span>

              {/* CURSOR INCLINADO (Italic Cursor) */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "steps(2)" }}
                className="absolute right-0 top-4 md:top-6 h-10 md:h-20 w-[2px] md:w-[3px] bg-white -skew-x-12 origin-bottom"
              />

              {/* Corchete Derecho */}
              <motion.span
                className={`text-[#EDF246] text-4xl md:text-7xl font-light absolute -right-6 md:-right-12 bottom-2 transition-all duration-300 ${isMultiplicaActive ? 'opacity-100 translate-x-4 rotate-12 scale-110' : 'opacity-30'}`}
              >
                {`}`}
              </motion.span>
            </div>

            <span className="block text-white font-medium">tu crecimiento.</span>
          </h1>
        </motion.div>

        {/* 3. DESCRIPCIÓN & CTA */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 font-normal max-w-2xl text-center leading-relaxed mb-12"
        >
          Unimos <span className="text-white font-medium">desarrollo web</span>, <span className="text-white font-medium">automatización con IA</span> y <span className="text-white font-medium">estrategia digital</span> en un ecosistema integrado.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 mb-24"
        >
          <Link
            to="/configurar"
            onMouseEnter={() => setIsMultiplicaActive(true)}
            onMouseLeave={() => setIsMultiplicaActive(false)}
            className="group relative px-9 py-4 bg-[#EDF246] text-[#050507] font-bold text-sm uppercase tracking-widest rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(237,242,70,0.3)]"
          >
            <div className="relative z-10 flex items-center gap-3">
              Configurar mi proyecto <ArrowRight size={18} />
            </div>
            {/* Brillo blanco al pasar */}
            <div className="absolute inset-0 bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </Link>

          <Link
            to="/servicios"
            className="px-9 py-4 rounded-lg border border-white/10 bg-white/[0.02] text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center backdrop-blur-md shadow-[0_0_0_transparent] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            Conocer servicios
          </Link>
        </motion.div>

      </motion.div>

      {/* --- 4. STATUS BAR (Datos Reales) --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 30 }}
        className="absolute bottom-12 left-0 w-full flex justify-center px-6 z-20"
      >
        <div className="flex flex-wrap justify-center items-center bg-white/[0.03] backdrop-blur-3xl border border-white/10 ring-1 ring-white/5 rounded-2xl shadow-2xl overflow-hidden">

          <StatusBarItem
            icon={ShieldCheck}
            value="100%"
            label="Transparencia"
            color="text-emerald-400"
            active={isMultiplicaActive}
          />

          <StatusBarItem
            icon={Globe}
            value="15+"
            label="Alianzas Activas"
            color="text-blue-400"
            active={isMultiplicaActive}
          />

          <StatusBarItem
            icon={Zap}
            value="8x"
            label="ROAS Promedio"
            color="text-[#EDF246]"
            active={isMultiplicaActive}
          />

        </div>
      </motion.div>

    </section>
  );
};

export default Hero;