import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProductLandingTemplate from '../components/templates/ProductLandingTemplate';
import SplashScreen from '../components/layout/SplashScreen';
import { vantraMedData } from '../data/landings/vantra-med.jsx';

export default function MedProduct() {
    return (
        <ProductLandingTemplate data={vantraMedData} />
    );
}
