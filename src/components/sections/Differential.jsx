import React from 'react';
import { Zap, TrendingUp, Users, HeartHandshake, ArrowRight } from 'lucide-react';

const pillars = [
    {
        icon: Zap,
        title: "Velocidad de ejecución",
        desc: "Proyectos en producción en semanas, no meses. Metodología ágil con entregas iterativas."
    },
    {
        icon: TrendingUp,
        title: "ROI medible y visible",
        desc: "Dashboards en tiempo real. Cada peso invertido se traduce en métricas concretas."
    },
    {
        icon: Users,
        title: "Equipo integrado",
        desc: "Nos metemos en tu negocio como si fuera nuestro. Estrategia, desarrollo y ejecución bajo un mismo techo."
    },
    {
        icon: HeartHandshake,
        title: "Soporte estratégico",
        desc: "Más que asistencia técnica: acompañamiento continuo para optimizar y escalar tus resultados."
    }
];

const Differential = () => {
    return (
        <section className="relative py-24 bg-transparent">
            {/* Grid background subtle effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_10%,transparent_100%)] pointer-events-none -z-10" />

            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="mb-20 md:text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
                        Nuestra ventaja diferencial. <span className="text-gray-500">Por qué VANTRA es tu mejor decisión.</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light">
                        No somos una agencia más. Somos el equipo técnico y estratégico que te faltaba.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-300">
                            <div className="mb-6 inline-flex p-4 rounded-xl bg-[#EDF246]/10 text-[#EDF246] group-hover:scale-110 transition-transform duration-300">
                                <pillar.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-display text-xl text-white mb-4 group-hover:text-[#EDF246] transition-colors font-bold">
                                {pillar.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <a href="#" className="inline-flex items-center gap-3 text-white font-display text-lg hover:text-[#EDF246] transition-colors border-b border-transparent hover:border-[#EDF246] pb-1">
                        ¿Listo para llevar tu negocio al siguiente nivel? Hablemos de tu proyecto
                        <ArrowRight size={20} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Differential;
