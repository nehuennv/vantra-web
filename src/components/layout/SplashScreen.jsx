import React, { useEffect, useState } from 'react';
import { motion, useMotionTemplate, useTransform, useMotionValue, animate } from 'framer-motion';
// CAMBIO: Importamos el logo completo como pediste
import LogoCompleto from '../../assets/logo/logo-completo.svg';

const SplashScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const progressMv = useMotionValue(0);

    // Mapeo de efectos visuales vinculados al progreso
    const blurAmount = useTransform(progressMv, [0, 100], [60, 100]); 
    const coreScale = useTransform(progressMv, [0, 100], [0.8, 1.2]); 
    const coreOpacity = useTransform(progressMv, [0, 100], [0.2, 0.5]); 
    const logoScale = useTransform(progressMv, [0, 100], [0.95, 1]); // Sutil zoom in del logo

    useEffect(() => {
        // Carga fluida de 0 a 100
        const controls = animate(progressMv, 100, {
            duration: 2.5,
            ease: "easeInOut",
            onUpdate: (latest) => setProgress(Math.floor(latest)),
            onComplete: () => {
                setTimeout(onComplete, 400);
            }
        });

        return () => controls.stop();
    }, [onComplete, progressMv]);

    return (
        <motion.div
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050507] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                filter: "blur(10px)",
                transition: { duration: 0.8, ease: "easeInOut" } 
            }}
        >
            {/* --- FONDO: THE LIVING CORE --- */}
            {/* Mantenemos el núcleo que te gustó, girando suavemente detrás */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                    style={{ 
                        scale: coreScale,
                        opacity: coreOpacity,
                    }}
                    className="relative w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw]"
                >
                    <div className="absolute inset-0 bg-[#1E3A8A] rounded-full blur-[100px] opacity-40" />
                    
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ filter: useMotionTemplate`blur(${blurAmount}px)` }}
                        className="absolute inset-0 rounded-full opacity-60"
                    >
                        {/* El degradado cónico fluido */}
                        <div className="w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,#050507_0deg,#A0E9FF_120deg,#050507_180deg,#EDF246_260deg,#050507_360deg)]" />
                    </motion.div>
                </motion.div>
            </div>

            {/* --- CONTENIDO CENTRAL --- */}
            <div className="relative z-10 flex flex-col items-center">
                
                {/* 1. LOGO COMPLETO */}
                <motion.div
                    style={{ scale: logoScale }}
                    initial={{ opacity: 0, filter: "blur(12px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative mb-6"
                >
                    {/* Ancho controlado para que se vea elegante en desktop y mobile */}
                    <img 
                        src={LogoCompleto} 
                        alt="Vantra" 
                        className="w-48 md:w-64 h-auto relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
                    />
                    
                    {/* Brillo trasero específico para el logo para separarlo del fondo */}
                    <div className="absolute inset-0 bg-white/5 blur-xl -z-10 rounded-full scale-110" />
                </motion.div>

                {/* 2. LOADER "FILAMENTO" (Alineado al ancho del logo visualmente) */}
                <div className="w-48 md:w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div 
                        className="absolute top-0 left-0 h-full bg-[#EDF246] shadow-[0_0_15px_#EDF246]" 
                        style={{ width: `${progress}%` }}
                    />
                </div>

            </div>

        </motion.div>
    );
};

export default SplashScreen;