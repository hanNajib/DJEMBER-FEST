import React, { useState, useEffect } from "react";
import { DestinasiKanan, DestinasiKiri } from "./components/Destinasi";
import Footer from "./Footer";

export default function Destination() {
  // Data destinasi yang akan dicari
  const destinasiData = [
    {
      judul: "Pantai Papuma",
      lokasi: "Wuluhan, Jember, Jawa Timur.",
      deskripsi: "lorem Ipsum",
      image: "/image/gallery/papuma1.jpg",
      posisi: "kanan",
      href: 'https://google.com'
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
  
  // State untuk animasi muncul
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menangani input pencarian
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter destinasi berdasarkan input pencarian
  const filteredDestinasi = destinasiData.filter((destinasi) =>
    destinasi.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mengatur animasi muncul setelah 0.5 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay 500ms sebelum teks muncul
    return () => clearTimeout(timer);
  }, []);

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

          {/* SVG Icon di pojok kiri atas */}
          <a href="" className="absolute top-4 left-4 transform rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-12 h-12 text-white" // Atur ukuran dan warna sesuai kebutuhan
            >
              <path fill="#FFFF" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
          </a>

          {/* Teks dengan Animasi Muncul */}
          <div className={`w-[100%] h-full flex items-center justify-center relative transition-transform duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text flex flex-col">
              <p className="sh judul text-[3rem] md:text-[4rem] lg:text-[10rem] text-slate-50 text-center font-bebas_neue font-semibold">
                Destination Djember
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Search bar */}
      <div className="flex justify-center px-4 py-10 md:px-20 md:py-20">
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
          {/* SVG Icon */}
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search Your Destination"
            className="w-full h-12 md:h-16 pl-12 pr-4 rounded-full shadow-lg outline-none bg-neutral-50 border-2 border-neutral-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Hasil pencarian */}
      <div className="relative z-10 px-4 md:px-10">
        {filteredDestinasi.length > 0 ? (
          filteredDestinasi.map((destinasi, index) => (
            <div key={index}>
              {destinasi.posisi === "kanan" ? (
                <DestinasiKanan
                  judul={destinasi.judul}
                  lokasi={destinasi.lokasi}
                  deskripsi={destinasi.deskripsi}
                  image={destinasi.image}
                  href={destinasi.href}
                  className="transition-transform hover:scale-105"
                />
              ) :   (
                <DestinasiKiri
                  judul={destinasi.judul}
                  lokasi={destinasi.lokasi}
                  deskripsi={destinasi.deskripsi}
                  image={destinasi.image}
                  href={destinasi.href}
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
      <Footer />
    </>
  );
}

// Komponen Divider sebagai pemisah antar destinasi
function Divider() {
  return <hr className="my-8 border-t border-gray-500 w-[80%] mx-auto" />;
}
