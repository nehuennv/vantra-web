import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import RestoProduct from './pages/RestoProduct';
import MedProduct from './pages/MedProduct';
import GlobalAuroraBackground from './components/layout/GlobalAuroraBackground';
import SmoothScroll from './components/layout/SmoothScroll';

// Un componente auxiliar para hacer scroll al top al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <SmoothScroll> {/* 1. Motor de Scroll (Lenis) */}

        <ScrollToTop /> {/* Reset del scroll al navegar */}

        {/* 2. El Fondo Global "Aurora" (Unified Gradient) */}
        <GlobalAuroraBackground />

        {/* 3. El Contenido (Transparente para dejar ver el fondo) */}
        <div className="min-h-screen font-sans relative text-white selection:bg-[#EDF246] selection:text-black">

          <Navbar />

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resto" element={<RestoProduct />} />
              <Route path="/med" element={<MedProduct />} />

              {/* Rutas adicionales (Configuración, etc) */}
              <Route path="/configurar" element={<div className="pt-32 text-center">Configurador en construcción...</div>} />
              <Route path="/servicios" element={<div className="pt-32 text-center">Sección de Servicios (Scroll en Home)</div>} />
            </Routes>
          </main>

        </div>

      </SmoothScroll>
    </Router>
  );
}

export default App;