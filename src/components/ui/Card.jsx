import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Card({ children, className, hover = true, ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -5 } : {}}
            className={cn(
                "relative overflow-hidden rounded-3xl",
                // Fondo base muy oscuro
                "bg-vantra-surface",
                // Borde ultra-fino y sutil
                "border border-white/[0.08]",
                className
            )}
            {...props}
        >
            {/* 1. RUIDO / NOISE (El secreto del realismo) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

            {/* 2. GLOW AZUL SUAVE (Top Right) */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-vantra-ice/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-vantra-ice/20 transition-all duration-500"></div>

            {/* 3. GLOW AMARILLO (Bottom Left) */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vantra-neon/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-vantra-neon/10 transition-all duration-500"></div>

            <div className="relative z-10 p-8">
                {children}
            </div>
        </motion.div>
    );
}