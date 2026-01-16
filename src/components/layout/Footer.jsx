export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 mt-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-display font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white opacity-50">
                    VANTRA
                </h2>
                <p className="text-white/40 text-sm">
                    &copy; {new Date().getFullYear()} Vantra. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
