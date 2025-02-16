import React from 'react'
import Header from '../../../ui-components/LandingPage/About/Header';
import Rating from '../../../ui-components/LandingPage/About/Rating';
import Testimonial1 from '../../../ui-components/LandingPage/About/Testimonial1';
import Testimonial2 from '../../../ui-components/LandingPage/About/Testimonial2';
import Section from '../../../ui-components/LandingPage/About/Section';
import AboutFooter from '../../../ui-components/LandingPage/About/AboutFooter';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <Header />
         <Rating />
         <Testimonial1 />
         <Section />
         <Testimonial2 />
         <AboutFooter />
       </div>
   );
}
