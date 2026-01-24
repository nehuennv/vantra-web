import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Utensils,
    HeartPulse,
    ArrowRight,
    Zap,
    Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CYCLE_DURATION = 5000;

// --- PLACEHOLDERS ---
const RestoPlaceholder = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
        <div className="w-full h-full rounded-xl border border-dashed border-[#F97316]/20 bg-[#F97316]/5 flex flex-col items-center justify-center gap-4">
            <Utensils size={40} className="text-[#F97316] opacity-80" />
            <div className="text-center">
                <h3 className="text-white font-display text-lg tracking-wide">Dashboard Resto</h3>
                <p className="text-white/40 text-xs mt-2">LOADING_MODULE...</p>
            </div>
        </div>
    </div>
);

const MedPlaceholder = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
        <div className="w-full h-full rounded-xl border border-dashed border-[#06B6D4]/20 bg-[#06B6D4]/5 flex flex-col items-center justify-center gap-4">
            <HeartPulse size={40} className="text-[#06B6D4] opacity-80" />
            <div className="text-center">
                <h3 className="text-white font-display text-lg tracking-wide">Dashboard Med</h3>
                <p className="text-white/40 text-xs mt-2">LOADING_MODULE...</p>
            </div>
        </div>
    </div>
);

// --- SECTORS CONFIG ---
const SECTORS = [
    {
        id: 'resto',
        label: 'Gastronomía',
        tagline: 'Gestión que vuela',
        description: 'Potenciá tu local. Reservas, cocina y números claros en un solo lugar.',
        icon: Utensils,
        color: '#F97316',
        gradient: 'linear-gradient(135deg, #F97316 0%, #FDBA74 100%)',
        glow: 'rgba(249, 115, 22, 0.6)',
        href: '/resto-product',
        Component: RestoPlaceholder
    },
    {
        id: 'med',
        label: 'Medicina',
        tagline: 'Salud Conectada',
        description: 'Consultorios del futuro. Historia clínica y turnos con seguridad bancaria.',
        icon: HeartPulse,
        color: '#06B6D4',
        gradient: 'linear-gradient(135deg, #06B6D4 0%, #67E8F9 100%)',
        glow: 'rgba(6, 182, 212, 0.6)',
        href: '/med-product',
        Component: MedPlaceholder
    }
];

