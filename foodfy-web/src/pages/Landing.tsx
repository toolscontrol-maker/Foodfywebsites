import React from 'react';
import Hero from '../components/Hero';
import ServicesSelector from '../components/ServicesSelector';
import UniversalService from '../components/UniversalService';
import BenefitsSection from '../components/BenefitsSection';
import ComparisonSection from '../components/ComparisonSection';
import FAQSection from '../components/FAQSection';
import CtaSection from '../components/CtaSection';

const Landing: React.FC = () => {
    return (
        <>
            <main>
                <Hero />
                <ServicesSelector />
                <UniversalService />
                <BenefitsSection />
                <ComparisonSection />
                <FAQSection />
                <CtaSection />
            </main>
        </>
    );
};

export default Landing;
