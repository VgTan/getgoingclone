import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      speed={1000}
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
      <SwiperSlide>
        <div className="w-screen h-[44vh]">
          <div className="max-w-[1320px] flex items-center justify-between mx-auto">
            <div className="w-[45%] h-[44vh] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692364277swiss%202%20(1)-min.JPG?alt=media&token=e4b0843f-875b-4bbe-b8bc-642318848bca"
                alt=""
              />
            </div>
            <div className="text-center font-mono text-lg max-w-[55%] pl-[12%] pr-[%]">
              <div className="leading-[1.5] w-full">
                <p className="tracking-[0.2em] text-[#979797] font-extralight">
                  EKSPLOR DAN NIKMATI MUDAH LIBURAN KE LUAR NEGERI DENGAN
                  <p className="text-[#464646] font-poppins font-bold text-4xl tracking-tight my-3">
                    Aplikasi GetGoing
                  </p>
                  DAPAT DIDOWNLOAD DI
                </p>
              </div>
              <div className="flex w-full justify-around mt-4">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/getgoing/id1602015694"
                  className=""
                >
                  <img
                    className="h-[80px]"
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
                    className="h-[80px]"
                    src="./images/GooglePlay.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-full items-center h-[48vh]">
          <div className="w-[1320px] flex items-center justify-between mx-auto">
            <div className="w-[48%] max-w-[50%] h-[47vh] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11"
                alt=""
              />
            </div>
            <div className="font-mono text-lg max-w-[52%] w-[50%] pr-[6%] pl-[10%]">
              <div className="">
                <p className="tracking-[0.2em] text-[#979797] font-extralight text-center">
                  APA YANG GETGOING PUNYA?
                </p>
                <div className="font-poppins">
                  {/* ITEM 1 */}
                  <div className="flex items-center py-7 w-max hover:-translate-y-2 transition duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-[#f8f9fa] rounded-full flex justify-center items-center mr-6">
                      <img
                        className="h-12 w-12 object-contain"
                        src="./images/content/Beach.png"
                        alt=""
                      />
                    </div>
                    <div className="font-bold flex flex-col gap-2">
                      <p className="text-lg">Trip Planner</p>
                      <span className="text-sm bg-[#f8f9fa] px-2 py-1 rounded-2xl">Susun Rute perjalananmu sendiri</span>
                    </div>
                  </div>
                  {/* ITEM 2 */}
                  <div className="flex py-7 w-max hover:-translate-y-2 transition duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-[#f8f9fa] rounded-full flex justify-center items-center mr-6">
                      <img
                        className="h-12 w-1h-12 object-contain"
                        src="./images/content/Beach.png"
                        alt=""
                      />
                    </div>
                    <div className="font-bold flex flex-col gap-2">
                      <p className="text-lg">Guide</p>
                      <span className="text-sm bg-[#f8f9fa] px-2 py-1 rounded-2xl">Tour Guide berbahasa Indonesia</span>
                    </div>
                  </div>
                  {/* ITEM 3 */}
                  <div className="flex py-7 w-max hover:-translate-y-2 transition duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-[#f8f9fa] rounded-full flex justify-center items-center mr-6">
                      <img
                        className="h-12 w-12 object-contain"
                        src="./images/content/Beach.png"
                        alt=""
                      />
                    </div>
                    <div className="font-bold flex flex-col gap-2">
                      <p className="text-lg">Info</p>
                      <span className="text-sm bg-[#f8f9fa] px-2 py-1 rounded-2xl">Info penting di luar negeri</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
