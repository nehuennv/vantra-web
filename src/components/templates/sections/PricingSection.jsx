import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../../ui/Button';

const PricingSection = ({ data, theme }) => {
    const { title, subtitle, plans } = data;

    return (
        <section className="py-24 px-6 relative">
            <div className="container mx-auto max-w-7xl">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">{title}</h2>
                    <p className="text-lg text-zinc-400">{subtitle}</p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => {
                        const isHighlight = plan.highlight || idx === 0; // Default highlight logic or prop based

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative flex flex-col h-full"
                                style={{}}
                            >
                                {/* Highlight Badge */}
                                {isHighlight && (
                                    <div className="absolute top-0 right-0 p-4">
                                        <div className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white"
                                            style={{ color: 'var(--product-primary)' }}>
                                            Full Suite
                                        </div>
                                    </div>
                                )
                                }

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed min-h-[40px]">{plan.description}</p>
                                </div>

                                <div className="flex-1 space-y-4 mb-10">
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                                            <Check size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--product-primary)' }} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className="w-full"
                                    variant={isHighlight ? 'default' : 'outline'}
                                    style={isHighlight ? { backgroundColor: 'var(--product-primary)', color: 'black', border: 'none' } : {}}
                                >
                                    Seleccionar Plan
                                </Button>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section >
    );
};

export default PricingSection;
