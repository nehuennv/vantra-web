import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Footer from '../components/layout/Footer';

// --- DATA (9 Personas) ---
const TEAM = [
    {
        id: 1,
        name: 'Serafin Bastianelli',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Sofia Chen',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Marcus Thorn',
        role: 'Producto',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Elena Vossen',
        role: 'Diseño',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 5,
        name: 'David Kim',
        role: 'Desarrollo',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 6,
        name: 'Sarah O\'Connell',
        role: 'UX/UI',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 7,
        name: 'Lucas Silva',
        role: 'Marketing',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 8,
        name: 'Priya Patel',
        role: 'Datos',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 9,
        name: 'Tom Hiddleston',
        role: 'Soporte',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop'
    }
];

// --- CASCADA DE ENTRADA ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Team = () => {
    return (
        <div className="w-full min-h-screen pt-32 relative bg-transparent">

            {/* TEXTURA DE FONDO (Para que no se sienta vacío) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            <div className="container mx-auto px-6 max-w-6xl relative z-10 pb-40">

                {/* --- HEADER SIMPLE --- */}
                <div className="mb-20">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-display font-medium text-6xl text-white mb-4"
                    >
                        El Equipo
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h-1 w-20 bg-[#EDF246] mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-xl font-light max-w-2xl"
                    >
                        Los que estamos detrás de la pantalla haciendo que Vantra funcione. Gente real haciendo software real.
                    </motion.p>
                </div>

                {/* --- GRID 3x3 --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {TEAM.map((member) => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                </motion.div>

            </div>

            <Footer />
        </div>
    );
};

// --- LA CARD (DISEÑO REVERSIONADO) ---
const MemberCard = ({ member }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="group relative w-full aspect-square bg-[#0a0a0a] rounded-xl overflow-hidden cursor-pointer"
        >
            {/* 1. BORDE QUE SE ENCIENDE (Glow Border) */}
            {/* Estado normal: Borde gris sutil. Hover: Borde amarillo brillante */}
            <div className="absolute inset-0 rounded-xl border-2 border-white/10 group-hover:border-[#EDF246] transition-colors duration-300 z-20 pointer-events-none" />

            {/* 2. IMAGEN */}
            <div className="absolute inset-0">
                <img
                    src={member.image}
                    alt={member.name}
                    className="
                        w-full h-full object-cover 
                        filter grayscale
                        group-hover:grayscale-0 
                        transition-all duration-500 ease-in-out
                        group-hover:scale-110
                    "
                />
                {/* Overlay oscuro abajo para leer el texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            </div>

            {/* 3. INFO (Siempre Visible) */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                <div className="flex justify-between items-end">
                    <div>
                        {/* ROL (Amarillo Vantra) */}
                        <p className="text-[#EDF246] text-xs uppercase tracking-widest mb-1 font-bold">
                            {member.role}
                        </p>
                        {/* NOMBRE (Blanco) */}
                        <h3 className="text-2xl font-display text-white group-hover:text-white transition-colors">
                            {member.name}
                        </h3>
                    </div>

                    {/* LINKEDIN ICON (Solo aparece sutilmente o se ilumina) */}
                    <div className="p-2 rounded-lg bg-white/10 text-white group-hover:bg-[#EDF246] group-hover:text-black transition-all duration-300">
                        <Linkedin size={20} />
                    </div>
                </div>
            </div>

            {/* 4. EFECTO DE LUZ AMBIENTAL EN HOVER */}


        </motion.div>
    );
};

export default Team;