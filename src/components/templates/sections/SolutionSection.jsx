import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Calendar, Database, TrendingUp } from 'lucide-react';

// Importar componentes visuales modulares
import VisualCapture from '../../visuals/VisualCapture';
import VisualContext from '../../visuals/VisualContext';
import VisualAction from '../../visuals/VisualAction';
import VisualGrowth from '../../visuals/VisualGrowth';

// --- CONFIGURACIÓN DE DATOS ---
const features = [
    {
        id: 'capture',
        title: "Captura Inteligente",
        description: "El sistema lee el chat de WhatsApp y extrae los datos del paciente automáticamente. Sin formularios manuales, sin errores de tipeo.",
        icon: MessageCircle,
        color: "#10B981", // Emerald soft
        visual: "VisualCapture"
    },
    {
        id: 'context',
        title: "Historial 360°",
        description: "Antes de que el paciente llegue, ya sabes todo. Visualiza visitas anteriores, cobertura médica y notas clínicas en un solo vistazo.",
        icon: Database,
        color: "#3B82F6", // Blue soft
        visual: "VisualContext"
    },
    {
        id: 'action',
        title: "Agenda Dinámica",
        description: "Visualiza tu día en una lista clara. El sistema organiza los turnos, marca confirmaciones y detecta huecos automáticamente.",
        icon: Calendar,
        color: "#8B5CF6", // Violet soft
        visual: "VisualAction"
    },
    {
        id: 'growth',
        title: "Métricas Operativas",
        description: "Entiende tu clínica. Analiza tasas de ausentismo y descubre por qué canal llegan tus pacientes (Instagram, Google, Recomendación).",
        icon: TrendingUp,
        color: "#F59E0B", // Amber soft
        visual: "VisualGrowth"
    }
];

// --- COMPONENTE PRINCIPAL (CARRUSEL REFINADO) ---
const SolutionSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timerRef = useRef(null);
    const DURATION = 6000;

    // Timer Logic Optimizado
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, DURATION);
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [activeIndex]);

    const handleSelect = (index) => {
        setActiveIndex(index);
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSelect(index);
        }
    };

    return (
        <section className="py-24 w-full font-sans">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">

                {/* Header Section Minimalista */}
                <div className="mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
                        Todo el flujo de tu clínica,<br />
                        <span className="text-zinc-500">en piloto automático.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start h-auto lg:min-h-[600px]">

                    {/* LISTA IZQUIERDA (CARRUSEL) */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        {features.map((feature, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => handleSelect(index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className={`
                                        group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border text-left w-full outline-none overflow-hidden
                                        ${isActive
                                            ? 'bg-zinc-900 border-zinc-800 shadow-xl'
                                            : 'bg-transparent border-transparent hover:bg-white/[0.02] opacity-60 hover:opacity-100'
                                        }
                                    `}
                                >
                                    {/* CONTENIDO DE LA TARJETA */}
                                    <div className="flex items-start gap-5 relative z-10 pb-2"> {/* Added padding bottom for bar */}
                                        <div className={`
                                            mt-1 p-3 rounded-xl transition-colors duration-500
                                            ${isActive ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-500 group-hover:text-zinc-300'}
                                        `}>
                                            <feature.icon size={20} strokeWidth={2} />
                                        </div>
                                        <div>
                                            <h3 className={`text-lg font-medium mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                                                {feature.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* --- LA NUEVA BARRA DE PROGRESO (DENTRO) --- */}
                                    {/* Está posicionada dentro de la tarjeta, en la parte inferior, sutil */}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-6 right-6 h-[3px] bg-zinc-800/50 rounded-full overflow-hidden mb-6">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: feature.color }}
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: DURATION / 1000, ease: "linear" }}
                                            />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* ESCENARIO VISUAL (DERECHA) */}
                    <div className="lg:col-span-7 h-[500px] lg:h-[600px] w-full relative group">
                        {/* Contenedor del Visual */}
                        <div className="sticky top-0 w-full h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="w-full h-full p-4 md:p-8"
                                >
                                    {/* Renderizado de Componentes */}
                                    {activeIndex === 0 && <VisualCapture />}
                                    {activeIndex === 1 && <VisualContext />}
                                    {activeIndex === 2 && <VisualAction />}
                                    {activeIndex === 3 && <VisualGrowth />}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;