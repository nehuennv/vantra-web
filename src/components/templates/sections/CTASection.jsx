import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, BarChart3 } from 'lucide-react'; // Iconos para la parte visual
import ConsultationForm from '../../organisms/ConsultationForm';
import QuizIntro from '../../organisms/QuizIntro';
import QuizModal from '../../organisms/QuizModal';

const CTASection = ({ data, theme, preSelectedPlan }) => {
    const [activeView, setActiveView] = useState('form');
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    const { title, subtitle } = data || {
        title: "Empezá a escalar hoy.",
        subtitle: "Dejá de perder tiempo en tareas operativas y enfocate en tus pacientes."
    };

    // Beneficios visuales para llenar el espacio vacío y dar confianza
    const benefits = [
        { icon: Zap, text: "Implementación rápida en 48hs" },
        { icon: ShieldCheck, text: "Seguridad de datos grado médico" },
        { icon: BarChart3, text: "Reportes de crecimiento mensual" },
    ];

    return (
        <section className="py-24 px-6 relative overflow-hidden ">
            <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

            <div className="container mx-auto max-w-7xl relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- COLUMNA IZQUIERDA: Contexto y Valor --- */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight leading-tight">
                                {title}
                            </h2>
                            <p className="text-lg text-zinc-400 font-light mb-10 max-w-xl leading-relaxed">
                                {subtitle}
                            </p>

                            {/* Lista de Beneficios */}
                            <div className="space-y-4 mb-10">
                                {benefits.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[var(--product-primary)]">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-zinc-300 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Nota chica */}
                            <p className="text-sm text-zinc-600">
                                * Cupos limitados para implementaciones mensuales.
                            </p>
                        </motion.div>
                    </div>

                    {/* --- COLUMNA DERECHA: El Panel de Acción (Card) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Borde Brillante sutil alrededor del form */}
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-[26px] opacity-30 blur-sm" />

                        <div className="relative bg-[#121215] border border-zinc-800 rounded-[24px] overflow-hidden shadow-2xl">

                            {/* Header del Panel: El Switch */}
                            <div className="p-2 bg-zinc-900/50 border-b border-zinc-800/50">
                                <div className="relative bg-zinc-950/50 p-1 rounded-xl flex items-center justify-between">
                                    {['form', 'quiz'].map((view) => {
                                        const isActive = activeView === view;
                                        return (
                                            <button
                                                key={view}
                                                onClick={() => setActiveView(view)}
                                                className={`relative w-1/2 py-3 rounded-lg text-sm font-medium transition-colors duration-300 z-10 ${isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                                                    }`}
                                            >
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="liquid-switch-bg"
                                                        className="absolute inset-0 bg-[#1f1f22] rounded-lg shadow-sm border border-zinc-700/50"
                                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                                    />
                                                )}
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    {view === 'form' ? 'Agendar Demo' : 'Test de Elegibilidad'}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Cuerpo del Panel: Formulario o Quiz */}
                            {/* Usamos fixed height para consistencia */}
                            <div className="h-[600px] flex flex-col relative w-full">
                                <AnimatePresence mode="wait">
                                    {activeView === 'form' ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full overflow-y-auto custom-scrollbar p-6 md:p-8 w-full"
                                        >
                                            <ConsultationForm preSelectedPlan={preSelectedPlan} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="quiz"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex flex-col w-full"
                                        >
                                            <div className="p-6 md:p-8 h-full">
                                                <QuizIntro onStart={() => setIsQuizOpen(true)} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;
