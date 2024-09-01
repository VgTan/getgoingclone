import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function carouselPopular() {
  const popular = {
    Naurah: {
      href: "https://getgoing.co.id/getguide/getguide?id=4c8f4c93-b8fe-4e86-b90e-3025dbeeb121",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FNaurah%20Annisa%20Wahyudi?alt=media&amp;token=c9f4af46-9521-445f-946f-2d1aaaedfec3",
      loc: "Amsterdam, Belanda",
    },
    Agus: {
      href: "https://getgoing.co.id/getguide/getguide?id=fcb64804-e8d4-44c4-a967-c263abfb1e36",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f",
      loc: "Roma, Italia",
    },
    Nahdira: {
      href: "https://getgoing.co.id/getguide/getguide?id=ab8c7315-4fa8-4ee9-b1be-a47eba7dc1e3",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FA8A3A748-BC84-4500-A0F1-15D222EC3219.jpeg?alt=media&token=b9e8a444-ddb1-4f33-9940-33aa425967dc",
      loc: "Paris, Prancis",
    },
    Nuel: {
      href: "https://getgoing.co.id/getguide/getguide?id=9f227f5c-6820-4bb4-a234-71ce9eebeaa9",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FE220E138-0044-4D6E-963A-50A4B82D1AF2.jpeg?alt=media&token=217d42b8-661c-408f-8f4c-18ecddd24025",
      loc: "Paris, Prancis",
    },
    Oben: {
      href: "https://getgoing.co.id/getguide/getguide?id=295b8811-5eef-4a9d-aaf3-93342caf310c",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FPilar%20Kobenhavn?alt=media&token=342dd39b-04eb-4c7c-a86a-552178187fe3",
      loc: "Manchester, Inggris",
    },
    Hanifa: {
      href: "https://getgoing.co.id/getguide/getguide?id=854093e7-a28a-4797-8e8e-6c67c43e466c",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FE5E046B0-9750-458D-BDCF-C9FE6EF2A763.JPG?alt=media&token=2fb6aae5-b8e2-4437-b592-57b19e022499",
      loc: "London, Inggris",
    },
    Nili: {
      href: "https://getgoing.co.id/getguide/getguide?id=027c7ce9-b345-4ab8-a3f2-d753dc3f4ec0",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FDitri%20Adnili%20Adnursa?alt=media&token=ef5dcd70-d854-4f01-a93c-8245de3acd41",
      loc: "Istanbul, Turki",
    },
    Kadhan: {
      href: "https://getgoing.co.id/getguide/getguide?id=ade0dc2c-1cf0-4a48-8034-3d5f9acbb323",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FMuhammad%20Kadhan%20Ruskanda?alt=media&token=e1b17fe1-8d88-4335-a85c-3cf7cc0af9e4",
      loc: "Milan, Italia",
    },
    Nabila: {
      href: "https://getgoing.co.id/getguide/getguide?id=8ad73beb-dac7-4ac5-a556-9c22362a2d76",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FWhatsApp%20Image%202023-05-08%20at%2010.54.49.jpg?alt=media&token=0c5cbbac-b60d-4175-8c51-89a8370308dd",
      loc: "Paris, Prancis",
    },
    Edo: {
      href: "https://getgoing.co.id/getguide/getguide?id=9bbf6b3a-91c9-44a6-b221-9d5b71b88de6",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2Fedo.jpg?alt=media&token=86061efd-9088-4ad6-9128-103e204c8049",
      loc: "Paris, Prancis",
    },
  };
  return (
    <>
      <Swiper
        slidesPerView={5}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Object.entries(popular).map(([key, { href, img, loc }], index) => (
          <SwiperSlide key={key} className="h-full py-5 mb-5 flex flex-col justify-center items-center px-5">
            <div className="h-[13rem] w-[13rem] rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300">
              <a href={href}>
                <img
                  src={img}
                  alt={key}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
            <div className="font-poppins py-2 w-full">
              <p className="font-bold text-base">{key}</p>
              <span className="text-base font-[300]">{loc}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
