import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import InteractiveQuiz from './InteractiveQuiz';

const QuizModal = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.setProperty('overflow', 'hidden', 'important');
        } else {
            document.body.style.removeProperty('overflow');
        }
        return () => {
            document.body.style.removeProperty('overflow');
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-zinc-950/90 backdrop-blur-md z-[10000]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-6 pointer-events-none"
                    >
                        {/* Content Wrapper */}
                        <div className="w-full max-w-5xl h-[90vh] md:h-[85vh] bg-[#09090b] rounded-[32px] overflow-hidden shadow-2xl relative border border-zinc-800 pointer-events-auto flex flex-col">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            {/* Quiz Component - Ensure it takes full height */}
                            <div className="flex-1 w-full h-full relative">
                                <InteractiveQuiz />
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default QuizModal;
