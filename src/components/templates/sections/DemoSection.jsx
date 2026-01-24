import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DemoSection = ({ data, theme }) => {
    const { title, subtitle, component: Component } = data;

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Decorative Grid Removed to keep global style */}

            <div className="container mx-auto relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-lg text-zinc-400">
                        {subtitle}
                    </p>
                </div>

                {/* Interactive Dashboard Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-6xl aspect-video bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative group"
                >
                    {/* Windows / Mac OS Controls Decoration */}
                    <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>

                        {/* Address Bar Simulation */}
                        <div className="ml-4 px-3 py-1 rounded bg-black/20 text-[10px] text-zinc-500 font-mono flex-1 text-center flex items-center justify-center gap-2">
                            <span>vantra.system / dashboard / preview</span>
                            <span className="bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded-[4px] text-[9px] border border-white/5 tracking-wider hidden sm:inline-block">DEMO MODE</span>
                        </div>

                        <div className="text-[10px] text-zinc-600 font-medium hidden sm:block">
                            Visual Sample Only
                        </div>
                    </div>

                    {/* Actual Demo Component Host */}
                    <div className="absolute inset-0 top-10 overflow-y-auto custom-scrollbar bg-zinc-950">
                        {Component ? Component : (
                            <div className="flex items-center justify-center h-full text-zinc-500">
                                [ Interactive Component Placeholder ]
                            </div>
                        )}
                    </div>

                    {/* Overlay Hint */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-0 transition-opacity pointer-events-none">
                        {/* This could be an overlay "Click to Interact" if we used an iframe, 
                 but since we are mounting a React component, we want it interactive immediately probably.
                 Leaving empty for now.
             */}
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default DemoSection;
