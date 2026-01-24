import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const QuizIntro = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full min-h-[480px] bg-zinc-900 border border-zinc-800 rounded-[24px] p-8 flex flex-col justify-between shadow-2xl shadow-black/50"
        >
            <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 text-[var(--product-primary)]">
                        <Sparkles size={18} />
                    </div>
                    <h3 className="text-xl font-medium text-white">Verificación de Elegibilidad</h3>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-8">
                    Nuestro sistema no es para todos. Buscamos trabajar con consultorios que ya tienen tracción y están listos para escalar sus operaciones mediante tecnología.
                </p>

                {/* Benefits / Points */}
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <CheckCircle2 className="shrink-0 text-[var(--product-primary)] mt-0.5" size={18} />
                        <span className="text-sm text-zinc-300">Análisis rápido de tu infraestructura actual.</span>
                    </div>
                    <div className="flex gap-3">
                        <CheckCircle2 className="shrink-0 text-[var(--product-primary)] mt-0.5" size={18} />
                        <span className="text-sm text-zinc-300">Diagnóstico de puntos de fricción en la agenda.</span>
                    </div>
                    <div className="flex gap-3">
                        <CheckCircle2 className="shrink-0 text-[var(--product-primary)] mt-0.5" size={18} />
                        <span className="text-sm text-zinc-300">Estimación de potencial de automatización.</span>
                    </div>
                </div>
            </div>

            {/* CTA Button - Matches Form Button Alignment */}
            <div className="w-full">
                <Button
                    className="w-full py-4 text-base font-bold text-black bg-[var(--product-primary)] hover:brightness-110 active:scale-[0.98] transition-all group relative overflow-hidden"
                    style={{ backgroundColor: 'var(--product-primary)' }}
                >
                    <div className="relative z-10 flex items-center justify-center gap-2">
                        <span>Comenzar Test de Elegibilidad</span>
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none blur-xl" />
                </Button>
                <p className="text-center text-xs text-zinc-500 mt-3">Te tomará menos de 2 minutos.</p>
            </div>
        </motion.div>
    );
};

export default QuizIntro;
