import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        // Inicialización de Lenis con Configuración "Snappy & Fluid"
        const lenis = new Lenis({
            duration: 1.2, // Equilibrio perfecto entre suavidad y respuesta
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial (Apple style)
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1, // 1 es natural. Si quieres que vuele más, prueba 1.2
            smoothTouch: false, // CRÍTICO: Desactivamos en móvil para usar el scroll nativo (0 lag)
            touchMultiplier: 2, // Sensibilidad táctil si alguna vez se activa
        });

        // Loop de animación optimizado
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Limpieza al desmontar
        return () => {
            lenis.destroy();
        };
    }, []);

    return <div className="w-full min-h-screen">{children}</div>;
};

export default SmoothScroll;