import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, HeartPulse, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ecosystem = () => {
    const [activeSide, setActiveSide] = useState(null);

    return (
        <section className="relative w-full py-20 md:py-0 md:h-[100vh] flex flex-col md:flex-row" id="ecosystem">

            {/* --- HEADER FLOTANTE (CONTEXTO) --- */}
            <div className="absolute top-8 md:top-12 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <div className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                    <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                        Ecosistema Digital Vantra
                    </span>
                </div>
            </div>

            {/* --- LADO IZQUIERDO: RESTO (Naranja) --- */}
            <SplitPanel
                id="resto"
                title="Resto OS"
                tag="Sistema Gastronómico"
                description="El cerebro digital para tu restaurante. Centraliza reservas, cocina, delivery y analíticas en una sola plataforma en tiempo real."
                color="#F97316"
                glowColor="rgba(249, 115, 22, 0.4)"
                icon={Utensils}
                isActive={activeSide === 'resto'}
                isInactive={activeSide === 'med'}
                onHover={() => setActiveSide('resto')}
                onLeave={() => setActiveSide(null)}
                href="/resto-product"
            />

            {/* --- DIVISOR CENTRAL (Solo Desktop) --- */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/5 z-20 pointer-events-none" />

            {/* --- LADO DERECHO: MED (Celeste) --- */}
            <SplitPanel
                id="med"
                title="Vantra Med"
                tag="Salud Inteligente"
                description="Infraestructura clínica de próxima generación. Telemedicina, historia clínica encriptada y gestión de turnos con seguridad de grado bancario."
                color="#A0E9FF"
                glowColor="rgba(160, 233, 255, 0.4)"
                icon={HeartPulse}
                isActive={activeSide === 'med'}
                isInactive={activeSide === 'resto'}
                onHover={() => setActiveSide('med')}
                onLeave={() => setActiveSide(null)}
                href="/med-product"
            />

        </section>
    );
};

// --- COMPONENTE PANEL INDIVIDUAL ---
const SplitPanel = ({ title, tag, description, color, glowColor, icon: Icon, isActive, isInactive, onHover, onLeave, href }) => {
    return (
        <motion.div
            layout
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={`
        relative group flex flex-col justify-center items-center text-center p-8 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        h-[500px] md:h-full w-full cursor-pointer
        ${isActive ? 'md:flex-[2]' : isInactive ? 'md:flex-[1]' : 'md:flex-[1]'}
      `}
        >
            {/* FONDO: Glow radial limpio que respira */}
            <div
                className="absolute -inset-[50%] z-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`
                }}
            />

            {/* CONTENIDO PRINCIPAL */}
            <div className="relative z-10 flex flex-col items-center max-w-md w-full">

                {/* ICONO (Estable) */}
                <motion.div
                    className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
                    animate={{
                        borderColor: isActive ? color : 'rgba(255,255,255,0.1)',
                        scale: isActive ? 1.1 : 1,
                        y: isActive ? -10 : 0
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon size={32} style={{ color: isActive ? color : 'white' }} />
                </motion.div>

                {/* TEXTOS (Sin colapsar) */}
                <div className="flex flex-col items-center gap-2 mb-6">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-white transition-colors delay-100">
                        {tag}
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                        {title}
                    </h2>
                </div>

                {/* DESCRIPCIÓN REVEAL (Slide Up suave) */}
                {/* Usamos CSS puro para el reveal para evitar el "colapso" de Framer Motion en textos */}
                <div className={`
                flex flex-col items-center gap-6 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isActive || window.innerWidth < 768
                        ? 'max-h-[300px] opacity-100 translate-y-0'
                        : 'md:max-h-0 md:opacity-0 md:translate-y-8'}
            `}>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                        {description}
                    </p>

                    <Link
                        to={href}
                        className="group/btn relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[#EDF246] transition-colors duration-300 mt-2"
                    >
                        Explorar
                        <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </Link>
                </div>

            </div>
        </motion.div>
    );
};

export default Ecosystem;