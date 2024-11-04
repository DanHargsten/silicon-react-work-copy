import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Features from './components/features/Features';
import FeaturesExtended from './components/features-extended/FeaturesExtended';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Logos from './components/logos/Logos';
import Showcase from './components/showcase/Showcase';
import Subscribe from './components/subscribe/Subscribe';
import Testimonials from './components/testimonials/Testimonials';

import './styles/base/wrapper.scss';
import './styles/abstracts/themes.scss';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div className="wrapper space-y-2">
        <Header />
        <Showcase />
        <Logos />
        <Features />
        <FeaturesExtended />
        <Testimonials />
        <Subscribe />
        <Footer year={2024} credit={"MadrasThemes"} />
      </div>
    </>
  </StrictMode>,
);