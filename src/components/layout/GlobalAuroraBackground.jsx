import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import BackgroundImage from '../../assets/complete-background.png';

const GlobalAuroraBackground = () => {
    const { scrollYProgress } = useScroll();

    // Soft physics for the rotation
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.5,
        stiffness: 50,
        damping: 40,
        restDelta: 0.001
    });

    // Slow, seamless rotation linked to scroll (Increased to 45deg for more dynamism, starts at -15deg)
    const rotate = useTransform(smoothProgress, [0, 1], ['-15deg', '45deg']);

    // Passive breathing animation
    const breatheAnimation = {
        scale: [1, 1.05, 1], // Reduced breathing range for stability
        opacity: [0.6, 0.7, 0.6],
        transition: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        // OPTIMIZATION FIXED: Use Flexbox for centering to avoid transform conflicts
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050507] pointer-events-none flex items-center justify-center">

            {/* DARK BASE ATMOSPHERE */}
            <div className="absolute inset-0 bg-[#050507]" />

            {/* BAKED ASSET LAYER */}
            {/* Reduced from 150vmax to 110vmax to "zoom out" and show more air */}
            <motion.div
                style={{
                    rotate,
                    willChange: 'transform',
                }}
                animate={breatheAnimation}
                className="relative w-[110vmax] h-[110vmax] shrink-0 transform-gpu"
            >
                <img
                    src={BackgroundImage}
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                />
            </motion.div>

            {/* NOISE OVERLAY */}
            <div className="absolute inset-0 w-full h-full opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

        </div>
    );
};

export default GlobalAuroraBackground;
