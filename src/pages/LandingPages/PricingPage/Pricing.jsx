import React from 'react'
import Header from '../../../ui-components/LandingPage/PricingPage/Header';
import Faq from '../../../ui-components/LandingPage/BlogDetails/Faq';
import Award from '../../../ui-components/LandingPage/Home/Award';
import Section from "../../../ui-components/LandingPage/PricingPage/Section"
import Slider from "../../../ui-components/LandingPage/PricingPage/Slider"
export default function HomePage() {
   return (
       <div className="flex-grow">
         <Header />
         <Slider />
         <Faq />
         <Section />
         <Award />
       </div>
   );
}
