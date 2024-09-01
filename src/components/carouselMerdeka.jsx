import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Controller,
} from "swiper/modules";

export default function CarouselMerdeka() {
  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  const merdeka = {
    Her: {
      title: "Keluar negeri pertama kali tanpa rasa khawatir",
      desc: "GetGoing bikin liburan keluar negeri tanpa rasa khawatir dan bener-bener kerasa kayak cuma punya kami berdua. Apalagi ada aplikasinya juga yang bisa dipakai untuk mengeksplor kota dengan informasinya yang cukup lengkap. Bintang 5 pokoknya",
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F171135077820230216_150747-min.jpg?alt=media&token=78f902bb-6967-457e-92cd-1877248b4460",
      name: "Herlika & Johan",
      work: "ENTREPRENEUR",
    },
    Hil: {
      title: "Liburan seperti yang aku mau",
      desc: 'Best banget segalanya mau aku recokin kapanpun (bahkan tengah malampun ready hahaha ) Bener2 seperti yg ku mau, yakni sistem "partner trip" bukan "jasa tour". Temen2 yg di kirim ke aku buat nemenin jg baik2 n sabar2.. Thankyouuu banyak yah mbaa See you aku recokin di negara2 lain ya mbaaa.',
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711350675Image_20221216_075245_899%20(1).jpeg?alt=media&token=05ac57ca-86f1-424d-a4f7-8d260f64e9f9",
      name: "Hilda",
      work: "ENTREPRENEUR",
    },
    Win: {
      title: "Liburan keluarga yang sangat berkesan dan menyenangkan",
      desc: "Sekali lagi, terima kasih semua yg tak terhingga pada All Team GetGoing yang SUPER DUPER KEREN! yang udah gercep pandu kita, gercep belikan tiket reshecedhule kemarin, kasih ide2 get lost yang mantap, kasih hotel yang nyaman dll semua nya yg ga bisa saya sebutkan satu per satu... Alhamdulillah ini liburan keluarga yg sgt berkesan dan menyenangkan, dan bucket list impian ke swiss bisa terwujud... Alhamdulillaaah 🤲🏻🤲🏻 THE BEST BUAT GETGOING TEAM KALIAAAN TERBAIIIIKKKK.",
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711351458D489AF07-D4B4-47D7-A6C1-966BE41F01F7%20(1)-min.jpg?alt=media&token=8ba3ff45-2dff-4e6d-8af4-073b7623813a",
      name: "Winda & Kiky",
      work: "BANKER",
    },
    Meta: {
      title: "Liburan mengesankan di hari anniversary",
      desc: "Liburan kami penuh dengan cerita dan pengalaman yang luar biasa. Dapat kejutan kue Black Forest saat literally di Black Forest di kota Freiburg untuk anniversary kami. Kalau bisa saya dan suami mau kasih sepuluh bintang untuk Tim Getgoing. Terima kasih untuk service yang luar biasa sebelum berangkat, selama liburan bahkan sesudahnya. So, thank you so much dear Tim GetGoing, You guys are the best. Kita doain Tim GetGoing semakin sukses ke depannya.",
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F171135069520230622_174403-min.jpg?alt=media&token=fc0fa5c4-9b99-4344-b91d-b9211429edd7",
      name: "Meta",
      work: "WRITER",
    },
    Vin: {
      title: "Perpaduan servis dan kemauan liburan",
      desc: "Keputusan kita menggunakan GetGoing sangat tepat karena mereka bisa memadukan servis sesuai dengan kemauan kita dan preferensi kita dan mereka juga siap konsultasi 2 arah dengan kita ! Jadi buat kalian yang mau explore Europe for the first time aku sangat saranin pakai GetGoing. Sukses terus buat GetGoing!.",
      img: "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711350701IMG_2064-min.jpg?alt=media&token=b0036122-135b-40da-84aa-a7f9530b2499",
      name: "Hilda",
      work: "ENTREPRENEUR & BANKER",
    },
  };
  return (
    <>
      <div className="flex">
        <div className="max-w-[50%]">
          <Swiper
            ssMode={true}
            grabCursor={true}
            navigation={true}
            modules={[Navigation, Mousewheel, Keyboard, Controller]}
            className="mySwiper"
            onSwiper={setSwiper1}
            controller={{ control: swiper2 }}
          >
            {Object.entries(merdeka).map(([key, { title, desc }], index) => (
              <SwiperSlide key={key} className="w-full h-full pl-10">
                <div className="text-start flex flex-col gap-3 font-poppins">
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-[#8791a9] text-[0.8rem] tracking-wide leading-loose">{desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="max-w-[50%] px-10">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 20,
              stretch: 50,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Controller]}
            className="mySwiper"
            onSwiper={setSwiper2}
            controller={{ control: swiper1 }}
          >
            {Object.entries(merdeka).map(
              ([key, { name, img, work }], index) => (
                <SwiperSlide
                  key={key}
                  className="w-full h-full p-3 pb-10 flex flex-col justify-center items-center bg-white gap-5 shadow-card"
                >
                  <div className="h-[11.3rem] w-full">
                    <img src={img} className="h-full w-full object-cover" />
                  </div>
                  <div className="font-poppins">
                    <h3 className="font-bold text-base">{name}</h3>
                    <p className="text-xs text-[#585858] tracking-widest">
                      {work}
                    </p>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
}
