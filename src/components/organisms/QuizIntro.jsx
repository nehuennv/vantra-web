import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Activity, Clock } from 'lucide-react';
import Button from '../ui/Button';

const QuizIntro = ({ onStart }) => {
    return (
        <div className="flex flex-col h-full justify-between">

            {/* --- HEADER --- */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--product-primary)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--product-primary)]"></span>
                    </span>
                    <span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Diagnóstico de Operatividad</span>
                </div>

                <h3 className="text-3xl font-display font-medium text-white mb-4 leading-tight">
                    ¿Tu consultorio depende 100% de tu WhatsApp?
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    En Vantra desarrollamos sistemas de previsibilidad. En menos de 2 minutos, vamos a identificar <strong>dónde se está perdiendo tiempo y dinero</strong> en tu operación diaria y qué sistema (A, B o C) necesitás para solucionarlo.
                </p>
            </div>

            {/* --- VISUAL CUES (Puntos de dolor) --- */}
            <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex items-start gap-4">
                    <div className="mt-1 p-2 bg-zinc-950 rounded-lg border border-zinc-800 text-zinc-500">
                        <Clock size={18} />
                    </div>
                    <div>
                        <p className="text-zinc-200 text-sm font-medium mb-1">Análisis de Tiempo</p>
                        <p className="text-zinc-500 text-xs">Calculamos cuánto tiempo operativo podrías recuperar.</p>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex items-start gap-4">
                    <div className="mt-1 p-2 bg-zinc-950 rounded-lg border border-zinc-800 text-zinc-500">
                        <Activity size={18} />
                    </div>
                    <div>
                        <p className="text-zinc-200 text-sm font-medium mb-1">Escalabilidad</p>
                        <p className="text-zinc-500 text-xs">Determinamos si estás listo para automatizar.</p>
                    </div>
                </div>
            </div>

            {/* --- CTA --- */}
            <div className="mt-auto pt-6 border-t border-zinc-800">
                <Button
                    onClick={onStart} // Esta función la pasaremos luego para iniciar el quiz
                    className="w-full h-14 text-base rounded-xl font-medium tracking-wide flex items-center justify-center gap-3 group"
                    style={{
                        backgroundColor: 'var(--product-primary)',
                        color: '#000',
                        border: 'none',
                        // Sombra sutil en el color primario, nada de verde ácido
                        boxShadow: '0 0 30px -10px var(--product-primary-opacity-30, rgba(14, 165, 233, 0.3))'
                    }}
                >
                    <MessageSquare size={18} fill="currentColor" className="opacity-80" />
                    <span>Iniciar Diagnóstico</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-center text-xs text-zinc-600 mt-3">
                    Sin costo • Análisis inmediato • Privado
                </p>
            </div>
        </div>
    );
};

export default QuizIntro;