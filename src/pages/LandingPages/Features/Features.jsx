import React from 'react'
import Header from '../../../ui-components/LandingPage/Features/Header';
import Rating from '../../../ui-components/LandingPage/Features/Rating';
import Testimonial2 from '../../../ui-components/LandingPage/Features/Testimonial2';
import Testimonial1 from '../../../ui-components/LandingPage/Features/Testimonial1';
import AboutFooter from '../../../ui-components/LandingPage/Features/AboutFooter';
import Slider from '../../../ui-components/LandingPage/PricingPage/Slider';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <Header />
         <Rating />
         <Testimonial1 />
         <Testimonial2 />
         <AboutFooter />
         <Slider />
       </div>
   );
}
