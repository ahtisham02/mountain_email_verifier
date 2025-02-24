import React from 'react'
import Header from '../../../ui-components/LandingPage/Api/Header';
import InfoSections from '../../../ui-components/LandingPage/Api/InfoSections';
import Testimonial1 from '../../../ui-components/LandingPage/Api/Testimonial1';
import Testimonial2 from '../../../ui-components/LandingPage/Api/Testimonial2';
import Section from '../../../ui-components/LandingPage/Api/Section';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <Header />
         <InfoSections />
         <Testimonial1 />
         <Section />
         <Testimonial2 />
       </div>
   );
}
