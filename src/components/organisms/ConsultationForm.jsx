import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, Loader2 } from 'lucide-react';

const ConsultationForm = ({ preSelectedPlan }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network request
        setTimeout(() => setIsLoading(false), 2000);
    };

    const inputClasses = "w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 rounded-xl px-4 py-3.5 focus:border-[var(--product-primary)] focus:ring-1 focus:ring-[var(--product-primary)]/20 outline-none transition-all placeholder:text-zinc-600";
    const labelClasses = "block text-xs font-medium text-zinc-400 mb-1.5 ml-1 uppercase tracking-wider";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full min-h-[480px] bg-zinc-900 border border-zinc-800 rounded-[24px] p-8 flex flex-col shadow-2xl shadow-black/50"
        >
            <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-2">Agenda tu Consultoría</h3>
                <p className="text-zinc-400 text-sm">Completa tus datos y nos pondremos en contacto.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-4">
                {/* Service Selection */}
                <div>
                    <label className={labelClasses}>Servicio de Interés</label>
                    <div className="relative">
                        <select
                            className={`${inputClasses} appearance-none cursor-pointer`}
                            defaultValue={preSelectedPlan || "Sistema Completo"}
                        >
                            <option value="Gestión Interna">Gestión Interna</option>
                            <option value="Sistema Completo">Sistema Completo</option>
                            <option value="Automatización + Control">Automatización + Control</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                            <ArrowRight size={14} className="rotate-90" />
                        </div>
                    </div>
                </div>

                {/* Name */}
                <div>
                    <label className={labelClasses}>Nombre Completo</label>
                    <input type="text" placeholder="Dr. Juan Pérez" className={inputClasses} required />
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className={labelClasses}>Email</label>
                        <input type="email" placeholder="contacto@medico.com" className={inputClasses} required />
                    </div>
                    <div>
                        <label className={labelClasses}>WhatsApp</label>
                        <input type="tel" placeholder="+54 9 11..." className={inputClasses} required />
                    </div>
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-grow"></div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 text-base font-bold text-[color:var(--product-on-primary,#18181b)] bg-[var(--product-primary)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    style={{ backgroundColor: 'var(--product-primary)' }}
                >
                    <div className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                <span>Enviando solicitud...</span>
                            </>
                        ) : (
                            <>
                                <span>Solicitar Consultoría</span>
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none blur-xl" />
                </Button>
            </form>
        </motion.div>
    );
};

export default ConsultationForm;
