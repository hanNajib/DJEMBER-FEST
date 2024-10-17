import { useState, useEffect } from "react";
import { DestinasiKanan, DestinasiKiri } from "./components/Destinasi";
import Footer from "./Footer";

export default function Destination() {
  const destinasiData = [
    {
      judul: "Pantai Papuma",
      lokasi: "Wuluhan, Jember, Jawa Timur.",
      deskripsi: "Pantai Papuma merupakan pantai yang indah. Kawasan pantai ini memiliki daratan yang menjorok ke laut membuat area pantai memiliki panorama yang indah untuk dinikmati. Salah satu keindahan pantai adalah adanya kawasan yang banyak karang. ",
      image: "/image/gallery/papuma1.jpg",
      posisi: "kanan",
      href: 'https://maps.app.goo.gl/qGj6oaTED2WPdkBA7'
    },
    {
      judul: "Teluk Love",
      lokasi: "Ambulu, Jember, Jawa Timur",
      deskripsi: "Teluk Love berada di sekitar 200 meter ujung timur pantai Payangan. Dinamakn Teluk Love karena penampakannya yang menyerupai love (bentuk hati) jika dilihat dari atas.",
      image: "/image/gallery/love.webp",
      posisi: "kiri",
      href: 'https://maps.app.goo.gl/jThjDGsycRUVqZbW9'
      
    },
    {
      judul: "Gunung Gambir",
      lokasi: "Sumberbaru, Jember, Jawa Timur",
      deskripsi: "Kebun Teh Gunung Gambir adalah sebuah kebun teh seluas 183 hektar. Kebun teh ini tepatnya terletak di lereng Gunung Argopuro yang berjarak ± 60 km dari pusat kota Jember dan terletak pada ketinggian 900 meter di atas permukaan laut. ",
      image: "/image/gallery/gunung-gambir.webp",
      posisi: "kanan",
      href: 'https://maps.app.goo.gl/GPErjJuhZjZzWswMA'
    },
    {
      judul: "Nusa Barung",
      lokasi: "Puger, Jember, Jawa Timur",
      deskripsi: "Nusa Barung memiliki beragam ekosistem seperti hutan pantai, mangrove, dan hutan tropis dataran rendah dengan berbagai jenis flora dan fauna.Fauna.",
      image: "/image/gallery/Barung Island.webp",
      posisi: "kiri",
      href: 'https://maps.app.goo.gl/j4QvGQLxpn6NAuiF9'
    },
    {
      judul: "Air Terjun Antrokan",
      lokasi: "Tanggul, Jember, Jawa Timur",
      deskripsi: "Air Terjun Antrokan dengan ketinggian mencapai 40 meter. Airnya yang deras seolah keluar dari Bukit Batu dan langsung mengalir ke lembah di bawahnya.",
      image: "/image/gallery/air-antrokan.jpeg",
      posisi: "kanan",
      href:'https://maps.app.goo.gl/iL1eQpZgyvfPwW3u9'
    },
    {
      judul: "Jember Mini Zoo",
      lokasi: "Kaliwates, Jember, Jawa Timur",
      deskripsi: "Jember Mini Zoo merupakan kebun binatang mini di Kabupaten Jember. Memiliki banyak Spesies hewan",
      image: "/image/gallery/jemberminizoo.webp",
      posisi: "kiri",
      href: 'https://maps.app.goo.gl/i1w19GKXa5mz4Lj86'
    },
    {
      judul: "Pantai Payangan",
      lokasi: "Ambulu, Jember, Jawa Timur",
      deskripsi: "Pantai Payangan merupakan destinasi wisata yang memiliki beberapa keunikan yang membuat pengunjung yang datang akan terpesona. Salah satu yang menjadi magnet bagi para pengunjung adalah pemandangannya yang indah.",
      image: "/image/gallery/payangan.webp",
      posisi: "kanan",
      href:'https://maps.app.goo.gl/uXxPsdt3EcxtWXni9'
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

         

          {/* Teks dengan Animasi Muncul */}
          <div className={`w-[100%] h-full flex items-center justify-center relative transition-transform duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text flex items-center flex-col">
              <p className="sh judul text-[3rem] md:text-[4rem] lg:text-[10rem] text-slate-50 text-center font-bebas_neue font-semibold">
                Destination Djember
              </p>
              <a href="App.jsx" className='border-2 p-4 text-[20px]  text-white relative w-[15rem] text-center rounded-xl font-bold'>
                Kembali ke beranda
              </a>
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
