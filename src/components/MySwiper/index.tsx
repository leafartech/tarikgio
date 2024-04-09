'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function MySwiper() {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={32}
            grabCursor={true}
            loop={true}
            modules={[Pagination, Navigation]}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                1000: {
                    slidesPerView: 2
                },
                500: {
                    slidesPerView: 2
                },
                300: {
                    slidesPerView: 1
                }
            }}
            navigation={true}
            className="mySwiper"
        >
            <SwiperSlide className="swiper-slide">
                <div className="h-[524px]">
                    <Image
                        src="/images/test/1.png"
                        alt="Depoimento"
                        width={572}
                        height={882}
                        layout="responsive"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="h-[524px]">
                    <Image
                        src="/images/test/2.png"
                        alt="Depoimento"
                        width={572}
                        height={882}
                        layout="responsive"
                        className="rounded-xl h-full"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}