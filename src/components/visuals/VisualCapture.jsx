import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, Calendar, Clock, Stethoscope } from 'lucide-react';

/**
 * VisualCapture - Animación de Captura Inteligente
 * 
 * Muestra el flujo de conversión de un mensaje de WhatsApp en una tarjeta de turno estructurada.
 * Útil para demostrar capacidades de extracción automática de datos.
 * 
 * @example
 * <VisualCapture />
 */
const VisualCapture = () => {
    return (
        <div className="w-full h-full bg-zinc-900 rounded-3xl border border-white/5 flex flex-col relative overflow-hidden font-sans shadow-2xl">
            {/* Header Simulado */}
            <div className="h-14 border-b border-white/5 flex items-center px-6 bg-white/[0.02]">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageCircle size={16} />
                </div>
                <div className="ml-3 flex flex-col">
                    <span className="text-xs font-medium text-white">Solicitudes Entrantes</span>
                    <span className="text-[10px] text-zinc-500">WhatsApp Business</span>
                </div>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-center relative">

                {/* Mensaje del Paciente */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-zinc-800 self-start p-4 rounded-2xl rounded-tl-sm mb-6 max-w-[85%] border border-white/5 shadow-sm relative"
                >
                    <p className="text-sm text-zinc-200 leading-relaxed font-light">
                        Hola, soy <span className="font-medium text-white">Sofía Martinez</span>. Necesito un turno para <span className="font-medium text-white">Control Anual</span>, preferiblemente el martes por la mañana.
                    </p>
                    <span className="text-[10px] text-zinc-500 absolute bottom-2 right-3">09:15</span>
                </motion.div>

                {/* La Magia: "Procesando" visual suave */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="self-center flex items-center gap-2 mb-4"
                >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-75" />
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-150" />
                    <span className="text-xs text-zinc-500 ml-2">Interpretando solicitud...</span>
                </motion.div>

                {/* Resultado: Tarjeta de Turno Limpia */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
                    className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-emerald-500/30 p-4 rounded-xl shadow-lg relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Turno Sugerido</span>
                            <h4 className="text-white font-medium text-lg">Sofía Martinez</h4>
                        </div>
                        <div className="bg-emerald-500/10 p-1.5 rounded-lg">
                            <Check size={16} className="text-emerald-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-zinc-500" />
                            <span className="text-xs text-zinc-300">Martes 24</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-zinc-500" />
                            <span className="text-xs text-zinc-300">09:30 AM</span>
                        </div>
                        <div className="flex items-center gap-2 col-span-2">
                            <Stethoscope size={14} className="text-zinc-500" />
                            <span className="text-xs text-zinc-300">Control General</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default VisualCapture;
