import React from 'react'
import Header from '../../../ui-components/LandingPage/Comparison/Header';
import Section1 from '../../../ui-components/LandingPage/Comparison/Section1';
import Section2 from '../../../ui-components/LandingPage/Comparison/Section2';
import Slider from '../../../ui-components/LandingPage/Comparison/Slider';
import Testimonial2 from '../../../ui-components/LandingPage/Comparison/Testimonial2';
import Award from '../../../ui-components/LandingPage/Home/Award';

export default function ComparisonPage() {
   return (
       <div className="flex-grow">
         <Header />
         <Section1 />
         <Section2 />
         <Slider />
         <Testimonial2 />
         <Award />
       </div>
   );
}
