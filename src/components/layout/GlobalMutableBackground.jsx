import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const GlobalMutableBackground = () => {
    const containerRef = useRef(null);

    // 1. Hook de Scroll Global
    const { scrollYProgress } = useScroll();

    // 2. Suavizado de Physics (Mass & Damping para feel "pesado" y premium)
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.5,
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    // --- LOGICA DE ANIMACIÓN (ORQUESTACIÓN) ---

    // ORBE 1: NEON (#EDF246) - La Energía Inicial
    // Comienza arriba al centro. Al bajar, se desplaza hacia abajo y se desvanece suavemente.
    const neonY = useTransform(smoothProgress, [0, 0.4], ['-20%', '40%']);
    const neonOpacity = useTransform(smoothProgress, [0, 0.3, 0.5], [0.6, 0.4, 0]);
    const neonScale = useTransform(smoothProgress, [0, 0.4], [1, 1.5]);

    // ORBE 2: ICE BLUE (#A0E9FF) - La Confianza Tecnológica (Servicios/Ecosistema)
    // Entra desde la derecha cuando el usuario hace scroll hacia los servicios.
    const blueX = useTransform(smoothProgress, [0.1, 0.4], ['100%', '20%']);
    const blueOpacity = useTransform(smoothProgress, [0.1, 0.4, 0.7], [0, 0.5, 0]);
    const blueScale = useTransform(smoothProgress, [0.3, 0.6], [0.8, 1.2]);

    // ORBE 3: DEEP BLUE (#1E3A8A) - Profundidad y Contraste
    // Siempre presente pero muy sutil en el fondo, cobra vida al final para dar seriedad.
    const deepOpacity = useTransform(smoothProgress, [0.5, 0.9], [0.1, 0.4]);
    const deepY = useTransform(smoothProgress, [0.5, 1], ['100%', '50%']);


    return (
        <div className="fixed inset-0 z-[-1] bg-[#050507] overflow-hidden pointer-events-none">

            {/* --- SCENE COMPOSITION --- */}

            {/* 1. NEON ORB (Hero Focus) */}
            <motion.div
                style={{
                    top: neonY,
                    left: '50%',
                    x: '-50%',
                    opacity: neonOpacity,
                    scale: neonScale,
                    willChange: "transform"
                }}
                className="absolute w-[80vh] h-[80vh] rounded-full bg-[#EDF246] blur-[150px] opacity-60"
            />

            {/* 2. ICE BLUE ORB (Side Entry) */}
            <motion.div
                style={{
                    top: '30%',
                    right: '0%',
                    x: blueX,
                    opacity: blueOpacity,
                    scale: blueScale,
                    willChange: "transform"
                }}
                className="absolute w-[70vh] h-[70vh] rounded-full bg-[#A0E9FF] blur-[180px] opacity-0"
            />

            {/* 3. DEEP BLUE BASE (Bottom Anchoring) */}
            <motion.div
                style={{
                    bottom: '-20%',
                    left: '20%',
                    y: deepY, // Moves up slightly at the end
                    opacity: deepOpacity,
                    willChange: "transform"
                }}
                className="absolute w-[100vh] h-[80vh] rounded-full bg-[#1E3A8A] blur-[200px]"
            />

            {/* 4. NOISE GRAIN OVERLAY (Cinema Feel) 
          Esto unifica los degradados y evita el "banding" en pantallas malas.
      */}
            <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* 5. VIGNETTE (Focus Center) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050507_120%)]" />

        </div>
    );
};

export default GlobalMutableBackground;