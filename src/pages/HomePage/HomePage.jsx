import React from 'react';
import CarouselSection from './carouselSection/CarouselSection';
import AboutUsSection from './aboutUsSection/AboutUsSection';
import FeatureSection from './featureSection/FeatureSection';

const HomePage = () => {
    return (
        <div>
            <CarouselSection/>
            <AboutUsSection/>
            <FeatureSection/>
        </div>
    );
}

export default HomePage;
