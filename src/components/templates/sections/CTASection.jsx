import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConsultationForm from '../../organisms/ConsultationForm';
import QuizIntro from '../../organisms/QuizIntro';

const CTASection = ({ data, theme, preSelectedPlan }) => {
    // Default to 'form' unless specifically asked, but keeping 'form' as primary conversion point
    const [activeView, setActiveView] = useState('form'); // 'form' | 'quiz'

    const { title, subtitle } = data || {
        title: "Escala tu Consultorio",
        subtitle: "Elige el camino que mejor se adapte a tu etapa actual."
    };

    return (
        <section className="py-24 md:py-32 px-6 relative overflow-hidden ">

            {/* Background Gradients/Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[var(--product-primary)]/5 blur-[120px] rounded-full opacity-30" />
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">

                {/* Header & Switch Container */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-400 mb-10 max-w-2xl"
                    >
                        {subtitle}
                    </motion.p>

                    {/* LIQUID SWITCH */}
                    <div className="p-1.5 bg-zinc-950 border border-zinc-800 rounded-full inline-flex relative shadow-lg shadow-black/20">
                        {['form', 'quiz'].map((view) => {
                            const isActive = activeView === view;
                            return (
                                <button
                                    key={view}
                                    onClick={() => setActiveView(view)}
                                    className={`relative px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="liquid-switch-bg"
                                            className="absolute inset-0 bg-zinc-800 rounded-full shadow-sm border border-zinc-700/50"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        {view === 'form' ? 'Consultar Plan' : 'Verificar si es para mí'}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content Container - Main Layout Shift Prevention */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Persuasive Text / Context (Optional - could just be centered, but split looks good) */}
                    {/* Actually, prompt requested a card that occupies width/height. 
                        Let's make it a centered layout max-w-2xl per the request for "Vista A" and "Vista B".
                        If we want side-by-side text, we can add it, but requirement seems to focus on the switching card component.
                    */}

                    <div className="lg:col-span-8 lg:col-start-3">
                        <AnimatePresence mode="wait">
                            {activeView === 'form' ? (
                                <ConsultationForm key="form" preSelectedPlan={preSelectedPlan} />
                            ) : (
                                <QuizIntro key="quiz" />
                            )}
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTASection;
