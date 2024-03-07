import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards,Autoplay } from 'swiper/modules';
import '../assets/styles/Carousel.css'; // Import CSS for styling
import  Image  from 'react-bootstrap/Image';
import ImageSample from '../assets/images/image-sample.jpg';


const ImageCarousel = () => {
  
  return (
   <>
   <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

      >
        <SwiperSlide>
          <Image style={{height:"100%"}} src={ImageSample}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image style={{height:"100%"}} src={ImageSample}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image style={{height:"100%"}} src={ImageSample}/>
        </SwiperSlide>
      </Swiper>
   </>
  );
};

export default ImageCarousel;
