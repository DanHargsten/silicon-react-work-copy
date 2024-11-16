import React, { createContext, useContext } from 'react'

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
   const ApiEndpoints = {
      contact: 'https://win24-assignment.azurewebsites.net/api/forms/contact',
      subscribe: 'https://win24-assignment.azurewebsites.net/api/forms/subscribe',
      getFaqs: 'https://win24-assignment.azurewebsites.net/api/faq',
      getTestimonials: 'https://win24-assignment.azurewebsites.net/api/testimonials', 
   };


   return (
      <ApiContext.Provider value={ApiEndpoints}>
         {children}
      </ApiContext.Provider>
   );
};


export const useApi = () => useContext(ApiContext);