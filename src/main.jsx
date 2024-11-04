import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base/wrapper.scss';
import './styles/abstracts/themes.scss';
import './index.scss';
import Footer from './components/footer/Footer';
import Subscribe from './components/subscribe/Subscribe';
import Logos from './components/logos/Logos';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div className="wrapper space-y-2">
        <Logos />
        <Subscribe />
        <Footer year={2024} credit={"MadrasThemes"} />
      </div>
    </>
  </StrictMode>,
);