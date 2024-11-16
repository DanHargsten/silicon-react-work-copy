import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Showcase from '../components/showcase/Showcase';
import Logos from '../components/logos/Logos';
import Features from '../components/features/Features';
import Slider from '../components/slider/Slider';
import FeaturesExtended from '../components/features-extended/FeaturesExtended';
import Testimonials from '../components/testimonials/Testimonials';
import FaqList from '../components/faqs/FaqList';
import Subscribe from '../components/subscribe/Subscribe';


function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        navigate(".", { replace: true, state: {} });
      }
    }
  }, [location, navigate]);

  return (
    <>
      <Showcase />
      <Features id="features" />
      <Logos />
      <Slider />
      <FeaturesExtended />
      <Testimonials />
      <FaqList />
      <Subscribe />
    </>
  );
}

export default Home;