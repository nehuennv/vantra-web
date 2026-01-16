import React from 'react';
import { ArrowRight, Globe, TrendingUp, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] bg-[#121211] text-white flex flex-col pt-20 border-b border-white/10 overflow-hidden selection:bg-[#EDF246] selection:text-[#121211]">

      {/* Background Micro-Grid (Premium Texture) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

      {/* Ambient Glow (Apple-like subtle spotlight) */}
      <div className="absolute top-0 center w-[80vw] h-[50vh] bg-white/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 mix-blend-overlay" />

      {/* Main Content Area */}
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center relative z-10 sm:py-0">

        {/* Floating Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {["Integración total", "ROI visible", "IA aplicada"].map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider text-[#EDF246] backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-[#EDF246] rounded-full shadow-[0_0_8px_#EDF246]" />
              {tag}
            </span>
          ))}
        </motion.div>

        {/* H1 - ULTRA PREMIUM TYPOGRAPHY */}
        <div className="max-w-7xl relative">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] leading-[0.85] tracking-tight uppercase text-white">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Tecnología que
            </motion.div>

            {/* THE "APPLE" OUTLINE WORD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative inline-block my-2"
            >
              {/* The Fill (Subtle Glass) */}
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
                MULTIPLICA
              </span>

              {/* The Reflection/Glow Behind */}
              <span
                className="absolute inset-0 text-[#EDF246]/10 blur-lg select-none pointer-events-none"
                style={{ WebkitTextStroke: '0px transparent' }}
              >
                MULTIPLICA
              </span>

            </motion.div>

            <br className="hidden md:block" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              tu <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EDF246] via-[#F5F988] to-[#EDF246] drop-shadow-[0_0_25px_rgba(237,242,70,0.2)]">
                crecimiento.
              </span>
            </motion.div>

          </h1>
        </div>

        {/* Subtitle & CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-white/5 pt-10"
        >
          <div className="lg:col-span-6">
            <p className="font-sans text-lg md:text-xl text-gray-400 leading-relaxed font-medium max-w-xl">
              Unimos <span className="text-white">desarrollo web</span>, <span className="text-white">IA automatizada</span> y <span className="text-white">estrategia digital</span> en un ecosistema integrado.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-5">
            <Link
              to="/configurar"
              className="group relative px-10 py-5 bg-[#EDF246] text-[#121211] font-display font-medium text-lg uppercase tracking-wider rounded-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(237,242,70,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Configurar Proyecto <ArrowRight size={20} />
              </span>
              <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
            </Link>

            <Link
              to="/servicios"
              className="group px-10 py-5 bg-white/5 border border-white/10 text-white font-display font-medium text-lg uppercase tracking-wider rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              Ver Servicios
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Footer Metrics (Glassmorphism) */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="h-auto md:h-24 border-t border-white/10 bg-[#121211]/60 backdrop-blur-xl"
      >
        <div className="container mx-auto h-full grid grid-cols-3 divide-x divide-white/5">
          <div className="p-4 flex flex-col justify-center items-center md:items-start group hover:bg-white/5 transition-all">
            <h3 className="font-display text-3xl text-white group-hover:text-[#EDF246] transition-colors">100%</h3>
            <p className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Transparencia</p>
          </div>
          <div className="p-4 flex flex-col justify-center items-center md:items-start group hover:bg-white/5 transition-all">
            <h3 className="font-display text-3xl text-white group-hover:text-[#EDF246] transition-colors">15+</h3>
            <p className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Alianzas Activas</p>
          </div>
          <div className="p-4 flex flex-col justify-center items-center md:items-start group hover:bg-white/5 transition-all">
            <h3 className="font-display text-3xl text-white group-hover:text-[#EDF246] transition-colors">8x</h3>
            <p className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">ROAS Promedio</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;