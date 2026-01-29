import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Footer from '../components/layout/Footer';

import serafinImg from '../assets/team/Serafin Bastianelli - CEO & Founder.webp';
import pedroImg from '../assets/team/Pedro Reverendo - CTO & Ai Developer.webp';
import nehuenImg from '../assets/team/Nehuen Villavicencio - FrontEnd Developer.webp';
import noNameImg from '../assets/team/No Name Report - CMO & Video Editor.webp';
import martinaImg from '../assets/team/Martina Pasucci - Community Manager.webp';
import morenaImg from '../assets/team/Morena Sanchez - Community Manager.webp';
import tomasImg from '../assets/team/Tomás Actis - Graphic Designer.webp';

// --- DATA (9 Personas) ---
const TEAM = [
    {
        id: 1,
        name: 'Serafin Bastianelli',
        role: 'CEO & Founder',
        image: serafinImg,
        linkedin: 'https://www.linkedin.com/in/serafinbastianelli/'
    },
    {
        id: 2,
        name: 'Pedro Reverendo',
        role: 'CTO & Ai Developer',
        image: pedroImg,
        linkedin: 'https://www.linkedin.com/in/pedroreverendo/'
    },
    {
        id: 3,
        name: 'Nehuen Villavicencio',
        role: 'Frontend Developer',
        image: nehuenImg,
        linkedin: 'https://www.linkedin.com/in/nehuenvillavicencio/'
    },
    {
        id: 5,
        name: 'Martina Pasucci',
        role: 'Community Manager',
        image: martinaImg
    },
    {
        id: 6,
        name: 'Morena Sanchez',
        role: 'Community Manager',
        image: morenaImg
    },
    {
        id: 7,
        name: 'Tomas Actis',
        role: 'Graphic Designer',
        image: tomasImg
    },
    {
        id: 4,
        name: 'No Name Report',
        role: 'CMO & Video Editor',
        image: noNameImg
    },

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
                    className="flex flex-wrap justify-center gap-8"
                >
                    {TEAM.map((member) => (
                        <div key={member.id} className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-sm">
                            <MemberCard member={member} />
                        </div>
                    ))}
                </motion.div>

            </div>

            <Footer />
        </div >
    );
};

// --- LA CARD (DISEÑO REVERSIONADO) ---
const MemberCard = ({ member }) => {
    const isCMO = member.role.includes('CMO'); // Detectamos al CMO Misterioso

    return (
        <motion.div
            variants={cardVariants}
            className={`group relative w-full aspect-square bg-[#050505] rounded-xl overflow-hidden cursor-pointer ${isCMO ? 'ring-1 ring-white/10' : ''}`}
        >
            {/* 1. BORDE QUE SE ENCIENDE (Glow Border) */}
            <div
                className={`absolute inset-0 rounded-xl border-2 transition-all duration-200 z-20 pointer-events-none
                    ${isCMO
                        ? 'border-white/20 group-hover:border-[#EDF246] group-hover:shadow-[0_0_40px_rgba(237,242,70,0.5)]'
                        : 'border-white/10 group-hover:border-[#EDF246]'
                    }
                `}
            />

            {/* 2. IMAGEN */}
            <div className={`absolute inset-0 bg-black ${isCMO ? 'overflow-hidden' : ''}`}>
                <img
                    src={member.image}
                    alt={member.name}
                    className={`
                        w-full h-full object-cover 
                        transition-all duration-500 ease-in-out
                        ${isCMO
                            ? 'opacity-30 blur-xl grayscale contrast-200 scale-125 group-hover:opacity-100 group-hover:blur-0 group-hover:scale-100 group-hover:grayscale-0'
                            : 'grayscale group-hover:grayscale-0 group-hover:scale-110'
                        }
                    `}
                />

                {/* Overlay oscuro */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent ${isCMO ? 'opacity-100 group-hover:opacity-20' : 'opacity-80'} transition-opacity duration-500`} />

                {/* --- CMO SPECIAL EFFECTS --- */}
                {isCMO && (
                    <>
                        {/* Static Noise Overlay (TV Glitch) */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 group-hover:opacity-10 transition-opacity duration-100 pointer-events-none mix-blend-difference" />

                        {/* Giant Question Mark (Vantra Yellow) */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-200">
                            <span className="text-9xl font-display font-bold text-[#EDF246] opacity-20 animate-pulse tracking-tighter">?</span>
                        </div>
                    </>
                )}
            </div>

            {/* 3. INFO (Siempre Visible) */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                <div className="flex justify-between items-end">
                    <div>
                        {/* ROL */}
                        <div className={`mb-2 inline-block ${isCMO ? 'bg-[#EDF246] px-1 transform -skew-x-12' : ''}`}>
                            <p className={`text-xs uppercase tracking-widest font-bold ${isCMO ? 'text-black font-mono transform skew-x-12' : 'text-[#EDF246]'}`}>
                                {member.role}
                            </p>
                        </div>

                        {/* NOMBRE */}
                        <h3 className={`text-2xl font-display text-white transition-colors ${isCMO ? 'group-hover:text-[#EDF246] group-hover:underline decoration-wavy decoration-[#EDF246]' : 'group-hover:text-white'}`}>
                            {member.name}
                        </h3>
                    </div>

                    {/* ICON (Linkedin o Alien si es CMO) */}
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg text-white transition-all duration-300 inline-block
                                ${isCMO
                                    ? 'bg-white/10 group-hover:bg-[#EDF246] group-hover:text-black hover:shadow-[0_0_20px_#EDF246]'
                                    : 'bg-white/10 group-hover:bg-[#EDF246] group-hover:text-black'
                                }`}
                        >
                            <Linkedin size={20} className={isCMO ? 'group-hover:animate-ping' : ''} />
                        </a>
                    )}
                </div>
            </div>



        </motion.div>
    );
};

export default Team;