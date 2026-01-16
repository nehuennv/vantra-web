import React from 'react';
import { Globe, Megaphone, Bot, Compass } from 'lucide-react'; // Iconos más precisos

const servicesData = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    desc: "Landing pages y e-commerce en Shopify full custom con Liquid, diseñados para vender, transmitir confianza y escalar.",
    items: ["Shopify custom con Liquid", "Landing pages que convierten", "E-commerce optimizado", "Integración completa"]
  },
  {
    icon: Megaphone,
    title: "Publicidad Digital",
    desc: "Meta, Google y TikTok Ads con estrategia + psicología de venta: no buscamos clics, buscamos decisiones.",
    items: ["Meta Ads estratégico", "Google Ads optimizado", "TikTok Ads creativo", "Psicología de venta"]
  },
  {
    icon: Bot,
    title: "Automatización + IA",
    desc: "Procesos que se gestionan solos, respuestas inteligentes y datos en tiempo real para que tu negocio sea más ágil.",
    items: ["Procesos automatizados", "IA conversacional", "Datos en tiempo real", "Optimización continua"]
  },
  {
    icon: Compass,
    title: "Estrategia Integral",
    desc: "Desde la competencia hasta tu equipo de ventas: trazamos el camino y lo recorremos juntos.",
    items: ["Análisis competitivo", "Estrategia de ventas", "Roadmap completo", "Acompañamiento total"]
  }
];

const Services = () => {
  return (
    <section className="py-24 container mx-auto px-6" id="servicios">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-sm font-mono text-vantra-neon tracking-widest uppercase mb-4">El corazón de lo que ofrecemos</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          No ofrecemos servicios aislados. <br />
          <span className="text-gray-400">Construimos sistemas completos.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="group relative p-8 md:p-10 rounded-3xl bg-vantra-card border border-white/5 hover:border-vantra-neon/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col h-full"
          >
            {/* Icono */}
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-vantra-neon group-hover:text-black transition-all duration-300">
              <service.icon size={26} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-8 min-h-[80px]">
              {service.desc}
            </p>

            {/* Lista de items con check amarillo */}
            <ul className="space-y-3 mt-auto">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-vantra-neon shadow-[0_0_10px_rgba(237,242,70,0.5)]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;