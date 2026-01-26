import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- COMPONENTE: STATUS BAR ITEM (Adaptado para strings de benefits) ---
const StatusBarItem = ({ label, className = "" }) => {
    return (
        <div className={`relative flex items-center gap-3 px-5 py-3 md:px-6 md:py-3.5 group/item ${className}`}>
            {/* Icono - Unified Color */}
            <div className="transition-colors duration-500 ease-out group-hover/item:brightness-125" style={{ color: 'var(--product-primary)' }}>
                <CheckCircle2 size={18} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col">
                {/* Label (Texto) - Blanco con hover color unified */}
                <div
                    className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-100 transition-colors duration-500 ease-out"
                >
                    {/* Hover color logic handled better via group-hover if we want pure CSS, or just white. 
                        User asked for unification. Let's keep it clean white -> primary on hover */}
                    <span className="group-hover/item:text-[color:var(--product-primary)] transition-colors">{label}</span>
                </div>
            </div>

            {/* Separador Vertical Sutil */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10 group-last:hidden" />

            {/* Brillo de fondo muy sutil en hover (Unified) */}
            <div
                className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0 group-hover/item:opacity-100"
                style={{ backgroundColor: 'var(--product-primary)', opacity: 0.05 }} // Force override opacity for bg
            />
            {/* We need a wrapper for opacity because inline style opacity overrides class opacity if applied to same element. 
                 Actually, simpler: use a colored bg with very low alpha in standard css or valid tailwind arbitraty value if confident.
                 Let's stick to style for exact color match. */}
            <div className="absolute inset-0 opacity-0 group-hover/item:opacity-10 transition-opacity duration-500" style={{ backgroundColor: 'var(--product-primary)' }} />
        </div>
    );
};

const HeroSection = ({ data }) => {
    const { title, subtitle, benefits, cta } = data;
    const containerRef = useRef(null);
    const [isHighlighted, setIsHighlighted] = React.useState(false);

    // Variants para entrada escalonada premium (copiado de Hero.jsx)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    // Helper to process title and inject highlight class logic moved to render for stability

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden bg-transparent perspective-1000"
        >
            {/* BACKGROUND DECORATIONS: REMOVED as per user request (Fixed global bg only) */}

            {/* --- CONTENIDO PRINCIPAL --- */}
            <motion.div
                className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* 1. TÍTULO H1 */}
                <motion.div className="max-w-6xl relative mb-8" variants={itemVariants}>
                    <h1 className="font-display font-medium text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tight text-white drop-shadow-2xl">
                        {/* 
                           REFACTOR FOR SMOOTH TRANSITION:
                           We split the title string to create stable React nodes. 
                           This ensures the <span> is not destroyed/recreated on state change, allowing CSS transition to work.
                           Format expected: "Some text <span ...>Highlighted text</span>"
                        */}
                        {(() => {
                            // Split by the specific span tag used in data
                            const parts = title.split(/<span[^>]*>|<\/span>/);
                            // parts[0] = "Tu consultorio no necesita más esfuerzo. "
                            // parts[1] = "Necesita orden."
                            // parts[2] = "" (after closing tag)

                            // Fallback if split doesn't match expected structure
                            if (parts.length < 2) return <div dangerouslySetInnerHTML={{ __html: title }} />;

                            return (
                                <>
                                    {/* Part 1: Regular Text */}
                                    <span className="[&>b]:text-transparent [&>b]:bg-clip-text [&>b]:bg-gradient-to-r [&>b]:from-[color:var(--product-primary)] [&>b]:to-white [&>b]:font-bold">
                                        {parts[0]}
                                    </span>

                                    {/* Part 2: Highlighted Span (Stable Node) */}
                                    <span
                                        className={`transition-all duration-700 ease-out italic font-bold will-change-[filter] inline-block tracking-wide bg-gradient-to-b from-white via-[color:var(--product-primary)] to-[color:var(--product-primary)] text-transparent bg-clip-text ${isHighlighted ? 'brightness-125 drop-shadow-[0_0_25px_rgba(14,165,233,0.8)]' : 'brightness-100 drop-shadow-none'}`}
                                    >
                                        {parts[1]}
                                    </span>
                                </>
                            );
                        })()}
                    </h1>
                </motion.div>

                {/* 2. DESCRIPCIÓN */}
                <motion.div
                    variants={itemVariants}
                    className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-12"
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                />

                {/* 3. CTAS (BOTONES) */}
                {cta && (
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-5 mb-12 w-full sm:w-auto"
                    >
                        {/* Primary Button - UNIFIED COLOR & STYLE */}
                        {cta.primary && (
                            <button
                                onClick={cta.primary.action}
                                onMouseEnter={() => setIsHighlighted(true)}
                                onMouseLeave={() => setIsHighlighted(false)}
                                className="group relative px-9 py-4 bg-[color:var(--product-primary)] text-[color:var(--product-on-primary,#18181b)] font-bold text-sm uppercase tracking-widest rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                            >
                                <div className="relative z-10 flex items-center gap-3">
                                    {cta.primary.text} <ArrowRight size={18} />
                                </div>
                            </button>
                        )}

                        {/* Secondary Button - GLASS STYLE */}
                        {cta.secondary && (
                            <Link
                                to={cta.secondary.href || "#"}
                                className="px-9 py-4 rounded-lg border border-white/10 bg-white/[0.02] text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white/10 active:scale-[0.98] flex items-center justify-center backdrop-blur-md shadow-none"
                            >
                                {cta.secondary.text}
                            </Link>
                        )}
                    </motion.div>
                )}

                {/* --- 4. STATUS BAR (Benefits) - Moved to relative flow --- */}
                {benefits && benefits.length > 0 && (
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 w-full flex justify-center px-4 md:px-6 z-20"
                    >
                        <div className="
                            grid grid-cols-1 gap-2 w-full max-w-sm 
                            md:flex md:flex-row md:items-center md:justify-center md:gap-0 md:w-auto md:max-w-none 
                            bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full shadow-2xl overflow-hidden
                        ">
                            {benefits.map((benefit, index) => (
                                <StatusBarItem
                                    key={index}
                                    label={benefit}
                                    className={index !== benefits.length - 1 ? "border-b border-white/5 md:border-b-0" : ""}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

            </motion.div>
        </section>
    );
};

export default HeroSection;