import React from 'react'
import ContactPage from '../../../ui-components/LandingPage/Contact/Contact';
import Header from '../../../ui-components/LandingPage/Contact/Header';

export default function HomePage() {
   return (
       <div className="flex-grow">
         <Header />
         <ContactPage />
       </div>
   );
}
