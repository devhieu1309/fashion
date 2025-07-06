"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function UserReviews() {
    return (
        <div className="w-[860px] relative cursor-pointer">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="rounded-lg overflow-hidden"
            >
                <SwiperSlide>
                    <div>
                        <div className="flex">
                            <div className="flex w-[50%] p-3">
                                <div className="w-[35%] h-[195px]">
                                    <div className="rounded-[999px] shadow-lg overflow-hidden flex items-center justify-center bg-white">
                                        <img src="/images/DAI04124-scaled.jpg" className="text-white w-full h-full object-contain" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 pl-3">
                                    <div className="flex pb-2">
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                    </div>
                                    <div className="pb-4">
                                        <p className="text-black">Sản phẩm rất ứng ý. Đóng gói chuyên nghiệp. Một người mua hàng thông thái, không chỉ cần 1 sp (sản phẩm) chất lượng, đóng gói sản phẩm đẹp mà bên cạnh điều đó thái độ Phục Vụ chuyên nghiệp là điều quan trong nhất, thái độ phục vụ tốt sẽ làm kh (Khách Hàng) hl (Hài Lòng), và sec (sẽ) giới thiệu với nhiều người khác</p>
                                    </div>
                                    <div>
                                        <p className="text-[#0A0A0A] font-semibold">Nguyễn Thế Anh <span className="font-normal">/ Manager</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 p-3">
                                <div className="w-[35%] h-[195px]">
                                    <div className="rounded-[999px] shadow-lg overflow-hidden flex items-center justify-center bg-white">
                                        <img src="/images/1111.jpg" className="w-full h-full object-contain text-white" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 pl-3">
                                    <div className="flex pb-2">
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                    </div>
                                    <div className="pb-4">
                                        <p className="text-black">Sản phẩm rất ứng ý. Đóng gói chuyên nghiệp. Một người mua hàng thông thái, không chỉ cần 1 sp (sản phẩm) chất lượng, đóng gói sản phẩm đẹp mà bên cạnh điều đó thái độ Phục Vụ chuyên nghiệp là điều quan trong nhất, thái độ phục vụ tốt sẽ làm kh (Khách Hàng) hl (Hài Lòng), và sec (sẽ) giới thiệu với nhiều người khác</p>
                                    </div>
                                    <div>
                                        <p className="text-[#0A0A0A] font-semibold">Nguyễn Thế Anh <span className="font-normal">/ Manager</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="flex">
                            <div className="flex w-[50%] p-3">
                                <div className="w-[35%] h-[195px]">
                                    <div className="rounded-[999px] shadow-lg overflow-hidden flex items-center justify-center bg-white">
                                        <img src="/images/DAI04124-scaled.jpg" className="text-white w-full h-full object-contain" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 pl-3">
                                    <div className="flex pb-2">
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                    </div>
                                    <div className="pb-4">
                                        <p className="text-black">Sản phẩm rất ứng ý. Đóng gói chuyên nghiệp. Một người mua hàng thông thái, không chỉ cần 1 sp (sản phẩm) chất lượng, đóng gói sản phẩm đẹp mà bên cạnh điều đó thái độ Phục Vụ chuyên nghiệp là điều quan trong nhất, thái độ phục vụ tốt sẽ làm kh (Khách Hàng) hl (Hài Lòng), và sec (sẽ) giới thiệu với nhiều người khác</p>
                                    </div>
                                    <div>
                                        <p className="text-[#0A0A0A] font-semibold">Nguyễn Thế Anh <span className="font-normal">/ Manager</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 p-3">
                                <div className="w-[35%] h-[195px]">
                                    <div className="rounded-[999px] shadow-lg overflow-hidden flex items-center justify-center bg-white">
                                        <img src="/images/1111.jpg" className="w-full h-full object-contain text-white" alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 pl-3">
                                    <div className="flex pb-2">
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                        <img className="text-white" src="/images/icons8-star-24.png" alt="" />
                                    </div>
                                    <div className="pb-4">
                                        <p className="text-black">Sản phẩm rất ứng ý. Đóng gói chuyên nghiệp. Một người mua hàng thông thái, không chỉ cần 1 sp (sản phẩm) chất lượng, đóng gói sản phẩm đẹp mà bên cạnh điều đó thái độ Phục Vụ chuyên nghiệp là điều quan trong nhất, thái độ phục vụ tốt sẽ làm kh (Khách Hàng) hl (Hài Lòng), và sec (sẽ) giới thiệu với nhiều người khác</p>
                                    </div>
                                    <div>
                                        <p className="text-[#0A0A0A] font-semibold">Nguyễn Thế Anh <span className="font-normal">/ Manager</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
