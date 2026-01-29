import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import RestoProduct from './pages/RestoProduct';
import MedProduct from './pages/MedProduct';
import Team from './pages/Team';
import GlobalAuroraBackground from './components/layout/GlobalAuroraBackground';
import GlobalCursor from './components/layout/GlobalCursor';
import GlobalSpotlight from './components/layout/GlobalSpotlight';
import SmoothScroll from './components/layout/SmoothScroll';

import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/layout/SplashScreen';
import PageTransition from './components/layout/PageTransition';

// Un componente auxiliar para hacer scroll al top al cambiar de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Timeout para asegurar que Lenis/Browser no sobreescriban el scroll
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Router>
      <SmoothScroll> {/* 1. Motor de Scroll (Lenis) */}

        {/* Splash Screen Logic separated from Routes */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <>
            <GlobalCursor />
            <ScrollToTop />
            <GlobalAuroraBackground />
            <GlobalSpotlight />

            <div className="min-h-screen font-sans relative text-white selection:bg-[#EDF246] selection:text-black w-full overflow-x-hidden">
              <Navbar />
              <main className="relative z-10">
                <AnimatedRoutes />
              </main>
            </div>
          </>
        )}

      </SmoothScroll>
    </Router>
  );
}

// Separate component to use useLocation hook
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/resto" element={
          <PageTransition>
            <RestoProduct />
          </PageTransition>
        } />
        <Route path="/med" element={
          <PageTransition>
            <MedProduct />
          </PageTransition>
        } />
        <Route path="/equipo" element={
          <PageTransition>
            <Team />
          </PageTransition>
        } />
        <Route path="/configurar" element={
          <PageTransition>
            <div className="pt-32 text-center">Configurador en construcción...</div>
          </PageTransition>
        } />
        <Route path="/servicios" element={
          <PageTransition>
            <div className="pt-32 text-center">Sección de Servicios (Scroll en Home)</div>
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};


export default App;