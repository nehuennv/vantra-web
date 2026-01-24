import React from 'react';
import { motion } from 'framer-motion';
import { User, Clock, Shield, FileText, Check } from 'lucide-react';

/**
 * VisualContext - Animación de Historial 360°
 * 
 * Visualiza la información completa del paciente con un nodo central y tarjetas
 * de datos satelitales (última visita, cobertura médica, estudios).
 * Útil para demostrar contexto clínico completo.
 * 
 * @example
 * <VisualContext />
 */
const VisualContext = () => {
    return (
        <div className="w-full h-full bg-zinc-900 rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center">

            {/* Fondo Sutil */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale"></div>

            {/* Nodo Central (Paciente) */}
            <motion.div
                className="relative z-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Ondas expansivas suaves */}
                <motion.div
                    className="absolute inset-0 -m-8 rounded-full border border-blue-500/10"
                    animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                    className="absolute inset-0 -m-16 rounded-full border border-blue-500/5"
                    animate={{ scale: [1, 1.2], opacity: [0.3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />

                <div className="w-20 h-20 bg-zinc-800 rounded-full border border-white/10 flex items-center justify-center shadow-2xl relative z-10">
                    <User size={32} className="text-blue-400" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-zinc-900 flex items-center justify-center">
                        <Check size={10} className="text-white" />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <div className="text-sm font-medium text-white">Carlos Ruiz</div>
                    <div className="text-[10px] text-zinc-500">Paciente Recurrente</div>
                </div>
            </motion.div>

            {/* Tarjetas de Datos Satelitales (Estilo Glass Clean) */}
            {[
                { title: "Última Visita", val: "Hace 2 meses", icon: Clock, x: 130, y: -40, color: "text-zinc-400" },
                { title: "Cobertura", val: "OSDE 410", icon: Shield, x: -120, y: -20, color: "text-blue-400" },
                { title: "Estudios", val: "Laboratorio OK", icon: FileText, x: 0, y: 110, color: "text-emerald-400" },
            ].map((node, i) => (
                <React.Fragment key={i}>
                    {/* Línea conectora muy sutil */}
                    <svg className="absolute top-1/2 left-1/2 w-full h-full overflow-visible pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0">
                        <motion.line
                            x1="0" y1="0"
                            x2={node.x} y2={node.y}
                            stroke="white"
                            strokeWidth="1"
                            strokeOpacity="0.05"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                        />
                    </svg>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, x: node.x, y: node.y }}
                        transition={{ type: "spring", stiffness: 80, delay: 0.8 + (i * 0.2) }}
                        className="absolute z-10 bg-zinc-800/80 backdrop-blur-md border border-white/5 p-3 rounded-xl shadow-lg min-w-[120px]"
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <node.icon size={12} className={node.color} />
                            <span className="text-[10px] text-zinc-500 uppercase font-semibold">{node.title}</span>
                        </div>
                        <div className="text-xs font-medium text-white">{node.val}</div>
                    </motion.div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default VisualContext;
