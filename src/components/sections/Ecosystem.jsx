import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, HeartPulse, Utensils, Database, ShieldCheck, Activity, Smartphone, Lock } from 'lucide-react';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

// --- VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
};

const Ecosystem = () => {
    return (
        <section className="relative py-24 md:py-32" id="ecosystem">

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mb-16"
                >
                    <h2 className="text-[#EDF246] text-xs font-bold tracking-[0.3em] uppercase mb-6">
                        Productos Propios
                    </h2>
                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8">
                        No somos solo agencia.<br />
                        <span className="text-gray-500">Somos ingenieros de software.</span>
                    </h3>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {/* VANTRA RESTO CARD */}
                    <motion.div variants={itemVariants}>
                        <Card className="min-h-[500px] p-0 flex flex-col justify-between group overflow-hidden bg-[#0A0A0B]">
                            {/* Background Image/Gradient Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0B] opacity-90 z-0" />

                            <div className="relative z-10 p-10 md:p-14 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md text-[#EDF246]">
                                        <Utensils className="w-8 h-8" />
                                    </div>
                                    <span className="bg-black/60 border border-white/10 text-white text-xs px-4 py-2 rounded-full uppercase tracking-widest">
                                        Gastronomía
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    <h4 className="font-display text-4xl md:text-5xl text-white mb-4">
                                        Vantra Resto
                                    </h4>
                                    <div className="p-6 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
                                        <p className="text-gray-200 font-medium leading-relaxed">
                                            El sistema operativo para restaurantes modernos. Reservas, comandas y analytics en un solo lugar.
                                        </p>
                                    </div>

                                    <div className="mt-8 flex gap-4 flex-wrap">
                                        <TechBadge icon={Activity} label="Real-Time" />
                                        <TechBadge icon={Smartphone} label="App Nativa" />
                                    </div>
                                    <Link to="/resto-product" className="mt-8 inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-[#EDF246] transition-colors">
                                        Ver Producto <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* VANTRA MED CARD */}
                    <motion.div variants={itemVariants}>
                        <Card className="min-h-[500px] p-0 flex flex-col justify-between group overflow-hidden bg-[#0A0A0B]">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0B] opacity-90 z-0" />

                            <div className="relative z-10 p-10 md:p-14 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md text-[#A0E9FF]">
                                        <HeartPulse className="w-8 h-8" />
                                    </div>
                                    <span className="bg-black/60 border border-white/10 text-white text-xs px-4 py-2 rounded-full uppercase tracking-widest">
                                        HealthTech
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    <h4 className="font-display text-4xl md:text-5xl text-white mb-4">
                                        Vantra Med
                                    </h4>
                                    <div className="p-6 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
                                        <p className="text-gray-200 font-medium leading-relaxed">
                                            Gestión clínica inteligente. Historia clínica electrónica, turnos y telemedicina con seguridad de grado bancario.
                                        </p>
                                    </div>

                                    <div className="mt-8 flex gap-4 flex-wrap">
                                        <TechBadge icon={Lock} label="Encriptado" />
                                        <TechBadge icon={ShieldCheck} label="Seguro" />
                                    </div>
                                    <Link to="/med-product" className="mt-8 inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-[#A0E9FF] transition-colors">
                                        Ver Producto <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

const TechBadge = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
        <Icon className="w-3 h-3" />
        {label}
    </div>
);

export default Ecosystem;
