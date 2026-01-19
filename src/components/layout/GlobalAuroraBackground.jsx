import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const GlobalAuroraBackground = () => {
    // Scroll handling for subtle "breathing" and movement
    const { scrollYProgress } = useScroll();

    // Smooth physics for organic feel (High damping = heavy/slow)
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.5,
        stiffness: 50,
        damping: 40,
        restDelta: 0.001
    });

    // Slow rotation linked to scroll, but very small range to avoid dizzy effect
    const rotate = useTransform(smoothProgress, [0, 1], ['0deg', '90deg']);

    // Subtle parallax
    const y = useTransform(smoothProgress, [0, 1], ['0%', '20%']);

    // Opacity pulse (Breathing effect) - Independent of scroll
    const breathe = {
        opacity: [0.6, 0.8, 0.6],
        scale: [1, 1.15, 1],
        transition: {
            duration: 15, // A bit faster (was 20)
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050507] pointer-events-none">

            {/* ATMOSPHERE LAYER (Static Dark Base) */}
            <div className="absolute inset-0 bg-[#050507]" />

            {/* AURORA LAYER */}
            <motion.div
                style={{ rotate, y }}
                animate={breathe}
                className="absolute top-[-50%] left-[-50%] w-[200vw] h-[200vh]"
            >
                <div
                    className="w-full h-full blur-[150px] opacity-80"
                    style={{
                        background: `conic-gradient(
                            from 0deg at 50% 50%,
                            #050507 0deg,
                            #050507 100deg,
                            #1E3A8A 160deg,
                            #050507 200deg,
                            #A0E9FF 240deg,
                            #050507 280deg,
                            #EDF246 320deg,
                            #050507 360deg
                        )`
                    }}
                />
            </motion.div>

            {/* LIGHT SPOTS (Ambient Light) */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#A0E9FF]/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EDF246]/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* NOISE LAYER (Texture) */}
            <div className="absolute inset-0 w-full h-full opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        </div>
    );
};

export default GlobalAuroraBackground;
