import React from 'react';
import { Activity } from 'lucide-react';

const MedDashboardPreview = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-8">
            {/* Frosted Glass Medical Card */}
            <div className="relative w-full max-w-md overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl">
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
                        <div className="text-xl text-cyan-400 font-bold">72 BPM</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-black/20 border border-white/5 flex justify-between items-center">
                        <div className="text-sm text-zinc-400">Nivel Oxígeno</div>
                        <div className="text-xl text-cyan-400 font-bold">98%</div>
                    </div>

                    {/* Graph Placeholder */}
                    <div className="h-32 mt-4 w-full bg-gradient-to-t from-cyan-500/10 to-transparent rounded-xl border-b border-cyan-500/30 relative overflow-hidden">
                        <svg className="absolute bottom-0 w-full h-full text-cyan-400" preserveAspectRatio="none" viewBox="0 0 100 50">
                            <path d="M0 45 L10 40 L20 45 L30 20 L40 45 L50 40 L60 45 L70 10 L80 45 L90 40 L100 45" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedDashboardPreview;
