import React, { Children } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./index.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Swipper({children}) {
    const arrayChildren = Children.toArray(children);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {arrayChildren?.map((child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
