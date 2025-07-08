"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function SliderProductDetail({ images }) {
    const [mainImage, setMainImage] = useState(images[0]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className="flex-1 w-[493px] h-[559px] relative">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                loop={true}
                // autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="overflow-hidden"
            >
                <SwiperSlide>
                    <img src={`/images/${mainImage}`} alt="Banner 1" className="w-full object-cover" />
                </SwiperSlide>
                {
                    images.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <img src={`/images/${item}`} alt="Banner 2" className="w-full object-cover" />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>

            {/* Nút custom Next */}
            <div ref={prevRef} className="swiper-button-next-custom absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer text-blue-500 hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>

            {/* Nút custom Prev */}
            <div ref={nextRef} className="swiper-button-prev-custom absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer text-blue-500 hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
        </div>
    );
};
