import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function carouselKotaPopular() {
  const kota = {
    Paris: {
      href: "https://getgoing.co.id/hasil-pencarian/Prancis/Paris",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F5cc12ad5-84cc-4c57-a9b7-8af97998c704?alt=media&token=f4b37f93-42fa-4cf6-830e-2e4d32afaf61",
      loc: "Prancis",
    },
    Bern: {
      href: "https://getgoing.co.id/hasil-pencarian/Swiss/Bern",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FBern-City(1).png?alt=media&token=4d7ec828-93dd-4a46-89d7-630e349135ea",
      loc: "Swiss",
    },
    Amsterdam: {
      href: "https://getgoing.co.id/hasil-pencarian/Belanda/Amsterdam",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F82baab12-2d5f-4e42-9ae0-438bcdc1224d?alt=media&token=b8ae1420-250a-4869-b1cc-01fb66a367ae",
      loc: "Belanda",
    },
    London: {
      href: "https://getgoing.co.id/hasil-pencarian/Inggris/London",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg?alt=media&token=c191c6ec-c7d7-4c46-a3ba-7152dc06d3c2",
      loc: "Inggris",
    },
    Roma: {
      href: "https://getgoing.co.id/hasil-pencarian/Italia/Roma",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(19)-min.png?alt=media&token=84487726-2ddc-4ce8-838f-070b8e3d78e7",
      loc: "Italia",
    },
    Zurich: {
      href: "https://getgoing.co.id/hasil-pencarian/Swiss/zurich",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FGallery%201.png?alt=media&token=05b1d2ee-8140-4dd2-840d-98c5223d7d82",
      loc: "Swiss",
    },
    Praha: {
      href: "https://getgoing.co.id/hasil-pencarian/Ceko/Praha",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(21)-min%20(1).png?alt=media&token=97a44f3f-3efd-4d7d-96be-a5764a79b37f",
      loc: "Ceko",
    },
    Berlin: {
      href: "https://getgoing.co.id/hasil-pencarian/jerman/berlin",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(22)-min.png?alt=media&token=671d26df-88cd-4018-9ee4-261085dc4299",
      loc: "Jerman",
    },
    Liverpool: {
      href: "https://getgoing.co.id/hasil-pencarian/Inggris/Liverpool",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1695136431neil-martin-nFo5hbJTM8A-unsplash.jpg?alt=media&token=a0182101-fa13-4502-9b80-2afdfd813270",
      loc: "Inggris",
    },
    Istanbul: {
      href: "https://getgoing.co.id/hasil-pencarian/Turki/Istanbul",
      img: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F2845db6f-60f5-4cae-8150-eb36790fdb82?alt=media&token=e563b344-e9eb-4e22-8536-24ee73bae5a8",
      loc: "Turki",
    },
  };
  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          695: {
            slidesPerView: 3,
          },
          890: {
            slidesPerView: 4,
          },
          1125: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={5}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Object.entries(kota).map(([key, { href, img, loc }], index) => (
          <SwiperSlide
            key={key}
            className="h-full lg:pb-8 pb-12 pt-8 mb-5 px-2 flex flex-col justify-center items-center"
          >
            <a href={href} className="flex justify-center">
              <div
                className={`relative h-max py-[12rem] lg:w-[15rem] w-full rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 bg-cover bg-center`}
                style={{ backgroundImage: `url('${img}')` }}
              >
                <div className="absolute bottom-0 flex flex-col justify-end gap-5 text-white font-poppins p-5 bg-gradient-to-t from-[#000000a6] w-full h-[65%]">
                  <h3 className="text-3xl font-bold">{key}</h3>
                  <p>{loc}</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
