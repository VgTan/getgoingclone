import React from "react";

function Articles() {
  const articles = [
    {
      imageSrc:
        "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2Fc6c93e21-0b09-45f0-b870-57abc211838f?alt=media&token=24603561-1fc0-4157-bd43-97a1abde0c74",
      title: "Daftar Negara Bebas Visa untuk Paspor Indonesia Update Terbaru",
      date: "23 Aug 2023",
      linkText: "LANJUTKAN MEMBACA",
    },
    {
      imageSrc:
        "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2F4181d4ea-b35d-4658-bb04-299f4bc41896?alt=media&token=3b4150da-850e-4ea1-9fa0-f3fb47d7d31d",
      title: "Tips Cara Menghindari Penipuan di Eropa",
      date: "7 Aug 2023",
      linkText: "LANJUTKAN MEMBACA",
    },
    {
      imageSrc:
        "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17086792081.png?alt=media&token=9fc574a7-957a-4a7a-a06d-f6ded9fbf6c4",
      title: "Tuscany Surga Tersembunyi di Jantung Italia",
      date: "23 Feb 2024",
      linkText: "LANJUTKAN MEMBACA",
    },
  ];
  return (
    <div>
      <div className="bg-[#f8f9fa] font-poppin">
        <div className="flex flex-col p-28">
          <div className="flex justify-between pb-10">
            <p className="text-[32px] text-[#21 2529] font-bold">Baca juga</p>
            <button className="text-sm text-[#c00] tracking-[.3em] font-bold border border-[#c00] px-3 rounded-full ease-in-out duration-300 hover:bg-[#3c69ea] hover:border-[#3c69ea] hover:text-[#fff]">
              LIHAT SEMUA ARTIKEL
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* ARTICLE */}
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#fff] shadow-xl rounded-lg m-2 ease-in-out duration-300 hover:-translate-y-2"
              >
                <div className="">
                  <img
                    className="rounded-t-lg"
                    src={article.imageSrc}
                    alt={article.title}
                  />
                </div>
                <div className="flex flex-col gap-5 p-4 h-[200px]">
                  <a className="font-bold text-xl text-[#343a40] pt-3">
                    {article.title}
                  </a>
                  <p className="font-medium text-sm text-[#adb5bd]">
                    {article.date}
                  </p>
                  <a className="text-[#e63946] text-sm font-bold tracking-[.3em] cursor-pointer hover:text-[#c00] hover:underline hover:underline-[#e63946]">
                    {article.linkText}
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
