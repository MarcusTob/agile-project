import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src="/images/Image1-carousel.jpeg" alt="Slide 1" className="object-cover w-full h-64"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Image2-carousel.jpeg" alt="Slide 2" className="object-cover w-full h-64"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Image3-carousel.jpeg" alt="Slide 3" className="object-cover w-full h-64"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Image4-carousel.jpeg" alt="Slide 4" className="object-cover w-full h-64"/>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Carousel;
