import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const pricingData = [
    {
        id: 1,
        category: "1 de 5",
        title: "E-commerce Shopify",
        priceRange: "$850 - $1200 USD",
        features: ["N° productos", "Integraciones pago", "Funciones custom"]
    },
    {
        id: 2,
        category: "2 de 5",
        title: "Landing Page",
        priceRange: "$450 - $650 USD",
        features: ["N° secciones", "Formularios", "Animaciones"]
    },
    {
        id: 3,
        category: "3 de 5",
        title: "Página de Contacto",
        priceRange: "$150 - $350 USD",
        features: ["Mapas", "CRM", "Funciones especiales"]
    },
    {
        id: 4,
        category: "4 de 5",
        title: "CMS / Admin Panel",
        priceRange: "$800+ USD",
        features: ["Roles usuario", "Integraciones", "Complejidad"]
    },
    {
        id: 5,
        category: "5 de 5",
        title: "Software Personalizado",
        priceRange: "$1350+ USD",
        features: ["API", "Base de datos", "Complejidad técnica"]
    }
];

const PricingCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === pricingData.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? pricingData.length - 1 : prev - 1));
    };

    return (
        <section className="py-20 relative overflow-hidden bg-transparent">
            {/* We maintain transparency by not setting a bg color on section */}
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h2 className="text-sm font-mono text-[#EDF246] tracking-widest uppercase mb-4">La experiencia diferencial</h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
                        ¿Querés saber cuánto puede costar tu proyecto?
                    </h3>
                    <p className="text-xl text-gray-400">
                        Te lo decimos ahora, <span className="text-white font-semibold">sin vueltas. Transparencia total.</span>
                    </p>
                </div>

                {/* CAROUSEL AREA */}
                <div className="relative max-w-4xl mx-auto">

                    {/* Main Card */}
                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[450px] flex flex-col justify-center shadow-[0_0_50px_rgba(0,0,0,0.3)]">

                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#EDF246]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                {/* Slide Count */}
                                <div className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-wider">
                                    {pricingData[currentIndex].category}
                                </div>

                                {/* Title */}
                                <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                                    {pricingData[currentIndex].title}
                                </h4>

                                {/* Pricing Box */}
                                <div className="inline-block mb-8">
                                    <span className="text-5xl md:text-6xl font-bold text-[#A0E9FF] tracking-tight">
                                        {pricingData[currentIndex].priceRange}
                                    </span>
                                </div>

                                {/* Features List */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {pricingData[currentIndex].features.map((feat, i) => (
                                        <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-mono text-gray-300">
                                            {feat}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button className="w-full md:w-auto px-8 py-4 rounded-full bg-[#EDF246] text-black font-bold hover:bg-[#EDF246]/90 transition-all shadow-[0_0_20px_rgba(237,242,70,0.2)] uppercase text-sm tracking-wide">
                                    Agendar reunión con este presupuesto
                                </button>

                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons (Absolute Positioned) */}
                        <div className="absolute bottom-12 right-12 flex gap-3">
                            <button onClick={prevSlide} className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                                <ArrowLeft size={20} />
                            </button>
                            <button onClick={nextSlide} className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </div>

                    </div>

                    {/* Disclaimer Footer */}
                    <div className="mt-8 text-center max-w-2xl mx-auto">
                        <p className="text-sm text-gray-500 leading-relaxed font-mono">
                            <span className="text-[#EDF246] font-bold">Transparencia total:</span> Este es un presupuesto estimado. En la reunión definimos los detalles específicos...
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PricingCarousel;