import { React, useEffect, useRef, useState } from "react";
import "../App.css";
function Header() {
  const ref = useRef();
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav");

      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      ref={ref}
      className={`w-full font-poppins nav transition-transform duration-300 ease-in-out z-[100] px-[1rem] ${
        isFixed ? "nav-fixed top-0 transform" : "nav-absolute top-0 transform"
      }`}
    >
      <div className="nav-container flex items-center max-w-[1280px] justify-between mx-auto px-1 py-3">
        <div className={`flex w-full items-center md:gap-10 lg:gap-0`}>
          <div className="md:mr-1 md:w-max">
            <a className="" href="/">
              <img
                src={`${
                  isFixed
                    ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAclBMVEXMAADmBA/XAADmBgHfAgDZAwHMAADLAADLAQDJAAHKAADKAAHJAAHHAQTJAADJAQPIAQLIAQHHAQLHAQHHAQLEBAnFAgPGAQLFAgPDAgPEAQK/BQzAAgTEAQK8Awa8AwS7Bwy/BgmyAgnLAADXAADEAAALxB67AAAAI3RSTlP+9/f3/Pf17uXh18vBvq+ikYN3X2dkVktBNiwsHQAADAwUDCoA1ekAAAn8SURBVGje7Vtpc6s6Eu0PLmGDzW6zBEQBev//L47UYtEGBid5M1UT2Te5jjFHvR+1ZGj/mwP+0P/Q/9D/99Eppfxnh8/pxb+EThESMQUs/yledp9MAT4An2Fox4cElT+7X0ZHJdO+LrI0jsLw8QjDKE7zom6onFX3W+iDkJA2RRoFV2CMXZYHAy+IkqLpxAQG+vPoKBmt88gXwAzEIPjAIeYy3qK8Omd9OIpN2+YVXSXwBAkjH9N/CU6BXcOswXn+KDpt6zTgtx8RZnQNMYWRXcBPanoUH46JXsc3ITXZQJ7wR3EFV0BcHcSHI9hNwlX+BnqZgsRvDjkAvFd6l/sCezw60ANu+XBAfHgXZW0VwhlshBfyP7j6h++hU5p6jJ3CnvV/8VL6Ldm5xUOODeMHAwhjYfNG+7ALXvonla4Orn6/bHfhYQ888xgAfIrO7c+8TKlKZ9Bpm46MfAMdhPYh3YOHbfAEtt1tTfNkyblO7TNIduBhEzzeNPmS1acKJ/PvJ/CwKfkGOGZzPsjVv/Pq/rj7V8JwBu4JCOXTLXjYsrlb7VJm7x4LQtFzajP0TV3k8d2T1c8JP+Zb1A+c2G3mBEdsL8wri8F0VR56G/iEkYKekJ2WngMcsf1kIRDdQmrlh6rEd+MTdqvdugdXbm8CJzjHTpsle9CJTE6TEb+aFPHtj7J774QHV26PxC3AEtxLmoVbqqrEVzKnNomdoETZZ7HT8cFh9BzsO3DBw0qn8S0dhn6YVCAnwF9UDxc8g1d7BJ3b78r1boGTdFDYfF8+4+gRBMH9ESV5Ncwa4O8OCWHW3AnzG0e9tWWn4cU0HQe/FavG+1cUEKS2cnA+HRfLkoq2rytz3CFeXGQPPbNSJ/9oUC8Llq8ESTXMA63CIEibhXpXvgEvdE8KW/fg8ncL/N5MhJ671U1Fngm1mICfdvMU+U3MexAWdpbjWbKnttEwXqRdnzKkBaxRc8QEgmIOgca3bwNZu4/ORfeNUBdqb6Sbt30EbKuiIT7EnbyS1jcdHnjOufcmvCE75aKbmeJaUyl4FbC9aoriP2YqXRJL+UL4HdmdomOkCvDi+o7pCHy/krmAZw3jYsIenSG8IXvORtPjkimrFkdolojNavL9yBTednsNnQ6h9Yn75Kmlx46QLCF9LbOf5XlwiYx8q6ObxuKBUshy8nVzOLGylNW8tJdhnxnviVrXbqFTJDQ6+CWWnZnhYfuQzHbGBDD5RDLtm5rk7+Q6zVBlp72RJHhZk1oUJA9M9wbwrlcPDFIDEgRlLC3hQ93vNPRSF0MmZyGHbhGM7FuYFtVXXRWpIDWj9jYPUln3jJKBb7jRHYpnngwfVe8w04yFZNA60WMRdY9hV4ymyrItnzftBMJH8S7PcVEKgpO4p1PulXb8wiSoxlaJwnd3PT/NfuRCN7IjJhpxpeZyQq+vqZjMJV0wEqJfE1FJjdeKhAsQI9uC0hgq9PDhkdsgwkvh6phOqLU25EVdzQdoMyF8TS5MHReoqBOdGuVtCjc+lKQl2F1p0wSMbqI6B0twil0cPO44Ajn80okuUuPFUHyGs8JEA/Mfx6drTU5x9TMqkwym2BpoNwzdIJqqXd/1fef2OjOjcPtWqPjnqICz0EGQps8r2WL2O5uyOnOdzMtEizeZMVfFA9pzY03G//xa0x6fZkpXxr8Od4UVHuJptZ1cImp4vPTlrW4MHe7MUJJC+J3witeVRDe7qK1UMzv/9drrBKXKlai5E/26Agz0HFWiZFkebc3mRgS/tCITPIxztj2GjutWK9eIN56qMR97XZi295WJkvJUt1DnNRxSLiCesHodi+luI3t1EW7FQrm2W590C10PODl5mqqyJ7voPDzGRfYxa6e13bT0o7bDwhaTX1SnuVKyr0kFXeSq7pVlLzmKVyFH2R+SHWb0z2XHsjVvY+DwyETVLK8z7M5cdo92PEmzO//N0UXdZ/LB5n+v7/g8PerzUnaiFVjgS3OVVW/H+4jsDON9Xs7zeP9qd+K9JIqPgNS8Tn5lJNFzuW6hNfDci2G1yjGYNG/ScLfs1LgWnHk+3DQ8pZ1a5Ljh6Bl0Y+1B5hoXqzWOlJvZjuYKtcdOjQNd+rKjxnVmfcdqShW3Q7/b6rrqqwF0WqfspeK4CnobG9yGZXhho3Eb0fJ2OR7VVxyL7OZ6XMS7S/MWrxPRrWcw/PirdVKrfNQ5Pb/OYAyT7C50aobciF0uIWjxjyo88wqX5DkYduMGdqDrjEvl843F5zNqpDAJ/5y3WpcuKU3AXAdxFVe25kErvCp6F+qNC7iEskK9FOEF/Bh9rS1ScTPcswOrQ1a5ZXdlG8vw4tKJQ4bmIvI2bbWKH0MZmW2NbfRN2WWm1JfJsWzBVp7pkMx7JM+iKsXOAHE0xk/KjhF731jEyjILxhbFyCum/I/dU9mWXaXkoB2psHoXLJKWtxs6snkh+3eOfs6EDodlF6TUs3oUclPD3Xx09W00dOLQfLWhedvrxYKmkQcfqpvds9rZisOKUBFbds+teWebad5V4Aoob+zEviSilw6v8zZlx0ph9SqzKayr24ldWYnulH1T8yLkzW0JXLDju18Pdhgf3askp2R3bEfJ5qPMrEP8z26f2EY/I7urUzvvTMgOTRFsxtj3ZZcZh4zujRHc80l9YHoryBl5aDCn7DXdRMceALMd36/o3Hfo8zthbGsGK3nmoeWUfQfd1dleDxFMmzNDmdyvAGx3iO5U6Uj/113ND23tu/bjIO7WZSAdvl5pHIZTO2ruSPmBv4xrULvR6z2va+Wixk6rLCjn5iBdjn7RgQ4df4q+VC9H0zdydG1BzqNP/NDWPsT1tOM532DZf3WP6rzsdK60NiFk10Rth1Ba53meyWGtlIuySuET2UVJ2dh/v8bFsDgtzXBVCnOhVXcIccE8WnVJ7nC9OXdRkM2zBxBk+q7paEbbsmx2kY63XieMm48b5y4IXO4r+rgf9Y4UeHuLvnPsQ1tJ0uzsYaBD6HSBBxc6/V10CT+6bf9N2Zv3XofwOXE4joJOP0H3D8gu4V07rxp6/kuyT1TyLg5z/ii6fwwdk1ofm2Gr2f00OjmMPpn2pp9t1Ho3Ytn8S7LLetvW0aiqf9ohmE/mwC+iy/EK2Io/77U52ps/rnnB5Lj18fwUARv9X5BdHHQR+DiBFV2e0vhtdEmomvxB5EHuuZnUfiA7+UR2/EBXxPLofqScUBl/X/MCHo9oNa/47l3CdUMBD3iSzYdNtKc18Sff2kA6X+Vrhz29XNSvT8jnPtH2P0Sn9u8iDKNwGo/w8Zh3fC2GffNvfFyvN/Lo6aeyU3MjVVBq/uymMcx7vTO7XkctHnw0W+cujjugpgWja+xsIk+nD80d5O9+S6s78/yBbyrZX2U586Q/if7N8Yf+h/7/hv4fqOCC6rze9BUAAAAASUVORK5CYII="
                    : "/images/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png "
                }`}
                alt="getgoinglogo"
                className={`md:block hidden ${
                  isFixed
                    ? "w-[2.8rem] h-[2.8rem] mr-[20px] ml-0 animate-active"
                    : ""
                }`}
              />
              <img
                src="data:image/png;base64,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"
                alt="getgoinglogo"
                className={`md:hidden block w-[52px] h-[52px] mr-4 ${
                  isFixed
                    ? "w-[52px] h-[52px] mr-[20px] ml-0 animate-active"
                    : ""
                }`}
              />
            </a>
          </div>
          <div className="lg:w-[37%] md:w-[58%] rounded-3xl shadow-search-box">
            <form className="w-full rounded-3xl bg-white overflow-hidden">
              <div className="flex items-center">
                <input
                  className="w-[70%] pl-5 py-2 text-wrap"
                  type="text"
                  placeholder="Cari negara, kota, atau guide"
                />
                <div className="ml-auto bg-danger rounded-full flex items-center justify-center w-8 h-8 mr-[0.4rem]">
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
          <div className="md:ml-auto w-max ml-4">
            <ul className="lg:flex items-center mr-3 text-sm hidden">
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
            <div className="lg:hidden block">
              <div className="h-full">
                <div className="relative h-[0.2rem] w-5 rounded-xl bg-red-500 transition duration-700 z-[100]"></div>
                <div className="relative mt-[0.15rem] h-[0.2rem] w-5 rounded-xl bg-red-500 transition duration-500 z-[100]"></div>
                <div className="relative mt-[0.15rem] h-[0.2rem] w-5 rounded-xl bg-red-500 transition duration-500 z-[100]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
