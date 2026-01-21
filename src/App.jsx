import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import RestoProduct from './pages/RestoProduct';
import MedProduct from './pages/MedProduct';
import GlobalAuroraBackground from './components/layout/GlobalAuroraBackground';
import GlobalCursor from './components/layout/GlobalCursor';
import GlobalSpotlight from './components/layout/GlobalSpotlight';
import SmoothScroll from './components/layout/SmoothScroll';

import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/layout/SplashScreen';

// Un componente auxiliar para hacer scroll al top al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Router>
      <SmoothScroll> {/* 1. Motor de Scroll (Lenis) */}

        <AnimatePresence mode="wait">
          {isLoading && (
            <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        <GlobalCursor /> {/* Cursor Custom "Supreme Tech" */}
        <ScrollToTop /> {/* Reset del scroll al navegar */}

        {/* 2. El Fondo Global "Aurora" (Unified Gradient) */}
        {!isLoading && <GlobalAuroraBackground />}

        {/* 3. Global Spotlight (Mouse Hover Effect) */}
        {!isLoading && <GlobalSpotlight />}

        {/* 4. El Contenido (Transparente para dejar ver el fondo) */}
        <div className="min-h-screen font-sans relative text-white selection:bg-[#EDF246] selection:text-black w-full overflow-x-hidden">

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