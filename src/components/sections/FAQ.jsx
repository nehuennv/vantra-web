import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';

const faqItems = [
    {
        q: "¿Cuánto tiempo tarda el desarrollo de un sitio web?",
        a: "7-10 días landing, 2-4 semanas e-commerce."
    },
    {
        q: "¿Ofrecen soporte después de entregar el proyecto?",
        a: "Absolutamente. No entregamos código y desaparecemos. Ofrecemos periodos de garantía y planes de mantenimiento mensual para asegurar que tu sistema siga funcionando, actualizado y seguro."
    },
    {
        q: "¿Cómo funciona el proceso de trabajo?",
        a: "Es simple y transparente: 1. Descubrimiento (Reunión inicial), 2. Estrategia y Diseño (Propuesta visual), 3. Desarrollo (Sprints semanales), 4. Testing y Lanzamiento. Te mantenemos al tanto en cada etapa."
    },
    {
        q: "¿Puedo ver ejemplos de trabajos anteriores?",
        a: "Sí, claro. Nuestro portfolio habla por nosotros. En la reunión inicial te mostramos casos de estudio específicos similares a tu industria para que veas la calidad y los resultados."
    },
    {
        q: "¿Qué necesito para empezar un proyecto?",
        a: "Solo tu visión. Nosotros te ayudamos a definir los requerimientos técnicos, el contenido y la estructura. Si ya tenés branding y textos, genial. Si no, lo construimos juntos."
    },
    {
        q: "¿Trabajan con empresas fuera de Argentina?",
        a: "Sí, trabajamos globalmente. Tenemos clientes en USA, España y Latam. Nuestros procesos son 100% remotos y adaptados a diferentes zonas horarias y monedas."
    },
    {
        q: "¿Cuál es la inversión mínima?",
        a: "Nos enfocamos en proyectos que buscan calidad y retorno. Para desarrollos web, los proyectos suelen iniciar desde los $450 USD. Para campañas de Growth, recomendamos inversiones publicitarias que permitan testear y escalar."
    },
    {
        q: "¿Qué pasa si no me gusta el resultado?",
        a: "Trabajamos con aprobaciones por etapas. No avanzamos a desarrollo sin tu OK en el diseño. Esto minimiza riesgos y asegura que el producto final sea exactamente lo que esperabas (o mejor)."
    },
    {
        q: "¿Ofrecen garantías en campañas?",
        a: "En marketing digital nadie honesto puede garantizar resultados exactos, pero garantizamos el método: testeo científico, optimización constante y transparencia total en los datos. No gastamos presupuesto sin sentido."
    },
    {
        q: "¿Cómo manejan los pagos?",
        a: "Generalmente trabajamos con un anticipo del 50% para iniciar y el 50% contra entrega final. Aceptamos transferencias bancarias, USDT (Crypto) y plataformas internacionales como Payoneer."
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
                        <p className="pb-8 text-gray-400 leading-relaxed max-w-3xl font-medium">
                            {item.a}
                        </p>
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
