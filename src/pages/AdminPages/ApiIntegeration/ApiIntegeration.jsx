import React from 'react'
import ApiIntegeration from '../../../ui-components/Dashboard/ApiIntegeration/ApiIntegeration';
import PlugIn from '../../../ui-components/Dashboard/ApiIntegeration/PlugIn';
import Testimonial from '../../../ui-components/Dashboard/ApiIntegeration/Testimonial';
import Company from '../../../ui-components/Dashboard/ApiIntegeration/Company';

export default function ApiIntegerationPage() {
   return (
     <>
       <div className="flex-grow bg-gray-50">
         <ApiIntegeration />
         <PlugIn />
         <Testimonial />
         <Company />
       </div>
     </>
   );
}
