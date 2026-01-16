import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import PricingCarousel from '../components/sections/PricingCarousel';
import Meeting from '../components/sections/Meeting';
import Ecosystem from '../components/sections/Ecosystem';
import Differential from '../components/sections/Differential';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Ecosystem />
      <Differential />
      <PricingCarousel />
      <Meeting />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;