import React, { useEffect, useRef, useState } from 'react';

function Wisata() {
  const topTextRef = useRef(null);
  const topImageRef = useRef(null); 
  
  const bottomTextRef = useRef(null);
  const bottomImageRef = useRef(null);

  const [topTextAnimation, setTopTextAnimation] = useState(false);
  const [topImageAnimation, setTopImageAnimation] = useState(false);
  const [bottomTextAnimation, setBottomTextAnimation] = useState(false);
  const [bottomImageAnimation, setBottomImageAnimation] = useState(false);

  const handleScroll = () => {
    if (topTextRef.current && topImageRef.current && bottomTextRef.current && bottomImageRef.current) {
      const topTextRect = topTextRef.current.getBoundingClientRect();
      const topImageRect = topImageRef.current.getBoundingClientRect();
      const bottomTextRect = bottomTextRef.current.getBoundingClientRect();
      const bottomImageRect = bottomImageRef.current.getBoundingClientRect();

      // Cek apakah elemen atas (teks dan gambar) terlihat
      if (topTextRect.top < window.innerHeight && topTextRect.bottom > 0) {
        setTopTextAnimation(true);
        setTopImageAnimation(true);
      } else {
        setTopTextAnimation(false); // Reset animasi saat elemen keluar dari viewport
        setTopImageAnimation(false);
      }

      // Cek apakah elemen bawah (teks dan gambar) terlihat
      if (bottomTextRect.top < window.innerHeight && bottomTextRect.bottom > 0) {
        setBottomTextAnimation(true);
        setBottomImageAnimation(true);
      } else {
        setBottomTextAnimation(false); // Reset animasi saat elemen keluar dari viewport
        setBottomImageAnimation(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cek posisi elemen saat pertama kali mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-gray-100 py-12 flex flex-col md:flex-row items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-start">
          {/* Teks bagian kiri */}
          <div
            ref={topTextRef}
            className={`w-full md:w-1/2 text-left relative transform transition-all duration-700 ${
              topTextAnimation ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            {/* Teks "Destinasi Jember" yang ingin berada di atas */}
            <h2 className="text-[4rem] md:text-[7rem] font-bebas_neue text-gray-800 absolute top-0">
              Destinasi Jember
            </h2>

            {/* Konten teks lainnya tetap di tengah */}
            <div className="mt-16 md:mt-36">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Papuma Beach</h2>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Pantai Papuma merupakan Kabupaten yang terletak di ujung timur Pulau Jawa yang memiliki keragaman suku budaya, 
                serta keindahan alam yang luar biasa. Berbagai wisata alam kami suguhkan untuk menemani liburan anda sekalian.
              </p>
              <p className="text-gray-800 mt-6 font-semibold">Enjoy Your Holiday...</p>
            </div>
          </div>

          {/* Gambar bagian kanan */}
          <div
            ref={topImageRef}
            className={`w-full md:w-1/2 transform transition-all duration-700 ${
              topImageAnimation ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <img src="image/gallery/papuma1.jpg" alt="Pantai Papuma" className="ml-auto object-cover w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-start">
        {/* Gambar bagian atas untuk teks bawah */}
        <div
          ref={bottomImageRef}
          className={`w-full md:w-1/2 transform transition-all duration-700 ${
            bottomImageAnimation ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
        >
          <img src="image/gallery/papuma2.jpg" alt="Pantai Papuma" className="ml-auto object-cover w-full h-auto" />
        </div>

        {/* Teks bagian bawah */}
        <div
          ref={bottomTextRef}
          className={`w-full md:w-1/2 text-left relative transform transition-all duration-700 ${
            bottomTextAnimation ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <h2 className="text-[4rem] md:text-[7rem] font-bebas_neue text-gray-800 absolute top-0">
            Destinasi Jember
          </h2>

          <div className="mt-16 md:mt-36">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Papuma Beach</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Pantai Papuma merupakan Kabupaten yang terletak di ujung timur Pulau Jawa yang memiliki keragaman suku budaya, 
              serta keindahan alam yang luar biasa. Berbagai wisata alam kami suguhkan untuk menemani liburan anda sekalian.
            </p>
            <p className="text-gray-800 mt-6 font-semibold">Enjoy Your Holiday...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wisata;
