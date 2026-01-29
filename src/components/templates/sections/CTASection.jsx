import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, BarChart3 } from 'lucide-react'; // Iconos para la parte visual

import QuizIntro from '../../organisms/QuizIntro';
import QuizModal from '../../organisms/QuizModal';

const CTASection = ({ data, theme, preSelectedPlan }) => {
    const [activeView, setActiveView] = useState('form');
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const [activePlan, setActivePlan] = useState(preSelectedPlan);

    // Sync external plan selection (e.g. from Pricing Section)
    React.useEffect(() => {
        if (preSelectedPlan) {
            setActivePlan(preSelectedPlan);
            setActiveView('form');
        }
    }, [preSelectedPlan]);

    const handleSchedule = (planName) => {
        setActivePlan(planName);
        setIsQuizOpen(false);
        setActiveView('form');
    };

    const { title, subtitle } = data || {
        title: "Empezá a escalar hoy.",
        subtitle: "Dejá de perder tiempo en tareas operativas y enfocate en tus pacientes."
    };

    // Beneficios visuales para llenar el espacio vacío y dar confianza
    const benefits = [
        { icon: Zap, text: "Implementación rápida en 48hs" },
        { icon: ShieldCheck, text: "Seguridad de datos grado médico" },
        { icon: BarChart3, text: "Reportes de crecimiento mensual" },
    ];

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="cta-section">
            {/* Background Decorations (Adjusted to use dynamic color) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--product-primary)] rounded-full blur-[120px] pointer-events-none -z-10 opacity-5" />

            <QuizModal
                isOpen={isQuizOpen}
                onClose={() => setIsQuizOpen(false)}
                onSchedule={handleSchedule}
            />

            <div className="container mx-auto max-w-7xl relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- COLUMNA IZQUIERDA: Contexto y Valor --- */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-[var(--product-primary)]/5 text-[var(--product-primary)] text-xs font-bold tracking-widest uppercase mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--product-primary)] animate-pulse" />
                                Action Required
                            </div>
                            <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 tracking-tight leading-[0.9]">
                                {title}
                            </h2>
                            <p className="text-xl text-gray-400 font-light mb-10 max-w-xl leading-relaxed">
                                {subtitle}
                            </p>

                            {/* Lista de Beneficios */}
                            <div className="space-y-6 mb-10">
                                {benefits.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group/item">
                                        <div className="w-12 h-12 rounded-xl bg-[var(--product-primary)]/10 border border-zinc-800 flex items-center justify-center text-[var(--product-primary)] group-hover/item:scale-110 transition-transform duration-300">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-gray-300 font-medium text-lg">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Nota chica */}
                            <p className="text-sm text-gray-500 border-l-2 border-[var(--product-primary)]/20 pl-4">
                                * Cupos limitados para implementaciones mensuales.
                            </p>
                        </motion.div>
                    </div>

                    {/* --- COLUMNA DERECHA: El Panel de Acción (Card) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Borde Brillante sutil alrededor del form */}
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-[26px] opacity-30 blur-sm" />

                        {/* La Card Container - Usando variables CSS para el borde y glow */}
                        <div className="group relative bg-[#08080A]/80 backdrop-blur-3xl border border-zinc-800 rounded-[24px] overflow-hidden shadow-2xl">

                            {/* Línea decorativa superior animada (Hover) Color Dinámico */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--product-primary)] transition-all duration-500 ease-out group-hover:w-full z-20" />

                            {/* Header del Panel: El Switch */}
                            <div className="p-2 border-b border-white/5 relative z-10">
                                <div className="relative bg-black/40 p-1 rounded-xl flex items-center justify-between">
                                    {['form', 'quiz'].map((view) => {
                                        const isActive = activeView === view;
                                        return (
                                            <button
                                                key={view}
                                                onClick={() => setActiveView(view)}
                                                className={`relative w-1/2 py-3 rounded-lg text-sm font-medium transition-colors duration-300 z-10 ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                                    }`}
                                            >
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="liquid-switch-bg"
                                                        // Fondo dinámico (primary/20) - Sin sombra
                                                        className="absolute inset-0 bg-[var(--product-primary)]/20 border border-zinc-800 rounded-lg"
                                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                                    />
                                                )}
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    {view === 'form' ? 'Agendar Demo' : 'Test de Elegibilidad'}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Cuerpo del Panel: Formulario o Quiz */}
                            <div className="h-[600px] flex flex-col relative w-full">
                                <AnimatePresence mode="wait">
                                    {activeView === 'form' ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full overflow-y-auto custom-scrollbar p-6 md:p-8 w-full"
                                            id="consultation-form"
                                        >
                                            {/* INLINED ConsultationForm from Meeting.jsx, adapted to dynamic props */}
                                            <ConsultationFormInlined preSelectedPlan={activePlan} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="quiz"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-full flex flex-col w-full"
                                        >
                                            <div className="p-6 md:p-8 h-full">
                                                <QuizIntro onStart={() => setIsQuizOpen(true)} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

// --- INLINED FORM COMPONENT (Based on Meeting.jsx) ---
import { User, Mail, Phone, Layers, Loader2, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

const ConsultationFormInlined = ({ preSelectedPlan }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        product: preSelectedPlan || ''
    });
    const [status, setStatus] = useState('idle');

    React.useEffect(() => {
        if (preSelectedPlan) setFormState(prev => ({ ...prev, product: preSelectedPlan }));
    }, [preSelectedPlan]);


    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        // Simulación: aquí iría la lógica real (email/whatsapp)
        const message = `Hola, me interesa: ${formState.product}. Soy ${formState.name} (${formState.email}).`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=5491138830925&text=${encodedMessage}&type=phone_number&app_absent=0`;

        setTimeout(() => {
            console.log("Datos enviados:", formState);
            window.open(whatsappUrl, '_blank');
            setStatus('success');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-8"
            >
                <div className="w-24 h-24 rounded-full bg-[var(--product-primary)]/10 flex items-center justify-center text-[var(--product-primary)] border border-[var(--product-primary)]/20 shadow-[0_0_30px_rgba(var(--product-primary-rgb),0.2)]">
                    <CheckCircle2 size={48} />
                </div>
                <div>
                    <h3 className="text-3xl font-display text-white mb-3">¡Solicitud Recibida!</h3>
                    <p className="text-gray-400 max-w-xs mx-auto text-lg">
                        Te estamos redirigiendo a WhatsApp...
                    </p>
                </div>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-gray-500 hover:text-white underline decoration-gray-700 underline-offset-4 transition-colors"
                >
                    Enviar otra consulta
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 relative z-10"
        >
            {/* Name Input */}
            <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 ml-1">Nombre Completo</label>
                <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--product-primary)] transition-colors duration-300">
                        <User size={20} />
                    </div>
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="Tu Nombre o Empresa"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full h-16 bg-white/[0.03] border border-zinc-800 rounded-2xl pl-14 pr-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--product-primary)]/50 focus:bg-white/[0.05] transition-all duration-300 font-medium text-base"
                    />
                </div>
            </div>

            {/* Stacked: Email & Phone */}
            <div className="flex flex-col gap-6">
                <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 ml-1">Email</label>
                    <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--product-primary)] transition-colors duration-300">
                            <Mail size={20} />
                        </div>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="tu@email.com"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full h-16 bg-white/[0.03] border border-zinc-800 rounded-2xl pl-14 pr-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--product-primary)]/50 focus:bg-white/[0.05] transition-all duration-300 font-medium text-base"
                        />
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 ml-1">WhatsApp</label>
                    <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--product-primary)] transition-colors duration-300">
                            <Phone size={20} />
                        </div>
                        <input
                            required
                            type="tel"
                            name="phone"
                            placeholder="+54 9 11..."
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full h-16 bg-white/[0.03] border border-zinc-800 rounded-2xl pl-14 pr-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--product-primary)]/50 focus:bg-white/[0.05] transition-all duration-300 font-medium text-base"
                        />
                    </div>
                </div>
            </div>

            {/* Product Select */}
            <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 ml-1">Interés Principal</label>
                <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--product-primary)] transition-colors duration-300">
                        <Layers size={20} />
                    </div>
                    <select
                        required
                        name="product"
                        value={formState.product}
                        onChange={handleChange}
                        className="w-full h-16 bg-white/[0.03] border border-zinc-800 rounded-2xl pl-14 pr-12 text-white focus:outline-none focus:border-[var(--product-primary)]/50 focus:bg-white/[0.05] transition-all duration-300 font-medium text-base appearance-none cursor-pointer"
                    >
                        <option value="" disabled className="bg-[#08080A] text-gray-500">Seleccioná un servicio...</option>
                        <option value="landing" className="bg-[#08080A]">Landing Page / Web</option>
                        <option value="sistema" className="bg-[#08080A]">Sistema de Gestión</option>
                        <option value="ia" className="bg-[#08080A]">Automatización IA</option>
                        <option value="otro" className="bg-[#08080A]">Otro / Consulta General</option>
                    </select>
                    {/* Custom Chevron */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-white transition-colors">
                        <ArrowRight className="rotate-90" size={18} />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'loading'}
                style={{ backgroundColor: 'var(--product-primary)' }}
                className="w-full group relative flex items-center justify-center gap-3 text-black font-bold text-lg h-16 rounded-2xl mt-auto transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed hover:bg-[var(--product-primary)] hover:brightness-110 hover:shadow-[0_0_40px_-10px_rgba(var(--product-primary-rgb),0.5)]"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="animate-spin" size={24} />
                        <span className="tracking-wide">Procesando...</span>
                    </>
                ) : (
                    <>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="tracking-wide">Enviar Solicitud</span>
                    </>
                )}
            </button>
        </motion.form>
    );
};

export default CTASection;
