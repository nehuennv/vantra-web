import React from 'react';
import { ArrowUpRight, Code2, Cpu, Globe, LineChart } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Desarrollo Web & E-commerce",
    intro: "(Conversión)",
    description: "Creamos Landing Pages de alto impacto y Tiendas Shopify personalizadas (Liquid) diseñadas para vender y escalar sin límites.",
    checklist: ["E-commerce Shopify (Expertos)", "Landing Pages de Alta Conversión", "Desarrollo Web a Medida", "Optimización de Velocidad"],
    icon: Code2
  },
  {
    id: "02",
    title: "Publicidad Digital",
    intro: "(Decisiones)",
    description: "Meta, Google y TikTok Ads con estrategia + psicología de venta: no buscamos clics, buscamos decisiones.",
    checklist: ["Meta Ads estratégico", "Google Ads optimizado", "TikTok Ads creativo", "Psicología de venta"],
    icon: Globe
  },
  {
    id: "03",
    title: "Automatización + IA",
    intro: "(Agilidad)",
    description: "Procesos que se gestionan solos, respuestas inteligentes y datos en tiempo real para que tu negocio sea más ágil.",
    checklist: ["Procesos automatizados", "IA conversacional", "Datos en tiempo real", "Optimización continua"],
    icon: Cpu
  },
  {
    id: "04",
    title: "Estrategia Integral",
    intro: "(Crecimiento)",
    description: "Desde la competencia hasta tu equipo de ventas: trazamos el camino y lo recorremos juntos.",
    checklist: ["Análisis competitivo", "Estrategia de ventas", "Roadmap completo", "Acompañamiento total"],
    icon: LineChart
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative w-full border-b border-r border-white/10 p-8 md:p-12 flex flex-col justify-between overflow-hidden hover:bg-[#1A1A18] transition-colors duration-500">

      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDF246]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon Background - Giant & Abstract */}
      <service.icon
        strokeWidth={1}
        className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.02] group-hover:text-[#EDF246]/10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 ease-out z-0"
      />

      {/* Top Header: ID & Title */}
      <div className="relative z-10 w-full mb-8">
        <div className="flex justify-between items-start mb-4">
          <span className="font-display text-4xl md:text-5xl text-white/10 font-bold group-hover:text-[#EDF246]/20 transition-colors">
            {service.id}
          </span>
          <div className="flex items-center gap-2 text-[#A0E9FF] bg-[#A0E9FF]/10 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
            {service.intro}
          </div>
        </div>

        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.9] text-white group-hover:text-[#EDF246] transition-colors duration-300">
          {service.title}
        </h3>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-auto">
        <p className="font-sans text-base text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors">
          {service.description}
        </p>

        {/* Checklist */}
        <ul className="grid grid-cols-1 gap-2 mb-8">
          {service.checklist.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-500 font-mono group-hover:text-[#A0E9FF] transition-colors">
              <span className="w-1.5 h-1.5 bg-[#EDF246] rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3 text-white font-display uppercase tracking-widest text-sm group-hover:text-[#EDF246] transition-colors cursor-pointer">
          <span className="border-b border-transparent group-hover:border-[#EDF246] transition-all">Ver Detalles</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>

    </div>
  );
};

const Services = () => {
  return (
    <section className="relative border-t border-white/10" id="servicios">

      {/* Section Header */}
      <div className="px-6 md:px-12 py-16 md:py-24 border-b border-white/10">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-[#EDF246] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              El corazón de lo que ofrecemos
            </h2>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
              No ofrecemos servicios aislados. <br className="hidden md:block" />
              <span className="text-gray-500">Construimos sistemas completos que hacen crecer tu negocio.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* GRID LAYOUT - 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-white/10">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
};

export default Services;