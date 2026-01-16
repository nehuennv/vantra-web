import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const GlobalMutableBackground = () => {
  const { scrollYProgress } = useScroll();

  // Suavizamos el scroll para que el fondo no "vibre" y se sienta como fluido (Apple feel)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mapeamos el scroll (0 a 1) a la posición Y del fondo (0% a -50%)
  // Esto hace que el fondo suba lentamente mientras tú bajas.
  const yRange = useTransform(smoothProgress, [0, 1], ['0%', '-50%']);
  
  // Opacidad dinámica: El neón brilla más al principio y al final
  const neonOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.4, 0.1, 0.1, 0.3]);
  
  // El Azul aparece solo en el medio (Servicios/Precios)
  const blueOpacity = useTransform(smoothProgress, [0.1, 0.5, 0.9], [0, 0.5, 0]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050507] pointer-events-none">
      {/* EL TELÓN GIGANTE MÓVIL 
        Es mucho más alto que la pantalla para poder "deslizarse".
      */}
      <motion.div 
        style={{ y: yRange }}
        className="absolute inset-0 w-full h-[300vh] w-full"
      >
        {/* FASE 1: HERO (Top) - Neón Predominante */}
        <div className="absolute top-0 left-0 w-full h-[100vh]">
            <motion.div 
                style={{ opacity: neonOpacity }}
                className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#EDF246] blur-[150px]" 
            />
        </div>

        {/* FASE 2: MIDDLE (Servicios) - Azul Hielo Calmado */}
        <div className="absolute top-[100vh] left-0 w-full h-[100vh]">
            <motion.div 
                style={{ opacity: blueOpacity }}
                className="absolute top-[30%] right-[10%] w-[900px] h-[900px] rounded-full bg-[#A0E9FF] blur-[180px]" 
            />
             <motion.div 
                style={{ opacity: blueOpacity }}
                className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#1E3A8A] blur-[150px]" 
            />
        </div>

        {/* FASE 3: FOOTER (Bottom) - Vuelta a la oscuridad con acento */}
        <div className="absolute top-[200vh] left-0 w-full h-[100vh]">
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#EDF246]/10 to-transparent" />
        </div>

        {/* TEXTURA DE RUIDO GLOBAL (Unifica todo) */}
        <div className="absolute inset-0 w-full h-full opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </motion.div>
    </div>
  );
};

export default GlobalMutableBackground;