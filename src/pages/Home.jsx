import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import PricingCarousel from '../components/sections/PricingCarousel'; // <--- Importamos el nuevo

const Home = () => {
  return (
    <div className="min-h-screen bg-vantra-bg text-white overflow-hidden selection:bg-vantra-neon selection:text-black">
      
      {/* BACKGROUND GLOBAL */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-vantra-dark/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-vantra-neon/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Services />
        <PricingCarousel /> {/* <--- AQUI VA EL CARRUSEL */}
        
        {/* Footer temporal */}
        <div className="py-20 text-center border-t border-white/5 mt-20">
            <p className="text-gray-500 text-sm">© 2025 Vantra. Todos los derechos reservados.</p>
        </div>
      </div>

    </div>
  );
};

export default Home;