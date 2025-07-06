"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Slider() {
    return (
        <div className="h-[520px] w-[1200px] relative cursor-pointer">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="rounded-lg overflow-hidden"
            >
                <SwiperSlide>
                    <img src="/images/Banner_10_10-2.jpg" alt="Banner 1" className="w-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/1092X466.jpg" alt="Banner 2" className="w-full object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
