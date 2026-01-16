import React from 'react';

export default function Footer() {
    return (
        <footer className="py-20 border-t border-white/5 bg-black/40 backdrop-blur-lg mt-0">
            <div className="container mx-auto px-6 text-center">

                <h2 className="text-3xl font-display font-bold text-white mb-6">
                    VANTRA
                </h2>

                <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg font-light">
                    Impulsamos tu negocio con diseño web innovador y campañas digitales que convierten...
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500 mb-12 font-mono">
                    <span>Buenos Aires, Argentina</span>
                    <span className="hidden md:inline text-white/20">|</span>
                    <span>+54 9 11 3883-0925</span>
                    <span className="hidden md:inline text-white/20">|</span>
                    <span>vantradigital@gmail.com</span>
                </div>

                <div className="text-white/20 text-xs uppercase tracking-widest border-t border-white/5 pt-8">
                    &copy; 2025 Vantra. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
