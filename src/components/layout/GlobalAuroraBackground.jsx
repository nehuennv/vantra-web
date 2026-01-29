import React from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import BackgroundImage from '../../assets/complete-background.png';
import MedicalImage from '../../assets/complete-background-medical.png';

const GlobalAuroraBackground = () => {
    const { scrollYProgress } = useScroll();
    const location = useLocation();

    // Soft physics for the rotation
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.5,
        stiffness: 50,
        damping: 40,
        restDelta: 0.001
    });

    // Slow, seamless rotation linked to scroll (Increased to 45deg for more dynamism, starts at -15deg)
    const rotate = useTransform(smoothProgress, [0, 1], ['-15deg', '45deg']);

    // Zoom linked to scroll (To prevent edges from showing during rotation)
    const scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

    // Passive breathing animation
    const breatheAnimation = {
        scale: [1, 1.05, 1],
        opacity: [0.6, 0.7, 0.6],
        transition: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    // Determine which background to show
    const isMedPage = location.pathname === '/med';
    const activeImage = isMedPage ? MedicalImage : BackgroundImage;
    const activeKey = isMedPage ? 'med-bg' : 'home-bg';

    return (
        // OPTIMIZATION FIXED: Use Flexbox for centering to avoid transform conflicts
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050507] pointer-events-none flex items-center justify-center">

            {/* DARK BASE ATMOSPHERE */}
            <div className="absolute inset-0 bg-[#050507]" />

            {/* BAKED ASSET LAYER */}
            {/* Increased to 135vmax + Scroll Zoom to ensure no corners are visible during rotation */}
            <motion.div
                style={{
                    rotate,
                    scale, // Dynamic Zoom on Scroll
                    willChange: 'transform',
                }}
                className="relative w-[135vmax] h-[135vmax] shrink-0 transform-gpu"
            >
                {/* Breathing Animation Wrapper */}
                <motion.div
                    animate={breatheAnimation}
                    className="w-full h-full relative"
                >
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={activeKey}
                            src={activeImage}
                            alt=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            {/* NOISE OVERLAY */}
            <div className="absolute inset-0 w-full h-full opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

        </div>
    );
};

export default GlobalAuroraBackground;
