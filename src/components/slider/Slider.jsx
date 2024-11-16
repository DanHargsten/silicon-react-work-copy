import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'

import './slider.scss';

import sliderMyBudget from '../../assets/images/illustrations/slider-my-budget.svg';
import sliderYourCards from '../../assets/images/illustrations/slider-your-cards.svg';
import sliderTransfer from '../../assets/images/illustrations/slider-transfer.svg';
import sliderContactList from '../../assets/images/illustrations/slider-contact-list.svg';



const Slider = () => {
   const slides = [
      {
         image: sliderMyBudget,
         heading: 'Manage your budget with in-depth statistics',
         description: 'Lorem Ipsum neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
      },      
      {  
         image: sliderYourCards,
         heading: 'Collect all your credit cards in one place',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In justo mauris, pulvinar et pulvinar nec, pharetra fermentum odio. Curabitur feugiat.'
      },
      {
         image: sliderTransfer,
         heading: 'Transfers to people from your contact list',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque est. Interdum et malesuada fames ac ante ipsum primis.'
      },
      {
         image: sliderContactList,
         heading: 'Send and receive money quickly and securely',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum ipsum turpis, ac dapibus velit condimentum ac. In hac habitasse. In justo mauris, pulvinar et pulvinar nec.' },
   ];


   return (
      <div id="slider" className="slider-section">
         <div className="container">
            <div className="slider__header">
               <h2 className="slider__header-title">How Does It Work?</h2>
               {/* <p className="slider__header-description">Explore the steps below to see how Silicon makes your life easier</p> */}
            </div>


            <Swiper
               modules={[Navigation]}
               grabCursor={true}
               centeredSlides={true}
               slidesPerView="3"
               spaceBetween={10}
               loop={true}
               breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 10 },
                  768: { slidesPerView: 2, spaceBetween: 15 },
                  1400: { slidesPerView: 3, spaceBetween: 20 },
               }}
               navigation
            >
               {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                     <img className="slider__img" src={slide.image} alt={slide.heading} />
                     <div className="slider__slide-text">
                        <h3 className="slider__slide-title">{slide.heading}</h3>
                        <p className="slider__slide-description">{slide.description}</p>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Slider;