import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import ContactPage from './pages/ContactPage';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';


import './styles/base/wrapper.scss';
import './styles/abstracts/themes.scss';
import './index.scss';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer year={2024} credit={"MadrasThemes"} />
        </div>
      </BrowserRouter>
    </>
  </StrictMode>,
);