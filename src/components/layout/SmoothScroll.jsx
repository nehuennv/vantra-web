import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // La duración de la inercia (más alto = más suave)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial Apple
            smoothWheel: true,
            direction: 'vertical',
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;