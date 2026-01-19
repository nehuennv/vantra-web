import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Utensils, ChefHat, BarChart3, ArrowRight } from "lucide-react";

export default function RestoProduct() {
    return (
        <div className="min-h-screen text-white selection:bg-vantra-neon selection:text-black font-sans pt-24 pb-20">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-vantra-neon/5 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] mix-blend-screen" />
                {/* Noise overlay for gritty texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">

                {/* Hero Section */}
                <section className="flex flex-col lg:flex-row items-center gap-16 py-12 lg:py-24">
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-vantra-neon/20 bg-vantra-neon/5 text-vantra-neon text-xs font-bold tracking-widest uppercase mb-6">
                                <span className="w-2 h-2 rounded-full bg-vantra-neon animate-pulse" />
                                Vantra Resto
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-6 tracking-tighter">
                                PROBÁ <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vantra-neon to-white">EL FUTURO.</span>
                            </h1>
                            <p className="text-xl text-zinc-400 mb-8 max-w-lg font-light leading-relaxed">
                                El sistema operativo para gastronomía de alto rendimiento. Integrá salón, cocina y pagos en una única interfaz fluida.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-vantra-neon text-black hover:bg-white hover:scale-105 transition-all duration-300 font-bold">
                                    Empezar ahora
                                </Button>
                                <Button variant="outline" size="lg" className="border-zinc-700 hover:border-vantra-neon hover:text-vantra-neon font-medium">
                                    Ver Demo
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative w-full aspect-square max-w-[600px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -0 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative z-10 w-full h-full"
                        >
                            {/* Abstract Resto UI Composition */}
                            <div className="relative w-full h-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden ring-1 ring-white/5">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-center">
                                        <div className="text-xl font-bold font-display text-white">Mesa 12</div>
                                        <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/20">Activa</div>
                                    </div>

                                    <div className="space-y-4 my-8">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🍔</div>
                                                <div className="flex-1">
                                                    <div className="h-4 w-24 bg-white/20 rounded mb-2" />
                                                    <div className="h-3 w-16 bg-white/10 rounded" />
                                                </div>
                                                <div className="text-vantra-neon font-bold">$24.00</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <div className="w-full py-4 bg-vantra-neon text-black text-center font-bold rounded-xl shadow-[0_0_20px_rgba(237,242,70,0.3)] hover:shadow-[0_0_30px_rgba(237,242,70,0.5)] transition-shadow cursor-pointer">
                                            COBRAR ORDEN
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 -right-8 p-4 bg-black/80 backdrop-blur-md border border-vantra-neon/30 rounded-2xl shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-vantra-neon/20 rounded-lg text-vantra-neon">
                                        <Utensils size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-zinc-400">Ingresos del día</div>
                                        <div className="text-lg font-bold text-white">$12,450</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-24">
                    {[
                        { icon: Utensils, title: "Menú Inteligente", desc: "Precios dinámicos y sincronización de disponibilidad al instante en todos los dispositivos." },
                        { icon: ChefHat, title: "KDS Optimizado", desc: "Sistema de cocina diseñado para flujos de trabajo de alto volumen y baja latencia." },
                        { icon: BarChart3, title: "Analítica Profunda", desc: "Insights en tiempo real sobre inventario, personal y preferencias de consumo." }
                    ].map((feature, idx) => (
                        <Card key={idx} hover={true} className="bg-zinc-900/30 border-white/5 group">
                            <div className="p-4 bg-white/5 rounded-2xl w-fit mb-6 group-hover:bg-vantra-neon group-hover:text-black transition-colors duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-display">{feature.title}</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">{feature.desc}</p>
                            <div className="mt-6 flex items-center text-vantra-neon text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                Saber más <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </Card>
                    ))}
                </section>
            </div>
        </div>
    );
}
