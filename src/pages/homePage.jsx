import React from "react";
import Carousel from "../components/carousel";
import CarouselPopular from "../components/carouselPopular";
import CarouselKotaPopular from "../components/carouselKotaPopular";
import CarouselMerdeka from "../components/carouselMerdeka";
import Articles from "../components/articles";

function homePage() {
  return (
    <div className="bg-white">
      <div className="pt-[7.8rem]">
        <Carousel />
        <section className="max-w-[1320px] mx-auto my-3">
          <h1 className="font-bold font-poppins text-3xl mb-3">
            <span>Sedang</span> <span className="text-danger">Populer</span>
          </h1>
          <CarouselPopular />
        </section>
        <section className="py-1 mb-5 flex justify-center">
          <div className="max-w-[1320px]">
            <div className="mt-3 text-center pb-lg-2 font-bold">
              <h2 class="mb-2 text-3xl">
                “Better to <span class="text-danger">SEE</span> something once
                than hear about it{" "}
                <span class="text-primary">A THOUSAND TIMES</span>”
              </h2>
              <h4 class="mb-1 text-2xl">- Asian Proverb.</h4>
            </div>
          </div>
        </section>
        <section className="max-w-[1320px] m-auto mt-14">
          <div className="grid grid-cols-2">
            <div className="font-poppins h-full grid">
              <div className="text-[2.5rem]">
                <span className="text-red-500">PRIVATE TRIP</span>
                <div className="font-bold mt-5 drop-shadow-xl leading-[1.3]">
                  <h1>
                    Berangkat <span className="text-danger">Kapan Saja</span>
                  </h1>
                  <h1>Semaumu</h1>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-auto grid-flow-row gap-10">
                {/* ITEM 1 */}
                <div className="flex px-5 items-center gap-5">
                  <div className="">
                    <img
                      src="https://getgoing.co.id/content/img/icon/check-circle.png"
                      alt=""
                    />
                  </div>
                  <div className="pr-10">
                    <p>Tentukan tanggal keberangkatan sesukamu</p>
                  </div>
                </div>
                {/* ITEM 2 */}
                <div className="flex px-5 items-center gap-5">
                  <div className="">
                    <img
                      src="https://getgoing.co.id/content/img/icon/check-circle.png"
                      alt=""
                    />
                  </div>
                  <div className="pr-10">
                    <p>Tidak ada kuota minimum, jadi pasti berangkat</p>
                  </div>
                </div>
                {/* ITEM 3 */}
                <div className="flex px-5 items-center gap-5">
                  <div className="">
                    <img
                      src="https://getgoing.co.id/content/img/icon/check-circle.png"
                      alt=""
                    />
                  </div>
                  <div className="pr-10">
                    <p>
                      Fleksibel, bebas tentukan destinasi dan aktivitas
                      perjalanan
                    </p>
                  </div>
                </div>
                {/* ITEM 4 */}
                <div className="flex px-5 items-center gap-5">
                  <div className="">
                    <img
                      src="https://getgoing.co.id/content/img/icon/check-circle.png"
                      alt=""
                    />
                  </div>
                  <div className="pr-10">
                    <p>Liburan jadi lebih exclusive untuk kamu dan keluarga</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-danger to-[#ff9e22] rounded-l-[50px] flex items-center justify-center p-10">
              <div className="grid grid-cols-2 justify-center m-auto w-full py-5 px-3 gap-5">
                {/* KONSUL */}
                <div className="p-5 backdrop-blur-xl bg-[#ffffff38] rounded-xl max-w-1/2 flex flex-col gap-2">
                  <div className="bg-white rounded-xl w-max p-3">
                    <img
                      src="https://getgoing.co.id/content/img/servis-kami/support-gradient.png"
                      height="40"
                      width="40"
                    />
                  </div>
                  <p className="font-bold text-white">Konsultasi GRATIS</p>
                  <span className="text-gray-300">Curhatin aja semuanya!</span>
                </div>
                {/* GUIDE */}
                <div className="p-5 backdrop-blur-xl bg-[#ffffff38] rounded-xl max-w-1/2 flex flex-col gap-2">
                  <div className="bg-white rounded-xl w-max p-3">
                    <img
                      src="https://getgoing.co.id/content/img/servis-kami/person-pin-gradient.png"
                      height="40"
                      width="40"
                    />
                  </div>
                  <p className="font-bold text-white">Local Guide</p>
                  <span className="text-gray-300">Biar ada temen!</span>
                </div>
                {/* TRANSPORTASI */}
                <div className="p-5 backdrop-blur-xl bg-[#ffffff38] rounded-xl max-w-1/2 flex flex-col gap-2">
                  <div className="bg-white rounded-xl w-max p-3">
                    <img
                      src="https://getgoing.co.id/content/img/servis-kami/commute-gradient.png"
                      height="40"
                      width="40"
                    />
                  </div>
                  <p className="font-bold text-white">Transportasi</p>
                  <span className="text-gray-300">
                    Bebas pilih transportasi apa
                  </span>
                </div>
                {/* LENGKAP */}
                <div className="p-5 backdrop-blur-xl bg-[#ffffff38] rounded-xl max-w-1/2 flex flex-col gap-2">
                  <div className="bg-white rounded-xl w-max p-3">
                    <img
                      src="https://getgoing.co.id/content/img/servis-kami/star-gradient.png"
                      height="40"
                      width="40"
                    />
                  </div>
                  <p className="font-bold text-white">Lengkap Pokoknya</p>
                  <span className="text-gray-300">
                    Hotel, Asuransi, Visa, Wifi dll
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1320px] mx-auto my-12">
          <h1 className="font-bold font-poppins text-3xl mb-3">
            <span>Kota</span> <span className="text-danger">Populer</span>
          </h1>
          <CarouselKotaPopular />
        </section>
        <section className="max-w-[1320px] mx-auto">
          <div className="font-poppins text-center flex flex-col gap-3">
            <h1 className="drop-shadow-xl text-3xl font-bold">
              Kata <span className="text-danger">Merdeka</span>
            </h1>
            <p className="text-[#9cafa3]">
              Cerita dari mereka yang telah menjelajahi Eropa bersama kami
            </p>
          </div>
          <div className="w-full">
            <CarouselMerdeka />
          </div>
        </section>
        <section className="bg-[#f8f9fa]">
          <div className="max-w-[1320px] mx-auto">
            <Articles />
          </div>
        </section>
      </div>
    </div>
  );
}

export default homePage;