const Ecosystem = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const activeSector = SECTORS[activeIndex];

    // --- AUTOPLAY CORREGIDO ---
    useEffect(() => {
        // Si está pausado, no hacemos nada y limpiamos intervalos previos
        if (isPaused) return;

        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % SECTORS.length);
        }, CYCLE_DURATION);

        // LIMPIEZA CRÍTICA: Cada vez que cambia isPaused O activeIndex,
        // el reloj anterior se destruye. Esto evita el "desfase".
        return () => clearInterval(timer);

    }, [isPaused, activeIndex]); // <--- AQUÍ ESTABA LA CLAVE: Agregamos activeIndex

    return (
        <section
            className="relative w-full py-24 px-4 md:px-8 flex justify-center items-center min-h-[900px]"
            id="ecosystem"
        >
            {/* Inject Keyframes for Timer Animation */}
            <style>{`
                @keyframes fillHeight {
                    from { height: 0%; }
                    to { height: 100%; }
                }
            `}</style>

            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-20 items-center lg:items-start">

                {/* ==========================================
                    1. NAVEGACIÓN (Izquierda)
                   ========================================== */}
                <div className="w-full lg:w-1/3 flex flex-col pt-8 z-10">

                    {/* Título Principal */}
                    <div className="mb-12 relative">
                        <div className="flex items-center gap-2 mb-4">
                            <Zap size={14} className="text-white/40" />
                            <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/40">
                                Ecosistema
                            </span>
                        </div>
                        <h2 className="font-display font-normal text-5xl md:text-6xl text-white mb-6 leading-[0.95]">
                            Elegí tu <br />
                            <span className="relative inline-block pr-2">
                                <span className="opacity-0">Rubro</span>
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={activeSector.id}
                                        initial={{ opacity: 0, filter: 'blur(4px)' }}
                                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, filter: 'blur(4px)' }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                        style={{ color: activeSector.color }}
                                    >
                                        Rubro
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h2>
                        <p className="text-white/50 text-lg font-light leading-relaxed">
                            Tecnología invisible y potente. Diseñada para escalar tu negocio sin fricción.
                        </p>
                    </div>

                    {/* LISTA DE SELECTORES */}
                    <div className="flex flex-col gap-6 pl-2">
                        {SECTORS.map((sector, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={sector.id}
                                    // Al hacer click, el useEffect detecta el cambio de activeIndex y reinicia el timer
                                    onClick={() => setActiveIndex(index)}
                                    className={`
                                        group relative w-full text-left pl-6 py-2 transition-all duration-500
                                        ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'}
                                    `}
                                >
                                    <div className="flex items-start gap-5 relative z-10">

                                        {/* ICONO FLOTANTE */}
                                        <div className="relative">
                                            <div
                                                className={`transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                                                style={{
                                                    color: isActive ? sector.color : 'white',
                                                    filter: isActive ? `drop-shadow(0 0 15px ${sector.glow})` : 'none'
                                                }}
                                            >
                                                <sector.icon size={28} strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h3
                                                className={`font-display text-2xl tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-white'}`}
                                            >
                                                {sector.label}
                                            </h3>

                                            {/* DESCRIPCIÓN REVEAL */}
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: isActive ? 'auto' : 0,
                                                    opacity: isActive ? 1 : 0,
                                                    marginTop: isActive ? 8 : 0
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-sm font-light text-white/60 leading-relaxed max-w-[90%]">
                                                    {sector.description}
                                                </p>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* BARRA DE PROGRESO */}
                                    {isActive && (
                                        <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                key={index} // Reset animation on index change
                                                className="w-full bg-white shadow-[0_0_10px_currentColor]"
                                                style={{
                                                    backgroundColor: sector.color,
                                                    color: sector.color,
                                                    height: '0%',
                                                    // La animación ahora siempre empieza de 0 cuando cambia el index
                                                    animation: `fillHeight ${CYCLE_DURATION}ms linear forwards`,
                                                    animationPlayState: isPaused ? 'paused' : 'running'
                                                }}
                                            />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* BOTÓN EXPLORAR */}
                    <div className="mt-12 pl-8">
                        <Link
                            to={activeSector.href}
                            className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                            style={{
                                backgroundColor: activeSector.color,
                                boxShadow: `0 0 20px -5px ${activeSector.color}80`
                            }}
                        >
                            <span className="relative font-semibold text-white text-sm tracking-wide z-10">
                                Ver {activeSector.label}
                            </span>
                            <ArrowRight size={18} className="text-white relative z-10 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* ==========================================
                    2. VISOR PRINCIPAL (Derecha)
                   ========================================== */}
                <div className="w-full lg:w-2/3 perspective-1000 h-[500px] lg:h-[650px] relative flex justify-center items-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >

                    {/* AURA AMBIENTAL */}
                    <AnimatePresence>
                        <motion.div
                            key={activeSector.id + '-aura'}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.3, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2 }}
                            transition={{ duration: 1.2 }}
                            className="absolute inset-0 -z-10 blur-[120px] rounded-full opacity-20 pointer-events-none mix-blend-screen"
                            style={{ background: activeSector.color }}
                        />
                    </AnimatePresence>

                    {/* LA VENTANA */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSector.id}
                            initial={{ opacity: 0, y: 15, scale: 0.96, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -15, scale: 0.96, filter: 'blur(4px)' }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full h-full relative"
                        >
                            {/* CONTENEDOR GLASS */}
                            <div
                                className="w-full h-full rounded-2xl overflow-hidden border bg-[#080808]/60 backdrop-blur-2xl shadow-2xl flex flex-col relative"
                                style={{
                                    borderColor: 'rgba(255,255,255,0.08)',
                                    boxShadow: `0 25px 60px -20px ${activeSector.color}20`
                                }}
                            >
                                {/* HEADER VENTANA */}
                                <div className="h-12 bg-white/5 border-b border-white/5 flex items-center justify-between px-5 select-none z-20">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F57] opacity-80" />
                                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E] opacity-80" />
                                        <div className="w-3 h-3 rounded-full bg-[#28C840] opacity-80" />
                                    </div>
                                    <div className="w-12" />
                                    <div className="w-12" />
                                </div>

                                {/* ÁREA DE DASHBOARD */}
                                <div className="flex-1 relative w-full h-full overflow-hidden">
                                    <activeSector.Component />

                                    {/* Reflejo Glass sutil */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-10" />
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;