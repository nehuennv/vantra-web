import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { ArrowRight } from 'lucide-react';

const CTASection = ({ data, theme }) => {
    const { title, subtitle, benefits, cta } = data;

    return (
        <section className="py-32 px-6 relative overflow-hidden">



            <div className="container mx-auto max-w-4xl relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
                        {title}
                    </h2>

                    <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
                        {subtitle}
                    </p>

                    {benefits && (
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm text-zinc-400">
                            {benefits.map((b, i) => (
                                <span key={i} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white" style={{ backgroundColor: 'var(--product-primary)' }} />
                                    {b}
                                </span>
                            ))}
                        </div>
                    )}

                    <Button
                        size="lg"
                        className="text-lg font-bold px-10 py-6 h-auto text-black border-none hover:scale-105 transition-transform"
                        style={{
                            backgroundColor: 'var(--product-primary)',
                            backgroundColor: 'var(--product-primary)',
                        }}
                        onClick={cta.action}
                    >
                        {cta.text} <ArrowRight className="ml-2" />
                    </Button>

                </motion.div>

            </div>
        </section>
    );
};

export default CTASection;
