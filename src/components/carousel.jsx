import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="lg:mb-10">
      <Swiper
        slidesPerView={1}
        speed={1200}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="lg:pt-[9rem] pt-[6rem] px-4">
          <div className="lg:max-w-[1320px] lg:flex flex flex-col lg:flex-row items-center justify-between mx-auto lg:p-0 ">
            <div className="lg:w-[45%] lg:max-w-[50%] lg:h-[42vh] w-full h-[28vh] rounded-2xl overflow-hidden relative">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692364277swiss%202%20(1)-min.JPG?alt=media&token=e4b0843f-875b-4bbe-b8bc-642318848bca"
                alt=""
              />
              <div className="absolute bottom-0 h-[60%] w-full bg-gradient-to-t from-[#000000ae]  z-1 pointer-events-none"></div>
            </div>
            <div className="text-center font-poppins lg:text-base text-base lg:max-w-[50%] lg:pt-0 pt-8 lg:px-20 p-0">
              <div className="leading-[1.5] w-full">
                <p className="tracking-[0.3em] text-[#868e96] font-[300]">
                  EKSPLOR DAN NIKMATI MUDAH LIBURAN KE LUAR NEGERI DENGAN
                  <p className="text-main font-poppins font-bold text-[2rem] tracking-normal my-3">
                    Aplikasi GetGoing
                  </p>
                  DAPAT DIDOWNLOAD DI
                </p>
              </div>
              <div className="flex justify-between lg:justify-between md:justify-around mt-4 lg:px-7 gap-2">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/getgoing/id1602015694"
                  className=""
                >
                  <img
                    className="lg:h-[80px] h-[70px]"
                    src="./images/AppStore.svg"
                    alt=""
                  />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.getgoing.app"
                  className=""
                >
                  <img
                    className="lg:h-[80px] h-[70px]"
                    src="./images/GooglePlay.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:pt-[9rem] pt-[6rem] px-4">
          <div className="lg:max-w-[1320px] lg:flex flex flex-col lg:flex-row items-center justify-between mx-auto lg:p-0">
            <div className="lg:w-[47%] lg:max-w-[50%] lg:h-[42vh] w-full h-[28vh] rounded-2xl overflow-hidden relative">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11"
                alt=""
              />
              <div className="absolute bottom-0 h-[60%] w-full bg-gradient-to-t from-[#000000ae]  z-1 pointer-events-none"></div>
            </div>
            <div className="font-poppins text-base lg:max-w-[52%] lg:w-[50%] lg:pr-[6%] lg:pl-[10%] w-full lg:mb-0 mb-20">
              <p className="tracking-[0.3em] text-[#868e96] font-light text-center lg:pt-0 pt-8 lg:mb-5 mb-5">
                APA YANG GETGOING PUNYA?
              </p>
              <div className="font-poppins flex flex-col lg:gap-12 gap-2 justify-center text-main">
                {/* ITEM 1 */}
                <div className="flex items-center w-max hover:-translate-y-2 transition duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-[#f8f9fa] rounded-full flex justify-center items-center mr-6">
                    <img
                      className="h-12 w-12 object-contain"
                      src="./images/content/Beach.png"
                      alt=""
                    />
                  </div>
                  <div className="font-bold flex flex-col gap-2">
                    <p className="text-xl">Trip Planner</p>
                    <span className="text-xs bg-[#f8f9fa] px-2 py-1 rounded-2xl">
                      Susun Rute perjalananmu sendiri
                    </span>
                  </div>
                </div>
                {/* ITEM 2 */}
                <div className="flex w-max hover:-translate-y-2 transition duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-[#f8f9fa] rounded-full flex justify-center items-center mr-6">
                    <img
                      className="h-12 w-16 object-contain"
                      src="./images/content/Beach.png"
                      alt=""
                    />
                  </div>
                  <div className="font-bold flex flex-col gap-2">
                    <p className="text-xl">Guide</p>
                    <span className="text-xs bg-[#f8f9fa] px-2 py-1 rounded-2xl">
                      Tour Guide berbahasa Indonesia
                    </span>
                  </div>
                </div>
                {/* ITEM 3 */}
                <div className="flex w-max hover:-translate-y-2 transition duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-[#f8f9fa] rounded-full flex justify-center items-center mr-6">
                    <img
                      className="h-12 w-12 object-contain"
                      src="./images/content/Beach.png"
                      alt=""
                    />
                  </div>
                  <div className="font-bold flex flex-col gap-2">
                    <p className="text-xl">Info</p>
                    <span className="text-xs bg-[#f8f9fa] px-2 py-1 rounded-2xl">
                      Info penting di luar negeri
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
