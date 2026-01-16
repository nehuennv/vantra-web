import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, HeartPulse, Utensils, Database, ShieldCheck, Activity, Smartphone, Lock } from 'lucide-react';

const Ecosystem = () => {
    return (
        <section className="relative py-24 md:py-32 " id="ecosystem">

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header Copy */}
                <div className="max-w-4xl mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-mono text-[#EDF246] text-xs tracking-[0.3em] uppercase mb-6">
                            Autoridad Técnica
                        </h2>
                        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] mb-8">
                            Ingeniería de clase mundial.
                        </h3>
                        <p className="font-sans text-xl text-gray-400 leading-relaxed max-w-2xl">
                            ¿Por qué confiar en nosotros? Porque construimos la tecnología que gestiona operaciones críticas todos los días.
                        </p>
                    </motion.div>
                </div>

                {/* PREMIUM STATIC GRID - 50/50 WITHOUT LAYOUT SHIFT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full rounded-2xl border border-white/10 overflow-hidden ">

                    {/* PANEL 1: VANTRA RESTO */}
                    <div className="group relative min-h-[500px] lg:min-h-[600px] border-b lg:border-b-0 lg:border-r border-white/10 p-10 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden transition-colors duration-500 hover:bg-[#111111]">

                        {/* Interactive Background Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#EDF246]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Top Section */}
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-10">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#EDF246]">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                                    SaaS Gastronómico
                                </span>
                            </div>

                            <h4 className="font-display text-4xl md:text-5xl text-white font-bold mb-6 group-hover:text-[#EDF246] transition-colors duration-300">
                                Vantra Resto
                            </h4>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                Plataforma integral de gestión. Comandas en tiempo real, control de inventario predictivo y analítica de ventas.
                            </p>
                        </div>

                        {/* Bottom Tech Stack & CTA */}
                        <div className="relative z-10 mt-12">
                            <div className="flex flex-wrap gap-3 mb-10">
                                <TechBadge icon={Activity} label="Real-time DB" />
                                <TechBadge icon={Smartphone} label="App Nativa" />
                                <TechBadge icon={Database} label="Offline First" />
                            </div>

                            <a href="/resto-product" className="inline-flex items-center gap-3 text-white font-display uppercase tracking-widest text-sm group/btn">
                                <span className="border-b border-white/30 group-hover/btn:border-[#EDF246] group-hover/btn:text-[#EDF246] transition-all">Explorar Tecnología</span>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/btn:text-[#EDF246] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* PANEL 2: VANTRA MED */}
                    <div className="group relative min-h-[500px] lg:min-h-[600px] p-10 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden transition-colors duration-500 hover:bg-[#111111]">

                        {/* Interactive Background Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#A0E9FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Top Section */}
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-10">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#A0E9FF]">
                                    <HeartPulse className="w-6 h-6" />
                                </div>
                                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                                    SaaS Salud
                                </span>
                            </div>

                            <h4 className="font-display text-4xl md:text-5xl text-white font-bold mb-6 group-hover:text-[#A0E9FF] transition-colors duration-300">
                                Vantra Med
                            </h4>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                Ecosistema digital para clínicas. Historia clínica en la nube, telemedicina encriptada y gestión inteligente de turnos.
                            </p>
                        </div>

                        {/* Bottom Tech Stack & CTA */}
                        <div className="relative z-10 mt-12">
                            <div className="flex flex-wrap gap-3 mb-10">
                                <TechBadge icon={Lock} label="End-to-End Encryption" />
                                <TechBadge icon={ShieldCheck} label="HIPAA Compliant" />
                                <TechBadge icon={Database} label="Cloud Native" />
                            </div>

                            <a href="/med-product" className="inline-flex items-center gap-3 text-white font-display uppercase tracking-widest text-sm group/btn">
                                <span className="border-b border-white/30 group-hover/btn:border-[#A0E9FF] group-hover/btn:text-[#A0E9FF] transition-all">Explorar Tecnología</span>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/btn:text-[#A0E9FF] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

// Subcomponent for tech badges to keep it clean
const TechBadge = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs font-mono text-gray-400 group-hover:border-white/10 transition-colors">
        <Icon className="w-3 h-3 text-gray-500" />
        {label}
    </div>
);

export default Ecosystem;
