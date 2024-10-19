import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const SpecialDeals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false); // State for animation

  const deals = [
    { id: 1, name: 'Pecel Pincuk Garahan', image: 'image/gallery/pecel.jpg', url: 'https://gofood.co.id/jember/restaurant/warung-pecel-pincuk-jowo-trisno-sumbersari-40ae0855-f06d-4817-8db4-42b9dc94393e' },
    { id: 2, name: 'Jenang Waluh', image: 'image/gallery/jenang.jpg', url: 'https://www.primadonajember.com/produk/jenang-waloh-labu-khas-jember/' },
    { id: 3, name: 'Nasi Langi', image: 'image/gallery/Nasi-Langgi-32.jpg', url: 'https://g.co/kgs/4rZWR9m' },
    { id: 4, name: 'Lontong Kupat', image: 'image/gallery/lontong.webp', url: 'https://gofood.co.id/jember/restaurant/lontong-kupang-lestari-sumbersari-211097b1-9d87-4ef3-97d6-dfef80a1e5d7' },
    { id: 5, name: 'Prol Tape', image: 'image/gallery/rol.jpg', url: 'https://gofood.co.id/jember/restaurant/camilan-dan-oleh-oleh-jember-by-elza-putra-food-patrang-jember-e1cf6662-636f-4202-8835-52f6c33a723d' },
    { id: 6, name: 'Wedang Cor', image: 'image/gallery/wedang-cor.webp', url: 'https://gofood.co.id/jember/restaurant/warung-wedang-cor-p-dja-rawi-bentol-sumbersari-d99014b0-8982-48ae-8d29-4c26e2e46d46' },
    { id: 7, name: 'Suwar Suwir', image: 'image/gallery/suwar-suwir.jpg', url: 'https://www.primadonajember.com/produk/suwar-suwir-jember/mLyoHH5' },
    { id: 8, name: 'Pia Tape', image: 'image/gallery/pia.jpg', url: 'https://www.primadonajember.com/produk/pia-tape-jember/' },
    { id: 9, name: 'Sate Cak RI', image: 'image/gallery/satecr.jpg', url: 'https://gofood.co.id/jember/restaurant/warung-sate-cak-ri-sumber-bendo-f0245037-9b64-40ca-a1af-eaa140667d6d' },
    { id: 10, name: 'Mie Pangsit Rama', image: 'image/gallery/mie.jpg', url: 'https://gofood.co.id/id/jember/restaurant/pangsit-mie-rama-diponegoro-aec56a74-7920-46c5-ab2e-8db77dedb53c' },
    { id: 11, name: 'Mie Bakso Pojok Mangli', image: 'image/gallery/mie-pojok-mangli.jpg', url: 'https://gofood.co.id/jember/restaurant/bakso-solo-pojok-mangli-1-87b64c8a-47a0-4671-9e2a-e82ea260860e' },
    { id: 12, name: 'Gudeg Lumintu', image: 'image/gallery/gudeg-lumintu.jpg', url: 'https://gofood.co.id/jember/restaurant/warung-nasi-gudeg-lumintu-kertanegara-7a5657a4-bb41-4901-bb99-8c9299d75e40' },
  ];

  const filteredDeals = deals.filter((deal) =>
    deal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Set up the animation effect for the title
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay 500ms before the text appears
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-neutral-800 overflow-x-hidden" id="home">
        <section className="home w-[100vw] h-[100vh]">
          <div
            className="absolute w-full h-[100vh] inset-0 bg-cover bg-right bg-fixed opacity-70"
            style={{
              backgroundImage: `url('image/gallery/Nasi-Langgi-32.jpg')`,
              backgroundBlendMode: 'multiply',
            }}
          ></div>

          <div className="absolute w-full h-[105vh] bg-fixed"></div>
          <div className={`w-[100%] h-full flex items-center justify-center relative transition-transform duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text flex items-center flex-col">
              <p className="sh judul text-[4rem] text-slate-50 text-center md:mb-0 font-bebas_neue font-semibold md:text-[6rem] lg:text-[9rem]">
                Kuliner UMKM Jember
              </p>
              <a href="/" className='border-2 p-4 text-[20px] text-white relative w-[15rem] text-center rounded-xl font-bold'>
                Kembali ke beranda
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-4 md:px-20 py-10">
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
          {/* SVG Icon */}
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
          </div>

          <input
            type="text"
            placeholder="Cari kuliner anda"
            className="w-full h-12 md:h-16 pl-12 pr-4 rounded-full shadow-lg outline-none bg-neutral-50 border-2 border-neutral-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white py-12">
        <h2 className="text-center text-3xl font-bold text-red-500 mb-8">Temukan cita rasa kuliner di Jember</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4 lg:mx-40 gap-8">
          {/* Cards for each deal */}
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-40 sm:h-64 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-4">
                {deal.name}
              </h3>
              <div className="flex justify-center items-center mt-4">
                <a href={deal.url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Kunjungi UMKM
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecialDeals;
