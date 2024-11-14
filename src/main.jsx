import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import Contact from './components/contact/Contact';
import FaqList from './components/faqs/FaqList';
import Features from './components/features/Features';
import FeaturesExtended from './components/features-extended/FeaturesExtended';
import Footer from './components/footer/Footer';
import Logos from './components/logos/Logos';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Slider from './components/slider/Slider';
import Subscribe from './components/subscribe/Subscribe';
import Testimonials from './components/testimonials/Testimonials';

import './styles/base/wrapper.scss';
import './styles/abstracts/themes.scss';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <BrowserRouter>
        {/* <Contact /> */}
        <Navbar />
        {/* <Header /> */}
        <Showcase />
        {/* <Logos /> */}
        {/* <Features /> */}
        {/* <Slider /> */}
        {/* <FeaturesExtended /> */}
        {/* <Testimonials /> */}
        {/* <FaqList /> */}
        {/* <Subscribe /> */}
        {/* <Footer year={2024} credit={"MadrasThemes"} /> */}
      </BrowserRouter>
    </>
  </StrictMode>,
);