import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const GlobalAuroraBackground = () => {
    const { scrollYProgress } = useScroll();

    // Physics ajustadas para un movimiento más "brusco" y reactivo (High Stiffness, Low Damping)
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,       // Muy ligero para arrancar rápido
        stiffness: 120,   // Alta tensión para seguir el scroll de cerca
        damping: 20,     // Menor amortiguación para frenar más seco
        restDelta: 0.001
    });

    // Mapeo Ampliado: Rotación completa (360deg) para que se mueva mucho más al hacer scroll
    const rotate = useTransform(smoothProgress, [0, 1], ['0deg', '360deg']);

    // Parallax vertical aumentado
    const y = useTransform(smoothProgress, [0, 1], ['0%', '25%']);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#3A3939] pointer-events-none">

            <motion.div
                style={{
                    rotate,
                    y,
                }}
                className="absolute top-[-50%] left-[-50%] w-[200vw] h-[200vh]"
            >
                <div
                    className="w-full h-full blur-[140px] md:blur-[200px] opacity-70"
                    style={{
                        background: `
                    conic-gradient(
                        from 0deg at 50% 50%,
                        #3A3939 0deg,
                        #5C52F3 60deg,
                        #E6F7EF 120deg,
                        #E3EC63 180deg,
                        #E6F7EF 240deg,
                        #5C52F3 300deg,
                        #3A3939 360deg
                    )
                `
                    }}
                />
            </motion.div>

            {/* NOISE OVERLAY */}
            <div className="absolute inset-0 w-full h-full opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        </div>
    );
};

export default GlobalAuroraBackground;
