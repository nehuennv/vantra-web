import React from 'react';
import { ArrowUpRight, Code2, Cpu, Globe, LineChart } from 'lucide-react';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Desarrollo & E-com",
    intro: "Conversión",
    description: "Creamos Landing Pages de alto impacto y Tiendas Shopify diseñadas para vender. Sin themes genéricos, pura performance.",
    checklist: ["Tiendas Shopify (Liquid)", "Landings de Alta Conversión", "Webs Corporativas", "Optimización Speed"],
    icon: Code2
  },
  {
    id: "02",
    title: "Publicidad Digital",
    intro: "Decisiones",
    description: "Meta y Google Ads con estrategia + psicología de venta. No buscamos clics baratos, buscamos clientes reales.",
    checklist: ["Meta Ads Estratégico", "Google Ads Search/Shopping", "Creativos de Alto Impacto", "Tracking Avanzado"],
    icon: Globe
  },
  {
    id: "03",
    title: "Automatización IA",
    intro: "Agilidad",
    description: "Procesos que se gestionan solos. Chatbots que cierran ventas, CRMs automáticos y reportes en tiempo real.",
    checklist: ["Chatbots IA", "Automatización de Make/Zapier", "CRMs Integrados", "Sincronización de Datos"],
    icon: Cpu
  },
  {
    id: "04",
    title: "Growth Partner",
    intro: "Crecimiento",
    description: "Tu socio estratégico a largo plazo. Analizamos métricas, optimizamos el embudo y escalamos lo que funciona.",
    checklist: ["Consultoría Mensual", "Análisis de Datos", "Optimización de Embudo", "Estrategia Global"],
    icon: LineChart
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
};

const Services = () => {
  return (
    <section className="relative py-20" id="servicios">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 md:px-12 mb-16"
      >
        <h2 className="text-[#EDF246] text-xs tracking-[0.3em] uppercase mb-6 font-bold">
          Nuestro Stack
        </h2>
        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.1]">
          Sistemas completos. <br />
          <span className="text-gray-400">Resultados predecibles.</span>
        </h3>
      </motion.div>

      {/* GRID 2x2 */}
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="p-8 md:p-12 min-h-[400px] flex flex-col justify-between group">

                {/* Top Icons */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-black/80 border border-white/10 text-[#EDF246]">
                    <service.icon size={32} />
                  </div>
                  <span className="text-xs font-bold text-gray-500 border border-white/10 px-3 py-1 rounded-full bg-black/40">
                    {service.intro}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-display text-3xl text-white mb-4 group-hover:text-[#EDF246] transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Checklist Custom */}
                  <div className="space-y-2 mb-8 border-t border-white/10 pt-6">
                    {service.checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1 h-1 bg-gray-500 rounded-full" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons / Actions */}
                <div className="mt-auto pt-4 flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                  Ver Detalles <ArrowUpRight className="text-[#EDF246]" />
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Services;