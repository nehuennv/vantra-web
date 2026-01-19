import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const GlobalSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for that premium feel
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Dynamic mask: Iluminates 400px around cursor
    const spotlightMask = useMotionTemplate`radial-gradient(400px circle at ${smoothX}px ${smoothY}px, white, transparent)`;

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0 bg-transparent"
                style={{ maskImage: spotlightMask, WebkitMaskImage: spotlightMask }}
            >
                {/* Tech Dot Matrix Pattern - Increased visibility */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-30" />
            </motion.div>
        </div>
    );
};

export default GlobalSpotlight;
