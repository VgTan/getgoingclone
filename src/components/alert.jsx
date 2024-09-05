import React, { useState } from "react";

function Alert() {
  const [isAlerted, setIsAlerted] = useState(true);
  const handleClick = () => {
    setIsAlerted(!isAlerted);
  };
  return (
    <div className="fixed z-[100] bottom-[10px] right-[10px] shadow-alert-box p-[20px] rounded-[10px] bg-white">
      {/* CLOSE BUTTON */}
      <div
        className={`${isAlerted ? "hidden" : "block"} cursor-pointer`}
        onClick={(e) => handleClick()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 512"
          className="w-2"
        >
          <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z" />
        </svg>
      </div>
      <div
        className={`${
          isAlerted ? "block" : "hidden"
        } flex lg:gap-[5rem] gap-12 font-poppins items-center`}
      >
        <div className="leading-loose">
          <h2 className="text-danger font-bold">Hubungi kami</h2>
          <span>melalui IG atau WA</span>
        </div>
        <div className="">
          <a
            href="https://www.instagram.com/getgoing.co.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="rounded-circle border-0 mr-2 button-instagram btn btn-secondary bg-cover w-[50px] h-[50px]"
              style={{
                backgroundImage:
                  'url("https://getgoing.co.id/content/img/icon/instagram-button.png")',
              }}
            ></button>
          </a>

          <a
            href="https://wa.me/6281119190601?text=Hallo,%20Saya%20mau%20berlibur%20ke%20Eropa%20dengan%20Private%20Trip.%20Apakah%20bisa%20dibantu%20?"
            target="_blank"
          >
            <button
              class="rounded-circle border-0 mr-2 button-instagram btn btn-secondary bg-cover w-[50px] h-[50px]"
              style={{
                backgroundImage:
                  'url("https://getgoing.co.id/content/img/icon/whatsapp-button.png")',
              }}
            ></button>
          </a>
        </div>
      </div>
      <div className={`absolute top-0 right-0 p-1 w-max ${isAlerted ? "block" : "hidden"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
          className="w-4 h-4 cursor-pointer"
          onClick={(e) => handleClick()}
        >
          <path d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z" />
        </svg>
      </div>
    </div>
  );
}

export default Alert;
