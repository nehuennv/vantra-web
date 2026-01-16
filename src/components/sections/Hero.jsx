import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 container mx-auto flex flex-col items-center text-center z-10">
      
      {/* Badge Superior */}
      <div className="animate-fade-in opacity-0 [animation-delay:0.2s] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vantra-neon/10 border border-vantra-neon/20 text-xs text-vantra-neon font-medium mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vantra-neon opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-vantra-neon"></span>
        </span>
        Transparencia total, resultados medibles
      </div>

      {/* Título Principal - Usando el copy de Vantra */}
      <h1 className="animate-fade-in opacity-0 [animation-delay:0.4s] text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1] text-white">
        Software que impulsa <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-vantra-neon to-white">
          negocios reales.
        </span>
      </h1>

      {/* Subtítulo */}
      <p className="animate-fade-in opacity-0 [animation-delay:0.6s] text-lg md:text-xl text-gray-400 max-w-2xl mb-10 mx-auto">
        Unimos desarrollo web, automatización con IA y estrategia digital en un ecosistema integrado. 
        Tecnología que multiplica tu crecimiento.
      </p>

      {/* CTAs */}
      <div className="animate-fade-in opacity-0 [animation-delay:0.8s] flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <Link 
          to="/configurar" 
          className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-vantra-neon text-black font-bold hover:bg-vantra-neon/90 transition-all shadow-[0_0_20px_rgba(237,242,70,0.3)] hover:scale-105"
        >
          Configurar mi proyecto
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <Link 
          to="/servicios" 
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
        >
          Conocer servicios
        </Link>
      </div>

      {/* Stats Bar (Integrada en el Hero para impacto inmediato) */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20 border-t border-white/10 pt-10 animate-fade-in opacity-0 [animation-delay:1s]">
        <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">100%</h3>
            <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">Transparencia</p>
        </div>
        <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">15+</h3>
            <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">Alianzas Activas</p>
        </div>
        <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl md:text-4xl font-bold text-white">8x</h3>
            <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">ROAS Promedio</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;