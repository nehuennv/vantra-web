import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Activity, HeartPulse, ShieldCheck, Microscope, ArrowRight } from "lucide-react";

export default function MedProduct() {
    return (
        <div className="min-h-screen text-white selection:bg-cyan-400 selection:text-black font-sans pt-24 pb-20">
            {/* Dynamic Background for Med - Clean, Blue/Cyan Tones */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[130px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">

                {/* Hero Section */}
                <section className="flex flex-col-reverse lg:flex-row items-center gap-20 py-12 lg:py-24">

                    {/* Visual Side */}
                    <div className="flex-1 relative w-full max-w-[550px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            {/* Frosted Glass Medical Card */}
                            <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent"></div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                        <Activity className="text-white w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-white">Dra. Sarah Vantra</div>
                                        <div className="text-sm text-cyan-200/70">Especialista Cardiología</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 rounded-2xl bg-black/20 border border-white/5 flex justify-between items-center">
                                        <div className="text-sm text-zinc-400">Ritmo Cardíaco</div>
                                        <div className="text-xl font-mono text-cyan-400 font-bold">72 BPM</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-black/20 border border-white/5 flex justify-between items-center">
                                        <div className="text-sm text-zinc-400">Nivel Oxígeno</div>
                                        <div className="text-xl font-mono text-cyan-400 font-bold">98%</div>
                                    </div>

                                    {/* Graph Placeholder */}
                                    <div className="h-32 mt-4 w-full bg-gradient-to-t from-cyan-500/10 to-transparent rounded-xl border-b border-cyan-500/30 relative overflow-hidden">
                                        <svg className="absolute bottom-0 w-full h-full text-cyan-400" preserveAspectRatio="none" viewBox="0 0 100 50">
                                            <path d="M0 45 L10 40 L20 45 L30 20 L40 45 L50 40 L60 45 L70 10 L80 45 L90 40 L100 45" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Shield */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 bg-[#0f172a] p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3"
                        >
                            <ShieldCheck className="text-green-400 w-6 h-6" />
                            <div className="text-sm font-medium">Cumple HIPAA</div>
                        </motion.div>
                    </div>

                    {/* Text Side */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-6 border border-cyan-500/30">
                                Vantra Salud
                            </div>
                            <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tight text-white">
                                Medicina de Precisión <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Reimaginada.</span>
                            </h1>
                            <p className="text-xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Gestión segura de datos, diagnósticos impulsados por IA y telemedicina sin fisuras. Construido para los doctores del mañana.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] border-none">
                                    Agendar Consulta
                                </Button>
                                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400">
                                    Documentación
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                </section>

                {/* Info Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-24">
                    {[
                        { icon: HeartPulse, title: "Paciente Primero", desc: "Interfaces intuitivas que reducen la fricción entre doctores y registros de pacientes.", color: "text-rose-400" },
                        { icon: ShieldCheck, title: "Núcleo Seguro", desc: "Encriptación de extremo a extremo con protocolos de seguridad de grado empresarial.", color: "text-green-400" },
                        { icon: Microscope, title: "IA Clínica", desc: "Diagnósticos asistidos impulsados por nuestros modelos médicos propietarios.", color: "text-cyan-400" }
                    ].map((feature, idx) => (
                        <Card key={idx} hover={false} className="bg-[#0f172a]/50 border-slate-800/60 backdrop-blur-sm hover:border-slate-600 transition-all duration-300">
                            <feature.icon className={`w-10 h-10 ${feature.color} mb-6`} />
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                            <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent"></div>
                        </Card>
                    ))}
                </section>
            </div>
        </div>
    );
}
