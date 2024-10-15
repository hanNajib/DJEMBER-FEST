import React, { useState } from "react";
import { DestinasiKanan, DestinasiKiri } from "./components/Destinasi";

export default function Destination() {
  // Data destinasi yang akan dicari
  const destinasiData = [
    {
      judul: "Pantai Papuma",
      lokasi: "Wuluhan, Jember, Jawa Timur.",
      deskripsi: "lorem Ipsum",
      image: "/image/gallery/papuma1.jpg",
      posisi: "kanan",
    },
    {
      judul: "Teluk Love",
      lokasi: "Ambulu, Jember, Jawa Timur",
      deskripsi: "lorem Ipsum",
      image: "/image/gallery/love.webp",
      posisi: "kiri",
    },
    {
      judul: "Gunung Gambir",
      lokasi: "Sumberbaru, Jember, Jawa Timur",
      deskripsi: "lorem Ipsum",
      image: "/image/gallery/gunung-gambir.webp",
      posisi: "kanan",
    },
    {
      judul: "Nusa Barung",
      lokasi: "Puger, Jember, Jawa Timur",
      deskripsi: "lorem Ipsum",
      image: "/image/gallery/Barung Island.webp",
      posisi: "kiri",
    },
    {
      judul: "Air Terjun Antrokan",
      lokasi: "Tanggul, Jember, Jawa Timur",
      deskripsi: "lorem Ipsum",
      image: "/image/gallery/air-antrokan.jpeg",
      posisi: "kanan",
    },
    {
      judul: "Jember Mini Zoo",
      lokasi: "Kaliwates, Jember, Jawa Timur",
      deskripsi: "lorem Ipsum",
      image: "/image/gallery/jemberminizoo.webp",
      posisi: "kiri",
    },
    {
      judul: "Pantai Payangan",
      lokasi: "Ambulu, Jember, Jawa Timur",
      deskripsi: "lorem Ipsum",
      image: "/image/gallery/payangan.webp",
      posisi: "kanan",
    },
  ];

  // State untuk pencarian
  const [searchTerm, setSearchTerm] = useState("");

  // Fungsi untuk menangani input pencarian
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter destinasi berdasarkan input pencarian
  const filteredDestinasi = destinasiData.filter((destinasi) =>
    destinasi.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-neutral-800 overflow-x-hidden" id="home">
        <section className="home w-[100vw] h-[100vh]" id="">
          <div
            className="absolute w-full h-[100vh] inset-0 bg-cover bg-right bg-fixed opacity-70"
            style={{
              backgroundImage: `url('image/gallery/bg-destinasi.jpg')`,
              backgroundBlendMode: "multiply",
            }}
          ></div>

          <div className="absolute w-full h-[105vh] bg-fixed"></div>
          <div className="w-[100%] h-full flex items-center justify-center relative">
            <div className="text flex flex-col">
              <p className="sh judul text-[4rem]  text-slate-50 text-center md:mb-0 font-bebas_neue font-semibold md:text-[10rem]">
                Destination Djember
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Search bar */}
      <div className="flex justify-center p-20">
        <input
          type="search"
          placeholder="Search Your Destination"
          className="w-[50rem] rounded-3xl h-[4rem] py-2 px-5 text-neutral-800 shadow-lg outline-none bg bg-neutral-50 border-2 border-neutral-600"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Hasil pencarian */}
      <div className="relative z-10 px-10">
        {filteredDestinasi.length > 0 ? (
          filteredDestinasi.map((destinasi, index) => (
            <div key={index}>
              {destinasi.posisi === "kanan" ? (
                <DestinasiKanan
                  judul={destinasi.judul}
                  lokasi={destinasi.lokasi}
                  deskripsi={destinasi.deskripsi}
                  image={destinasi.image}
                  className="transition-transform hover:scale-105"
                />
              ) : (
                <DestinasiKiri
                  judul={destinasi.judul}
                  lokasi={destinasi.lokasi}
                  deskripsi={destinasi.deskripsi}
                  image={destinasi.image}
                  className="transition-transform hover:scale-105"
                />
              )}
              <Divider />
            </div>
          ))
        ) : (
          <p className="text-center text-neutral-500">No results found</p>
        )}
      </div>
    </>
  );
}

// Komponen Divider sebagai pemisah antar destinasi
function Divider() {
  return <hr className="my-8 border-t border-gray-500 w-[80%] mx-auto" />;
}
