import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GlobalCursor = () => {
    // 1. Coordenadas reactivas (sin useState)
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // 2. Física de resorte para el Aura (The Ghost) -> AHORA MÁS RÍGIDO
    // stiffness alto y mass bajo para que siga rápido y sin "shadow lag"
    const springConfig = { damping: 35, stiffness: 400, mass: 0.2 };
    const auraX = useSpring(mouseX, springConfig);
    const auraY = useSpring(mouseY, springConfig);

    // 3. Escala reactiva (MotionValues para evitar re-renders)
    const cursorScale = useMotionValue(1);
    const cursorScaleSpring = useSpring(cursorScale, { damping: 20, stiffness: 300 });

    // Estado para visibilidad (montaje/desmontaje en touch devices)
    const [isVisible, setIsVisible] = useState(false);

    // Inicialización Lazy para evitar el "Flash" en mobile
    const [isTouchDevice, setIsTouchDevice] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(pointer: coarse)').matches;
        }
        return false;
    });

    useEffect(() => {
        // Detectar cambios en resize (por si rota la tablet o conecta mouse)
        const checkTouch = () => {
            setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
        };
        window.addEventListener('resize', checkTouch);

        // Event Listeners de Mouse
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            // Mostrar cursor si se mueve (por si estaba oculto)
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => cursorScale.set(0.8);
        const handleMouseUp = () => cursorScale.set(1);

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detección de interactivos (Delegación de eventos básica)
        const handleMouseOver = (e) => {
            const target = e.target;
            // Selectores para elementos interactivos
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('.interactive') ||
                target.closest('a') ||
                target.closest('button');

            if (isInteractive) {
                cursorScale.set(1.5);
            } else {
                cursorScale.set(1);
            }
        };

        if (!isTouchDevice) {
            window.addEventListener('mousemove', moveMouse);
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('mouseenter', handleMouseEnter);

            // Usamos mouseover/out delegados en window/document para detectar hover
            window.addEventListener('mouseover', handleMouseOver);

            setIsVisible(true);
        }

        return () => {
            window.removeEventListener('resize', checkTouch);
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorScale, mouseX, mouseY, isVisible, isTouchDevice]);

    // Si es touch device, no renderizamos nada
    if (isTouchDevice) return null;

    // Renderizar en el body
    return createPortal(
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-exclusion"
            style={{
                opacity: isVisible ? 1 : 0,
                // Usamos una transición suave para la opacidad
                transition: "opacity 0.2s ease",
            }}
        >
            {/* 1. NÚCLEO (The Pointer) - Instantáneo */}
            <motion.div
                className="absolute rounded-full bg-[#EDF246]"
                style={{
                    width: 8,
                    height: 8,
                    x: mouseX, // Sigue al mouse directamente (sin spring)
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    willChange: "transform", // Optimización extremo
                }}
            />

            {/* 2. AURA (The Ring) - Con Spring Physics Tight */}
            <motion.div
                className="absolute rounded-full border border-[#EDF246]/50" // Borde fino en lugar de fill
                style={{
                    width: 32,
                    height: 32,
                    x: auraX,
                    y: auraY,
                    scale: cursorScaleSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    // QUITAMOS EL BLUR
                    willChange: "transform", // Optimización extrema
                }}
            />
        </motion.div>,
        document.body
    );
};

export default GlobalCursor;
