import React, { useState } from 'react';
import { ArrowUpRight, Code2, Cpu, Globe, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "WEB DEVELOPMENT",
    category: "Engineering",
    description: "No templates. Solo código a medida. Construimos plataformas Shopify y Webs corporativas que escalan, convierten y resisten el futuro.",
    tags: ["Shopify Liquid", "React Systems", "Performance First"],
    icon: Code2
  },
  {
    id: "02",
    title: "GROWTH ADS",
    category: "Acquisition",
    description: "Dejamos de buscar clics para buscar rentabilidad. Estructuras de campañas científicas en Meta y Google con creativos de alto impacto.",
    tags: ["Meta Ads", "Google Ads", "Conversion API"],
    icon: Globe
  },
  {
    id: "03",
    title: "AUTO & AI",
    category: "Intelligence",
    description: "Reemplazamos tareas humanas repetitivas con sistemas autónomos. Chatbots que cierran ventas y CRMs que se actualizan solos.",
    tags: ["OpenAI API", "Lead Scoring", "Auto-CRM"],
    icon: Cpu
  },
  {
    id: "04",
    title: "FULL STRATEGY",
    category: "Holistic",
    description: "El pegamento que une todo. Analizamos tu competencia, diseñamos tu oferta y acompañamos a tu equipo comercial.",
    tags: ["Market Fit", "Offer Design", "Sales Ops"],
    icon: LineChart
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <div className="group relative w-full min-h-[400px] md:min-h-[500px] border-b border-r border-white/10 p-8 md:p-12 flex flex-col justify-between overflow-hidden hover:bg-[#1A1A18] transition-colors duration-500">

      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EDF246]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon Background - Giant & Abstract */}
      <service.icon
        strokeWidth={1}
        className="absolute -right-10 -bottom-10 w-64 h-64 text-white/[0.02] group-hover:text-[#EDF246]/10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 ease-out z-0"
      />

      {/* Top Header: ID & Category */}
      <div className="relative z-10 flex justify-between items-start w-full">
        <span className="font-mono text-xs text-[#EDF246] border border-[#EDF246]/30 px-3 py-1 rounded-full uppercase tracking-wider">
          {service.category}
        </span>
        <span className="font-display text-5xl md:text-6xl text-white/5 font-bold group-hover:text-white/20 transition-colors">
          {service.id}
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-auto">
        {/* Title with "Fill" animation */}
        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] mb-6 text-white group-hover:text-[#EDF246] transition-colors duration-300">
          {service.title}
        </h3>

        <p className="font-raleway text-lg text-gray-400 max-w-md mb-8 group-hover:text-gray-200 transition-colors">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
          {service.tags.map(tag => (
            <span key={tag} className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
              {tag}
            </span>
          ))}
        </div>

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
    <section className="relative bg-[#121211] border-t border-white/10" id="servicios">

      {/* Section Header - Compact & Horizontal */}
      <div className="px-6 md:px-12 py-12 md:py-16 border-b border-white/10 bg-[#121211]">
        <div className="container mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-[#EDF246] font-mono text-xs tracking-[0.3em] uppercase mb-3">
              Nuestro Expertise
            </h2>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.9]">
              Soluciones <span className="text-outline-transparent">Integrales</span>
            </h2>
          </div>


        </div>
      </div>

      {/* GRID LAYOUT - 2x2 on Desktop, 1 Col on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-white/10">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>



    </section>
  );
};

export default Services;