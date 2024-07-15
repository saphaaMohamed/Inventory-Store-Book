
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import "../Style.css";
// import required modules
import { EffectCards } from 'swiper/modules';

const RightSwiper = () => {
  return (
    <div className=' border-l-indigo-500'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[200px]"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      
      </Swiper>
    </div>
  )
}

export default RightSwiper
