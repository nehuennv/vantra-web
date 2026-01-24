import React from 'react';
import ProductLandingTemplate from '../components/templates/ProductLandingTemplate';
import { vantraMedData } from '../data/landings/vantra-med.jsx';

export default function MedProduct() {
    return (
        <ProductLandingTemplate data={vantraMedData} />
    );
}
