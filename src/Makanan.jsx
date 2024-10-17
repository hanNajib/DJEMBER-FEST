import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const SpecialDeals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false); // State for animation

  const deals = [
    { id: 1, name: 'Pecel Pincuk Garahan', image: 'image/gallery/pecel.jpg' },
    { id: 2, name: 'Jenang Waluh', image: 'image/gallery/jenang.jpg' },
    { id: 3, name: 'Nasi Langi', image: 'image/gallery/Nasi-Langgi-32.jpg' },
    { id: 4, name: 'Lontong Kupat', image: 'image/gallery/lontong.webp' },
    { id: 5, name: 'Prol Tape', image: 'image/gallery/rol.jpg' },
    { id: 6, name: 'Wedang Cor', image: 'image/gallery/wedang-cor.webp' },
    { id: 7, name: 'Suwar Suwir', image: 'image/gallery/suwar-suwir.jpg' },
    { id: 8, name: 'Pia Tape', image: 'image/gallery/pia.jpg' },
    { id: 9, name: 'Sate Cak RI', image: 'image/gallery/satecr.jpg' },
    { id: 10, name: 'Mie Pangsit Rama', image: 'image/gallery/mie.jpg' },
    { id: 11, name: 'Mie Ayam Bakso Pojok Mangli', image: 'image/gallery/mie-pojok-mangli.jpg' },
    { id: 12, name: 'Gudeg Lumintu', image: 'image/gallery/gudeg-lumintu.jpg' },
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

          <a href='' className="absolute top-4 left-4 transform rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-12 h-12 text-white" // Adjust size and color as needed
            >
              <path fill="#FFFF" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
          </a>

          <div className="absolute w-full h-[105vh] bg-fixed"></div>
          <div className={`w-[100%] h-full flex items-center justify-center relative transition-transform duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text flex flex-col">
              <p className="sh judul text-[4rem] text-slate-50 text-center md:mb-0 font-bebas_neue font-semibold md:text-[6rem] lg:text-[10rem]">
                Kuliner Djember
              </p>
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
            placeholder="Search Your Kuliner"
            className="w-full h-12 md:h-16 pl-12 pr-4 rounded-full shadow-lg outline-none bg-neutral-50 border-2 border-neutral-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white py-12">
        <h2 className="text-center text-3xl font-bold text-red-500 mb-8">Special Deals</h2>
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
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Order Now
                </button>
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
