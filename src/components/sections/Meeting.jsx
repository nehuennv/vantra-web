import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const Meeting = () => {
    return (
        <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                            Hablemos de tu proyecto.
                        </h2>
                        <h3 className="text-2xl md:text-3xl text-[#A0E9FF] font-light mb-8">
                            Agendá una reunión gratuita.
                        </h3>
                        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            30 minutos para conocer tu negocio y diseñar tu estrategia de crecimiento. Sin costo, sin compromiso.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
                        {[
                            { icon: Clock, text: "Agenda fácil (Elegí el día y hora)" },
                            { icon: CheckCircle2, text: "30 minutos (Diagnóstico sin costo)" },
                            { icon: Video, text: "100% remoto (Videollamada)" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <item.icon className="w-5 h-5 text-[#EDF246]" />
                                <span className="text-sm font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        {/* Primary CTA */}
                        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#EDF246] text-[#050507] rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(237,242,70,0.3)]">
                            Agendar Reunión Ahora
                        </a>

                        {/* Alternative CTA */}
                        <a href="https://wa.me/" className="group text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                            <span>¿Preferís escribirnos directamente?</span>
                            <span className="border-b border-transparent group-hover:border-[#EDF246] group-hover:text-[#EDF246] transition-all">
                                Contactar por WhatsApp
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-[#EDF246]" />
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Meeting;
