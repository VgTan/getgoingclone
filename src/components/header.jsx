import React from "react";
function Header() {
  return (
    <div className="absolute top-0 left-0 w-full font-poppins">
      <div className="flex items-center max-w-[1280px] justify-between mx-auto">
        <div className="flex w-full items-center p-4">
          <div className="mr-1">
            <a className="" href="/">
              <img
                src="/images/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png"
                alt="getgoinglogo"
              />
            </a>
          </div>
          <div className="w-[40%] rounded-3xl shadow-search-box">
            <form className="w-full rounded-3xl bg-white overflow-hidden">
              <div className="flex items-center">
                <input
                  className="w-[70%] pl-5 py-2"
                  type="text"
                  placeholder="Cari negara, kota, atau guide"
                />
                <div className="ml-auto bg-red-600 rounded-full flex items-center justify-center w-8 h-8 mr-[0.4rem]">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 108.06"
                    className="w-3"
                  >
                    <title>previous-arrow</title>
                    <path d="M58.94,24.28a14.27,14.27,0,0,1,20.35-20l39.49,40.16a14.28,14.28,0,0,1,0,20L80.09,103.79a14.27,14.27,0,1,1-20.35-20L74.82,68.41l-60.67-.29a14.27,14.27,0,0,1,.24-28.54l59.85.28L58.94,24.28Z" />
                  </svg>
                  
                </div>
              </div>
            </form>
          </div>
          <div className="ml-auto">
            <ul className="flex items-center mr-3 text-sm">
              <li className="m-[0.6rem] text-red-500">
                <a className="font-bold" href="">
                  Beranda
                </a>
              </li>
              <li className="m-[0.6rem] text-red-500">
                <a href="">Servis Kami</a>
              </li>
              <li className="m-[0.6rem] text-red-500">
                <a href="">Blog</a>
              </li>
              <li className="font-bold m-5 ml-8 text-sm tracking-wider">
                <a href="">L O G I N</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;