/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Raleway', 'sans-serif'], // Normal text now Raleway
                display: ['Righteous', 'sans-serif'], // Titles now Righteous
                raleway: ['Raleway', 'sans-serif'],
                righteous: ['Righteous', 'cursive'],
            },
            colors: {
                // Tu paleta VANTRA exacta
                vantra: {
                    DEFAULT: '#EDF246',   // Added for bg-vantra
                    neon: '#EDF246',      // El Amarillo Ácido (Accent)
                    dark: '#43443E',      // El Gris Oliva (Base)
                    bg: '#121211',        // Fondo Profundo (Casi negro, para contraste)
                    card: '#1E1E1C',      // Fondo de tarjetas (ligeramente más claro)
                },
                dark: {
                    900: '#121211',       // Alias for vantra-bg
                    base: '#1E1E1C',      // Alias for vantra-card
                }
            },
            backgroundImage: {
                'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(237, 242, 70, 0.15) 0%, rgba(18, 18, 17, 0) 50%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}