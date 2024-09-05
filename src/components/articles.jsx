import React from "react";

function Articles() {
  const articles = [
    {
      imageSrc:
        "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2Fc6c93e21-0b09-45f0-b870-57abc211838f?alt=media&token=24603561-1fc0-4157-bd43-97a1abde0c74",
      title:
        "Daylight Saving Time Upaya Maksimalkan Cahaya Matahari dan Penghematan Energi",
      date: "27 Okt 2023",
      dateFormat: "27 11 2023",
      href: "https://getgoing.co.id/blog/DaylightSavingTimeUpayaMaksimalkanCahayaMataharidanPenghematanEnergi",
    },
    {
      imageSrc:
        "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2Ff6f7c2f3-fccd-4203-9af0-b3c120af3883?alt=media&token=9d3bd67f-5ac1-453f-a062-1be69471a1f1",
      title: "Giethoorn Menyimpan Keindahan Tersembunyi Desa Air Belanda",
      date: "15 Jan 2024",
      dateFormat: "15 01 2004",
      href: "https://getgoing.co.id/blog/GiethoornMenyimpanKeindahanTersembunyiDesaAirBelanda",
    },
    {
      imageSrc:
        "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17219014201.png?alt=media&token=6de68c1d-ff8b-489c-9910-bc3606a6c8ca",
      title: "Cerita Perjalanan Bersama GetGoing dari Kak Meta",
      date: "25 Jul 2024",
      dateFormat: "25 07 2024",
      href: "https://getgoing.co.id/blog/74ba6bf8-4b53-43a0-8e9d-995a15f81725",
    },
    {
      imageSrc:
        "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2FNapon-min.png?alt=media&token=21fe2ec8-139d-47bf-b908-6583d03f05e0",
      title: "Cerita Perjalanan Bersama GetGoing dari Kak Meta",
      date: "9 Jun 2021",
      dateFormat: "09 06 2024",
      href: "https://getgoing.co.id/blog/Siapa%20Kami%20-%20-%20Nadya%20Riapratama",
    },
  ];

  const getRandomUniqueItems = (array, n) => {
    const result = new Set();
    while (result.size < n) {
      const randomIndex = Math.floor(Math.random() * array.length);
      result.add(array[randomIndex]);
    }
    return Array.from(result);
  };

  const randomArticles = getRandomUniqueItems(articles, 3);
  const convertToISODate = (dateString) => {
    const [day, month, year] = dateString.split(" ");
    return `${year}-${month}-${day}`;
  };
  const sortedRandomArticles = randomArticles.sort((a, b) => {
    return (
      new Date(convertToISODate(a.date)) - new Date(convertToISODate(b.date))
    );
  });

  return (
    <div>
      <div className="bg-[#f8f9fa] font-poppin lg:px-0 px-4 ">
        <div className="flex flex-col pt-28">
          <div className="md:flex flex-col md:flex-row md:justify-between pb-10">
            <p className="text-[32px] text-[#21 2529] font-bold pb-2 md:pb-0">
              Baca juga
            </p>
            <button className="flex items-center gap-2 text-sm text-[#c00] tracking-[.3em] font-bold border border-[#c00] p-2 md:px-3 rounded-full ease-in-out duration-300 hover:bg-[#3c69ea] hover:border-[#3c69ea] hover:text-[#fff]">
              LIHAT SEMUA ARTIKEL
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.78em"
                height="0.8em"
                viewBox="0 0 992 1280"
              >
                <g transform="translate(992 0) scale(-1 1)">
                  <path
                    fill="currentColor"
                    d="M595 1120q0 13-10 23l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L192 704l393 393q10 10 10 23m384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10L407 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L576 704l393 393q10 10 10 23"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {/* ARTICLE */}
            {sortedRandomArticles.map((article, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#fff] shadow-xl rounded-lg ease-in-out duration-300 hover:-translate-y-2 pb-0"
              >
                <a href={article.href} className="">
                  <img
                    className="rounded-t-lg"
                    src={article.imageSrc}
                    alt={article.title}
                  />
                </a>
                <div className="flex flex-col gap-5 p-4 pb-12">
                  <a
                    href={article.href}
                    className="font-bold text-xl text-[#343a40] pt-3 hover:underline"
                  >
                    {article.title}
                  </a>
                  <p className="font-medium text-sm text-[#adb5bd]">
                    {article.date}
                  </p>
                  <a
                    href={article.href}
                    className="text-[#e63946] text-sm font-bold tracking-[.3em] cursor-pointer hover:text-[#c00] hover:underline hover:underline-[#e63946] flex items-center gap-2"
                  >
                    LANJUTKAN MEMBACA
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-[0.7rem]"
                      fill="#c00"
                    >
                      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
