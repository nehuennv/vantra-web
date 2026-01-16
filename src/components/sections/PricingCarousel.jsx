import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const pricingData = [
    {
        id: 1,
        category: "1 de 5",
        title: "E-commerce Shopify",
        desc: "Tienda online profesional con diseño custom y funcionalidades completas.",
        priceRange: "$850 - $1200",
        features: ["Número de productos", "Integraciones de pago", "Funciones personalizadas", "Complejidad del diseño"]
    },
    {
        id: 2,
        category: "2 de 5",
        title: "Landing Page",
        desc: "Página optimizada para conversión con diseño impactante y copy estratégico.",
        priceRange: "$450 - $650",
        features: ["Número de secciones", "Formularios", "Integraciones", "Animaciones custom"]
    },
    {
        id: 3,
        category: "3 de 5",
        title: "Página de Contacto",
        desc: "Página profesional con formularios inteligentes e información de contacto.",
        priceRange: "$150 - $350",
        features: ["Formularios complejos", "Mapas interactivos", "Integraciones CRM", "Funciones especiales"]
    },
    {
        id: 4,
        category: "4 de 5",
        title: "CMS / Admin Panel",
        desc: "Sistema de gestión de contenido personalizado para tu negocio.",
        priceRange: "$800+",
        features: ["Funciones de gestión", "Roles de usuario", "Integraciones", "Complejidad del sistema"]
    },
    {
        id: 5,
        category: "5 de 5",
        title: "Software Personalizado",
        desc: "Aplicación web diseñada específicamente para las necesidades de tu negocio.",
        priceRange: "$1350+",
        features: ["Funcionalidades requeridas", "Integraciones API", "Base de datos", "Complejidad técnica"]
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
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h2 className="text-sm font-mono text-vantra-neon tracking-widest uppercase mb-4">La experiencia diferencial</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        ¿Querés saber cuánto puede costar?
                    </h3>
                    <p className="text-xl text-gray-400">
                        Te lo decimos ahora, <span className="text-white font-semibold">sin vueltas.</span>
                    </p>
                </div>

                {/* CAROUSEL AREA */}
                <div className="relative max-w-4xl mx-auto">

                    {/* Main Card */}
                    <div className="bg-vantra-card border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[500px] flex flex-col justify-center shadow-2xl">

                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-vantra-neon/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                {/* Slide Count */}
                                <div className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-wider">
                                    {pricingData[currentIndex].category}
                                </div>

                                {/* Title & Desc */}
                                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {pricingData[currentIndex].title}
                                </h4>
                                <p className="text-lg text-gray-400 mb-8 max-w-xl">
                                    {pricingData[currentIndex].desc}
                                </p>

                                {/* Pricing Box */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 inline-block backdrop-blur-sm">
                                    <span className="text-sm text-gray-400 block mb-1">Rango estimado (USD)</span>
                                    <span className="text-4xl md:text-5xl font-bold text-vantra-neon tracking-tight">
                                        {pricingData[currentIndex].priceRange}
                                    </span>
                                </div>

                                {/* Features List */}
                                <div className="mb-8">
                                    <p className="text-sm text-gray-500 mb-4 uppercase font-semibold">El precio puede variar según:</p>
                                    <div className="flex flex-wrap gap-3">
                                        {pricingData[currentIndex].features.map((feat, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="w-full md:w-auto px-8 py-4 rounded-full bg-vantra-neon text-black font-bold hover:bg-vantra-neon/90 transition-all shadow-[0_0_20px_rgba(237,242,70,0.2)]">
                                    Agendar reunión con este presupuesto
                                </button>

                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons (Absolute Positioned) */}
                        <div className="absolute bottom-8 right-8 flex gap-3">
                            <button onClick={prevSlide} className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                                <ArrowLeft size={20} />
                            </button>
                            <button onClick={nextSlide} className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </div>

                    </div>

                    {/* Disclaimer Footer */}
                    <div className="mt-8 text-center max-w-2xl mx-auto">
                        <p className="text-sm text-gray-500 leading-relaxed">
                            <span className="text-vantra-neon font-bold">Transparencia total:</span> Este es un presupuesto estimado.
                            En la reunión definimos los detalles específicos y ajustamos el precio final según tus necesidades exactas.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PricingCarousel;