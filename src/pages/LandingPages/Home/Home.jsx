import React from 'react'
import Header from '../../../ui-components/LandingPage/Home/Header';
import Testimonial1 from '../../../ui-components/LandingPage/Home/Testimonial1';
import Testimonial2 from '../../../ui-components/LandingPage/Home/Testimonial2';
import Reviews from '../../../ui-components/LandingPage/Home/Reviews';
import Award from '../../../ui-components/LandingPage/Home/Award';
import SLFooter from '../../../ui-components/LandingPage/Home/SLFooter';
import Section from '../../../ui-components/LandingPage/Home/Section';
import BlogSlider from '../../../ui-components/LandingPage/Home/BlogSlider';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <Header />
         <Testimonial1 />
         <Testimonial2 />
         <Reviews />
         <Award />
         <Section />
         <BlogSlider />
         <SLFooter />
       </div>
   );
}
