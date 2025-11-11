import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="container-fluid">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide>
          <img src="car1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="car4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="car2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="car3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
