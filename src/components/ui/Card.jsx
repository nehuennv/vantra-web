import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Card({ children, className, hover = true, ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -5, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" } : {}}
            className={cn(
                "bg-dark-base/20 backdrop-blur-sm border border-white/5 p-8 rounded-3xl overflow-hidden relative group",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-vantra/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
