import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] text-white flex flex-col pt-32 overflow-hidden selection:bg-[#EDF246] selection:text-black">

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">

        {/* Floating Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start"
        >
          {["Integración total", "ROI visible", "IA aplicada"].map((tag, i) => (
            <div key={i} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center gap-2 group hover:border-white/10 transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EDF246] shadow-[0_0_10px_#EDF246] group-hover:scale-125 transition-transform" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-300 group-hover:text-white transition-colors">{tag}</span>
            </div>
          ))}
        </motion.div>

        {/* H1 */}
        <div className="max-w-[90rem]">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tight font-medium text-white mix-blend-normal">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="block text-gray-100"
            >
              Tecnología que
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EDF246] via-[#A0E9FF] to-[#EDF246] bg-[length:200%_auto] animate-gradient-x py-2 md:py-4"
            >
              multiplica
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="block text-gray-400"
            >
              tu crecimiento.
            </motion.span>
          </h1>
        </div>

        {/* Bajada & CTAs */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/5 pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              Unimos <strong className="text-white font-medium">desarrollo web</strong>, <strong className="text-white font-medium">automatización con IA</strong> y <strong className="text-white font-medium">estrategia digital</strong> en un ecosistema integrado. Transparencia total, resultados medibles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="lg:col-span-7 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            {/* Primary CTA */}
            <Link
              to="/configurar"
              className="group relative px-8 py-4 bg-[#EDF246] text-[#050507] rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Configurar mi proyecto <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white/40 blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/servicios"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white font-medium text-sm uppercase tracking-widest backdrop-blur-sm transition-all hover:border-white/20"
            >
              Conocer servicios
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Footer Metrics */}


    </section>
  );
};

export default Hero;