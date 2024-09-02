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
      <div className="font-poppin">
        <div className="flex flex-col pt-28">
          <div className="flex justify-between pb-10">
            <p className="text-[32px] text-[#21 2529] font-bold">Baca juga</p>
            <button className="text-sm text-[#c00] tracking-[.3em] font-bold border border-[#c00] px-3 rounded-full ease-in-out duration-300 hover:bg-[#3c69ea] hover:border-[#3c69ea] hover:text-[#fff]">
              LIHAT SEMUA ARTIKEL
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* ARTICLE */}
            {sortedRandomArticles.map((article, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#fff] shadow-xl rounded-lg m-2 ease-in-out duration-300 hover:-translate-y-2"
              >
                <a href={article.href} className="">
                  <img
                    className="rounded-t-lg"
                    src={article.imageSrc}
                    alt={article.title}
                  />
                </a>
                <div className="flex flex-col gap-5 p-4 h-[200px]">
                  <a href={article.href} className="font-bold text-xl text-[#343a40] pt-3 hover:underline">
                    {article.title}
                  </a>
                  <p className="font-medium text-sm text-[#adb5bd]">
                    {article.date}
                  </p>
                  <a href={article.href} className="text-[#e63946] text-sm font-bold tracking-[.3em] cursor-pointer hover:text-[#c00] hover:underline hover:underline-[#e63946]">
                    LANJUTKAN MEMBACA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      \
    </div>
  );
}

export default Articles;
