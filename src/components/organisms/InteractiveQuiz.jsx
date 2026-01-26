import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Check, Clock, Users, Database, AlertCircle,
    Sparkles, X, BrainCircuit, ScanLine, BarChart3, Lock
} from 'lucide-react';
import Button from '../ui/Button';

// ==========================================
// 🧠 MOTOR DE CONOCIMIENTO (The Algorithm)
// ==========================================

// Definición de Perfiles de Solución
const SOLUTIONS = {
    A: {
        id: 'A',
        name: "Sistema Vantra Integral",
        tagline: "Automatización Total + IA",
        price: "$1,200 USD", // Precio ejemplo
        matchText: "Tu consultorio necesita salir de la operación manual inmediatamente.",
        features: ["Agente IA en WhatsApp", "Agenda Inteligente", "Historial Digital", "Dashboard Financiero"]
    },
    B: {
        id: 'B',
        name: "Pack Operativo",
        tagline: "Gestión de Turnos y Mensajería",
        price: "$800 USD",
        matchText: "Tu prioridad es resolver el caos de WhatsApp y las ausencias.",
        features: ["WhatsApp Ordenado", "Agenda Estructurada", "Confirmaciones Auto", "Reportes Básicos"]
    },
    C: {
        id: 'C',
        name: "Pack Organización",
        tagline: "Orden Interno y Datos",
        price: "$500 USD",
        matchText: "Necesitas centralizar información antes de automatizar.",
        features: ["Dashboard de Control", "Base de Pacientes", "Agenda Centralizada"]
    }
};

// Pasos del Wizard con Lógica de Puntuación
const QUIZ_STEPS = [
    {
        id: 'intro',
        type: 'cover',
        title: "Diagnóstico de Escalabilidad",
        subtitle: "Analizaremos 12 puntos de control de tu consultorio para detectar cuellos de botella.",
        buttonText: "Iniciar Análisis"
    },
    {
        id: 'pain_point',
        type: 'question',
        title: "¿Cuál es el síntoma más crítico hoy?",
        subtitle: "Seleccioná el que más te quita energía.",
        options: [
            {
                id: 'chaos',
                label: 'Desorden de información y papeles',
                icon: Database,
                weights: { A: 10, B: 5, C: 20 } // Suma mucho a C y A
            },
            {
                id: 'delay',
                label: 'Demoras en responder pacientes',
                icon: Clock,
                weights: { A: 10, B: 20, C: 0 } // Suma mucho a B
            },
            {
                id: 'dependency',
                label: 'Si no estoy yo, el consultorio no funciona',
                icon: AlertCircle,
                weights: { A: 30, B: 5, C: 0 } // Señal fuerte de A
            },
            {
                id: 'absent',
                label: 'Ausentismo y huecos en agenda',
                icon: Users,
                weights: { A: 10, B: 20, C: 5 }
            },
        ]
    },
    {
        id: 'volume',
        type: 'question',
        title: "¿Volumen mensual de consultas?",
        subtitle: "Para dimensionar la infraestructura necesaria.",
        options: [
            { id: 'low', label: 'Menos de 100', icon: BarChart3, weights: { A: 0, B: 5, C: 20 } },
            { id: 'mid', label: 'Entre 100 y 300', icon: BarChart3, weights: { A: 10, B: 20, C: 5 } },
            { id: 'high', label: 'Más de 300', icon: BarChart3, weights: { A: 30, B: 10, C: 0 } },
        ]
    },
    {
        id: 'goal', // El "Precalificador" del Bloque 6
        type: 'question',
        title: "¿Qué objetivo perseguís este trimestre?",
        subtitle: "Esto define la agresividad de la implementación.",
        options: [
            { id: 'organize', label: 'Solo quiero orden interno', icon: Lock, weights: { A: 0, B: 0, C: 50 } }, // Forzamos C
            { id: 'automate', label: 'Quiero resolver WhatsApp y Agenda', icon: Clock, weights: { A: 10, B: 50, C: 0 } }, // Forzamos B
            { id: 'scale', label: 'Quiero automatizar todo el negocio', icon: Sparkles, weights: { A: 50, B: 10, C: 0 } }, // Forzamos A
        ]
    }
];

// ==========================================
// 🧩 SUB-COMPONENTES (UI MODULES)
// ==========================================

