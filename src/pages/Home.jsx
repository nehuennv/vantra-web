import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import PricingCarousel from '../components/sections/PricingCarousel'; // <--- Importamos el nuevo

const Home = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden selection:bg-vantra-neon selection:text-black">

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