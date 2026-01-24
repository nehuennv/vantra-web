import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import PresentationSection from './sections/PresentationSection';
import DemoSection from './sections/DemoSection';
import PricingSection from './sections/PricingSection';
import CTASection from './sections/CTASection';

const ProductLandingTemplate = ({ data }) => {
    const { theme, hero, presentation, problem, solution, demo, pricing, cta } = data;

    // Set CSS variables for theme colors
    useEffect(() => {
        if (theme) {
            const root = document.documentElement;
            root.style.setProperty('--product-primary', theme.primary || '#EDF246');
            root.style.setProperty('--product-secondary', theme.secondary || '#ffffff');

            // Calculate RGB for rgba() usage
            // This is a simple helper, assuming hex input
            const hexToRgb = (hex) => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return `${r}, ${g}, ${b}`;
            };

            if (theme.primary && theme.primary.startsWith('#')) {
                root.style.setProperty('--product-primary-rgb', hexToRgb(theme.primary));
            }
        }
    }, [theme]);

    // If no data is provided, return null or a loader
    if (!data) return null;

    return (
        <div className="min-h-screen bg-vantra-bg text-white overflow-hidden selection:bg-[color:var(--product-primary)] selection:text-black font-sans">

            {/* Dynamic Background Wrapper */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Glow Effect */}
                {/* Glow Effect - Restored to provide the Product Color (Celeste) */}
                <div
                    className="absolute top-[-20%] left-[20%] w-[900px] h-[900px] rounded-full blur-[130px] opacity-20 transition-colors duration-1000"
                    style={{ backgroundColor: 'var(--product-primary)' }}
                />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[120px] opacity-15 transition-colors duration-1000"
                    style={{ backgroundColor: 'var(--product-primary)' }}
                />

                {/* MOVING DOTS PATTERN (Global for Product Template) */}
                <div
                    className="absolute inset-0 z-0 opacity-30" // Increased from 20 to 30
                    style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)', // Increased brightness
                        backgroundSize: '30px 30px',
                        animation: 'dotsMove 60s linear infinite'
                    }}
                />
                <style>{`
                    @keyframes dotsMove {
                        0% { background-position: 0 0; }
                        100% { background-position: 30px 30px; }
                    }
                `}</style>

                {/* LAYER 2: THE WAVE (The Scanner) */}
                <motion.div
                    className="absolute inset-0 z-0 will-change-[mask-position] transform-gpu"
                    style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)', // Mas brillantes
                        backgroundSize: '30px 30px',
                        animation: 'dotsMove 60s linear infinite', // Misma velocidad de base para alineación

                        // High visibility for light effect
                        opacity: 0.4, // Increased from 0.3

                        // THE MASK (Razor Thin Line)
                        maskImage: 'linear-gradient(120deg, transparent 40%, black 50%, transparent 60%)',
                        WebkitMaskImage: 'linear-gradient(120deg, transparent 40%, black 50%, transparent 60%)',
                        maskSize: '300% 300%',
                        WebkitMaskSize: '300% 300%',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                    }}
                    animate={{
                        maskPosition: ['-50% -50%', '150% 150%'],
                        WebkitMaskPosition: ['-50% -50%', '150% 150%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.5
                    }}
                />
            </div>

            <div className="relative z-10 pt-20">

                {hero && <HeroSection data={hero} theme={theme} />}

                {problem && <ProblemSection data={problem} theme={theme} />}

                {presentation && <PresentationSection data={presentation} theme={theme} />}

                {solution && <SolutionSection data={solution} theme={theme} />}

                {demo && <DemoSection data={demo} theme={theme} />}

                {pricing && <PricingSection data={pricing} theme={theme} />}

                {cta && <CTASection data={cta} theme={theme} />}

            </div>
        </div>
    );
};

export default ProductLandingTemplate;
