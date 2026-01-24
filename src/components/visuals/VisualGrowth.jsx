import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Search, Globe, TrendingUp } from 'lucide-react';

/**
 * VisualGrowth - Animación de Métricas Operativas
 * 
 * Visualiza estadísticas de procedencia de pacientes (Instagram, Google, Web) 
 * y tasa de ausentismo con gráficos de barras animados.
 * Útil para demostrar análisis de negocio.
 * 
 * @example
 * <VisualGrowth />
 */
const VisualGrowth = () => {
    return (
        <div className="w-full h-full bg-zinc-900 rounded-3xl border border-white/5 p-6 flex flex-col relative overflow-hidden">

            <div className="mb-6">
                <h3 className="text-sm font-medium text-white mb-1">Rendimiento Mensual</h3>
                <p className="text-[11px] text-zinc-500">Vista general operativa de la clínica.</p>
            </div>

            <div className="flex-1 flex flex-col gap-6">

                {/* 1. Procedencia de Pacientes (Mini Cards en lugar de Pie Chart complejo para claridad) */}
                <div className="flex-1">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mb-3 block">Procedencia de Pacientes</span>
                    <div className="space-y-2">
                        {[
                            { label: "Instagram Ads", val: "45%", icon: Instagram, color: "text-pink-400", bar: "bg-pink-500" },
                            { label: "Google Search", val: "30%", icon: Search, color: "text-blue-400", bar: "bg-blue-500" },
                            { label: "Sitio Web", val: "25%", icon: Globe, color: "text-emerald-400", bar: "bg-emerald-500" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.02] transition-colors"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <item.icon size={14} className={item.color} />
                                <div className="flex-1">
                                    <div className="flex justify-between text-[11px] mb-1">
                                        <span className="text-zinc-300">{item.label}</span>
                                        <span className="text-white font-medium">{item.val}</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: item.val }}
                                            transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                                            className={`h-full rounded-full ${item.bar}`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Ausentismo (Bar Chart Simple) */}
                <div className="h-24">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Tasa de Ausentismo</span>
                        <div className="flex items-center gap-1 text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">
                            <TrendingUp size={10} /> -2.5% vs mes ant.
                        </div>
                    </div>
                    <div className="flex items-end justify-between h-16 gap-2">
                        {[12, 8, 15, 5, 10, 4, 3].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h * 4}px` }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className={`w-full rounded-sm ${i === 6 ? 'bg-emerald-500' : 'bg-zinc-800'}`}
                                />
                                <span className="text-[8px] text-zinc-600">{['L', 'M', 'M', 'J', 'V', 'S', 'D'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VisualGrowth;
