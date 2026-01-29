import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, Loader2 } from 'lucide-react';

const ConsultationForm = ({ preSelectedPlan }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);
        const service = formData.get('service');
        const name = formData.get('name');
        const email = formData.get('email');

        const message = `Hola Vantra, me interesa recibir más información sobre *${service}*. \n\nSoy *${name}* y mi correo es: ${email}.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=5491138830925&text=${encodedMessage}&type=phone_number&app_absent=0`;

        // Simulate short loading for feedback then redirect
        setTimeout(() => {
            setIsLoading(false);
            window.open(whatsappUrl, '_blank');
        }, 1000);
    };

    const inputClasses = "w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 rounded-xl px-4 py-3.5 focus:border-[var(--product-primary)] focus:ring-1 focus:ring-[var(--product-primary)]/20 outline-none transition-all placeholder:text-zinc-600";
    const labelClasses = "block text-xs font-medium text-zinc-400 mb-1.5 ml-1 uppercase tracking-wider";

    return (
        <motion.div
            key={preSelectedPlan} // Re-mount when plan changes to update default values
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full min-h-[480px] p-2 flex flex-col"
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
                            name="service"
                            className={`${inputClasses} appearance-none cursor-pointer`}
                            defaultValue={preSelectedPlan || ""}
                            required
                        >
                            <option value="" disabled hidden className="text-zinc-500">Seleccioná un servicio...</option>
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
                    <input name="name" type="text" placeholder="Dr. Juan Pérez" className={inputClasses} required />
                </div>

                {/* Contact Info */}
                <div>
                    <label className={labelClasses}>Email</label>
                    <input name="email" type="email" placeholder="contacto@medico.com" className={inputClasses} required />
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-grow"></div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 text-base font-bold text-white bg-[var(--product-primary)] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
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