const ProgressBar = ({ current, total }) => {
    const progress = ((current + 1) / total) * 100;
    return (
        <div className="w-full h-1 bg-zinc-900 overflow-hidden">
            <motion.div
                className="h-full bg-[var(--product-primary)] shadow-[0_0_10px_var(--product-primary)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "circOut" }}
            />
        </div>
    );
};

// Pantalla de "Simulación de IA"
const ProcessingScreen = ({ onComplete }) => {
    const [status, setStatus] = useState("Inicializando...");

    useEffect(() => {
        const sequence = [
            { text: "Conectando con base de conocimientos...", time: 800 },
            { text: "Analizando volumen de datos...", time: 1600 },
            { text: "Detectando patrones de ineficiencia...", time: 2400 },
            { text: "Calculando ROI proyectado...", time: 3200 },
            { text: "Generando estrategia personalizada...", time: 4000 }
        ];

        sequence.forEach(({ text, time }) => {
            setTimeout(() => setStatus(text), time);
        });

        setTimeout(onComplete, 4500);
    }, [onComplete]);

    return (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-[#09090b]">
            <div className="relative w-24 h-24 mb-8">
                <motion.div
                    className="absolute inset-0 border-t-4 border-[var(--product-primary)] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-2 border-r-4 border-zinc-700 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <BrainCircuit className="text-[var(--product-primary)]" size={32} />
                </div>
            </div>

            <motion.h3
                key={status}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl font-display font-medium text-white mb-2"
            >
                {status}
            </motion.h3>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                AI Engine v2.4 Processing
            </p>
        </div>
    );
};

const QuestionCard = ({ step, onSelect }) => (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8">
            <span className="text-[10px] font-bold text-[var(--product-primary)] bg-[var(--product-primary)]/10 px-2 py-1 rounded border border-[var(--product-primary)]/20 uppercase tracking-wider">
                Paso Crítico
            </span>
            <h3 className="text-3xl font-medium text-white mt-4 mb-2">{step.title}</h3>
            <p className="text-zinc-400">{step.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 overflow-y-auto pr-2 pb-4 flex-1">
            {step.options.map((opt) => (
                <button
                    key={opt.id}
                    onClick={() => onSelect(opt)}
                    className="group relative flex items-center gap-4 p-5 rounded-xl bg-[#121215] border border-zinc-800 hover:border-[var(--product-primary)] hover:bg-zinc-900/80 transition-all text-left"
                >
                    <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-[var(--product-primary)] group-hover:scale-110 transition-all duration-300">
                        <opt.icon size={20} />
                    </div>
                    <div>
                        <span className="block text-zinc-200 font-medium group-hover:text-white transition-colors text-base">
                            {opt.label}
                        </span>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={18} className="text-[var(--product-primary)]" />
                    </div>
                </button>
            ))}
        </div>
    </div>
);

// ==========================================
// 🚀 COMPONENTE PRINCIPAL
// ==========================================

const InteractiveQuiz = () => {
    // Estado del Sistema
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);

    // Memoria del "Algoritmo"
    const [scores, setScores] = useState({ A: 0, B: 0, C: 0 });
    const [history, setHistory] = useState([]); // Guardamos las elecciones para el texto dinámico

    const activeStep = QUIZ_STEPS[currentStepIndex];

    // --- LÓGICA DE PROCESAMIENTO ---

    const handleSelection = (option) => {
        // 1. Calcular Pesos (Algoritmo)
        const newScores = { ...scores };
        Object.keys(option.weights).forEach(key => {
            newScores[key] += option.weights[key];
        });
        setScores(newScores);

        // 2. Guardar Historial
        setHistory([...history, { stepId: activeStep.id, label: option.label, optionId: option.id }]);

        // 3. Navegación
        if (currentStepIndex < QUIZ_STEPS.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
        } else {
            // Fin del cuestionario, inicia procesamiento fake
            setIsProcessing(true);
        }
    };

    // --- DETERMINAR GANADOR ---
    const winnerResult = useMemo(() => {
        // Ordenamos por puntaje
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const winnerKey = sorted[0][0]; // 'A', 'B', o 'C'
        return SOLUTIONS[winnerKey];
    }, [scores]);

    // Generador de Texto Dinámico (Why Logic)
    const dynamicReason = useMemo(() => {
        const painPoint = history.find(h => h.stepId === 'pain_point')?.label || "tu situación actual";
        return `Dado que tu principal bloqueo son las "${painPoint}", nuestro algoritmo determinó que necesitas priorizar ${winnerResult.id === 'A' ? 'la automatización completa' : 'el orden operativo'} para recuperar el control.`;
    }, [history, winnerResult]);

    // --- RENDERIZADO DE VISTAS ---

    if (isProcessing) {
        return <ProcessingScreen onComplete={() => { setIsProcessing(false); setQuizFinished(true); }} />;
    }

    if (quizFinished) {
        return (
            <div className="flex flex-col h-full animate-in zoom-in-95 duration-700">
                {/* Header Resultado */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2">
                            <ScanLine size={12} className="text-green-500" />
                            <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Match: 98.5%</span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-display font-medium text-white mb-2">
                        {winnerResult.name}
                    </h2>
                    <p className="text-[var(--product-primary)] font-medium text-sm mb-4">
                        {winnerResult.tagline}
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-700 pl-4 italic">
                        "{dynamicReason}"
                    </p>
                </div>

                {/* Card de Precio e Info */}
                <div className="flex-1 bg-gradient-to-b from-[#18181b] to-[#0c0c0e] rounded-2xl border border-zinc-800 p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <Sparkles className="text-[var(--product-primary)]" size={40} strokeWidth={1} />
                    </div>

                    <div className="mb-6">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Inversión Estimada</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-white">{winnerResult.price}</span>
                            <span className="text-sm text-zinc-600">/ pago único</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {winnerResult.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[var(--product-primary)]/10 flex items-center justify-center">
                                    <Check size={12} className="text-[var(--product-primary)]" />
                                </div>
                                <span className="text-zinc-300 text-sm">{feat}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-6 border-t border-zinc-800">
                    <p className="text-center text-zinc-400 text-sm mb-4">
                        ¿Esta solución se alinea con tu presupuesto?
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Button className="w-full bg-white text-black border-none font-bold">
                            Sí, Agenda Demo
                        </Button>
                        <Button variant="outline" className="w-full border-zinc-700 text-zinc-400">
                            Necesito pensarlo
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // --- VISTA DE PREGUNTAS (WIZARD) ---
    return (
        <div className="flex flex-col h-full bg-[#09090b] rounded-[24px] overflow-hidden border border-zinc-800 shadow-2xl relative">

            {/* Barra de Progreso Superior */}
            <ProgressBar current={currentStepIndex} total={QUIZ_STEPS.length} />

            <div className="flex-1 p-6 md:p-8 relative overflow-hidden flex flex-col">

                {/* Intro Screen */}
                {activeStep.type === 'cover' ? (
                    <div className="flex flex-col h-full justify-center items-start animate-in fade-in duration-700">
                        <div className="w-16 h-16 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center mb-8 shadow-lg shadow-black/50">
                            <BrainCircuit size={32} className="text-[var(--product-primary)]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
                            {activeStep.title}
                        </h2>
                        <p className="text-lg text-zinc-400 font-light mb-12 leading-relaxed max-w-sm">
                            {activeStep.subtitle}
                        </p>
                        <Button
                            onClick={() => setCurrentStepIndex(1)}
                            className="w-full h-14 text-base font-bold bg-white text-black border-none rounded-xl"
                        >
                            {activeStep.buttonText} <ArrowRight className="ml-2" size={20} />
                        </Button>
                        <p className="mt-6 text-xs text-zinc-600 flex items-center gap-2">
                            <Lock size={12} /> Datos 100% privados y seguros
                        </p>
                    </div>
                ) : (
                    // Question Screens
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="h-full"
                        >
                            <QuestionCard step={activeStep} onSelect={handleSelection} />
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>

            {/* Footer sutil */}
            {activeStep.type !== 'cover' && (
                <div className="px-8 py-4 bg-[#0c0c0e] border-t border-zinc-900 flex justify-between items-center">
                    <button
                        onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
                        className="text-xs text-zinc-500 hover:text-white transition-colors"
                    >
                        Atrás
                    </button>
                    <span className="text-[10px] text-zinc-600 font-mono tracking-widest">
                        VANTRA INTELLIGENCE
                    </span>
                </div>
            )}
        </div>
    );
};

export default InteractiveQuiz;