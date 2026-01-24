import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';

const faqItems = [
    {
        q: "¿Qué es Vantra y qué tipo de empresa somos?",
        a: (
            <>
                <p className="mb-4">Vantra es una empresa SaaS especializada en automatización con inteligencia artificial para negocios que escalan.</p>
                <p className="mb-4">Desarrollamos productos propios (agentes de IA, sistemas de reservas, dashboards, CRM y automatizaciones) y, cuando el negocio lo requiere, diseñamos y desarrollamos soluciones totalmente a medida, adaptadas a problemáticas específicas.</p>
                <p>Nuestro enfoque no es vender software estándar, sino resolver necesidades reales de cada negocio con tecnología aplicada.</p>
            </>
        )
    },
    {
        q: "¿Vantra ofrece productos cerrados o soluciones personalizadas?",
        a: (
            <>
                <p className="mb-4">Vantra trabaja con un modelo híbrido y flexible:</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Contamos con productos propios listos para implementar.</li>
                    <li>Cuando la operación del cliente lo exige, desarrollamos funcionalidades o sistemas a medida, específicos para su flujo de trabajo.</li>
                </ul>
                <p>Esto nos permite combinar rapidez, estabilidad y personalización, sin forzar al negocio a adaptarse a un software genérico.</p>
            </>
        )
    },
    {
        q: "¿Qué tipo de soluciones desarrolla Vantra según la necesidad del cliente?",
        a: (
            <>
                <p className="mb-4">Desarrollamos soluciones tecnológicas en función de la problemática o necesidad puntual del negocio, no de un catálogo cerrado.</p>
                <p className="mb-4">Según el caso, Vantra puede desarrollar e integrar:</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Agentes de IA en WhatsApp para ventas, reservas o atención.</li>
                    <li>Automatizaciones comerciales y operativas.</li>
                    <li>Dashboards y CRM personalizados.</li>
                    <li>Sistemas web o software interno a medida.</li>
                    <li>Soluciones SaaS específicas por industria.</li>
                    <li>Estrategias de paid media integradas al sistema.</li>
                </ul>
                <p>Cada solución se diseña con un único objetivo: ordenar, automatizar y escalar la operación.</p>
            </>
        )
    },
    {
        q: "¿Cómo es el proceso de implementación de una solución Vantra?",
        a: (
            <>
                <p className="mb-4">El proceso comienza con un diagnóstico profundo, donde analizamos cómo funciona hoy el negocio y qué lo está limitando.</p>
                <p className="mb-2">A partir de eso:</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Definimos si se implementan productos existentes, desarrollos a medida o una combinación de ambos.</li>
                    <li>Diseñamos la arquitectura de la solución.</li>
                    <li>Desarrollamos, integramos y configuramos el sistema.</li>
                    <li>Probamos y ajustamos antes de salir en producción.</li>
                </ul>
                <p>El tiempo promedio de implementación es de hasta 15 días hábiles, dependiendo del alcance del desarrollo.</p>
            </>
        )
    },
    {
        q: "¿Vantra solo entrega tecnología o acompaña el crecimiento del negocio?",
        a: (
            <>
                <p className="mb-4">Vantra no solo desarrolla tecnología.</p>
                <p className="mb-4">Acompañamos al negocio con soporte, mantenimiento y evolución continua del sistema, asegurando que la solución siga siendo eficiente a medida que la operación crece o cambia.</p>
                <p>La automatización no reemplaza personas: libera tiempo, reduce errores y permite que el negocio sea más previsible y escalable.</p>
            </>
        )
    }
];

const FAQItem = ({ item, isOpen, toggle }) => {
    return (
        <div className="border-b border-white/5 last:border-none">
            <button
                onClick={toggle}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-[#EDF246]' : 'text-white group-hover:text-gray-300'}`}>
                    {item.q}
                </span>
                <span className={`p-2 rounded-full border border-white/10 transition-all ${isOpen ? 'bg-[#EDF246] text-black rotate-180' : 'bg-transparent text-white group-hover:border-white/30'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-gray-400 leading-relaxed max-w-3xl font-medium">
                            {item.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="relative py-24 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">

                <h2 className="font-display text-4xl md:text-5xl text-white mb-16 text-center">
                    ¿Tenés dudas? <span className="text-[#A0E9FF]">Te las resolvemos.</span>
                </h2>

                <Card className="!p-8 md:!p-12">
                    <div className="flex flex-col">
                        {faqItems.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                isOpen={openIndex === index}
                                toggle={() => setOpenIndex(prev => prev === index ? null : index)}
                            />
                        ))}
                    </div>
                </Card>

                <div className="mt-16 text-center">
                    <a href="https://wa.me/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <span>¿No encontraste tu respuesta? Hablemos directamente.</span>
                        <strong className="text-[#EDF246] border-b border-[#EDF246] pb-0.5">Escribinos por WhatsApp</strong>
                        <ArrowRight size={16} className="text-[#EDF246]" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
