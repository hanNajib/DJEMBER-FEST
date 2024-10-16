import React from 'react';

const SpecialDeals = () => {
  return (
    <>
      <div className="bg-neutral-800 overflow-x-hidden" id="home">
        <section className="home w-[100vw] h-[100vh]" id="">
          <div
            className="absolute w-full h-[100vh] inset-0 bg-cover bg-right bg-fixed opacity-70"
            style={{
              backgroundImage: `url('image/gallery/Nasi-Langgi-32.jpg')`,
              backgroundBlendMode: "multiply",
            }}
          ></div>

          <div className="absolute w-full h-[105vh] bg-fixed"></div>
          <div className="w-[100%] h-full flex items-center justify-center relative">
            <div className="text flex flex-col">
              <p className="sh judul text-[4rem] text-slate-50 text-center md:mb-0 font-bebas_neue font-semibold md:text-[6rem] lg:text-[10rem]">
                Kuliner Djember
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white py-12">
        <h2 className="text-center text-3xl font-bold text-red-500 mb-8"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4 lg:mx-40 gap-8">
          {/* Card 1 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/pecel.jpg"
              alt="Pecel Pincuk Garahan"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Pecel Pincuk Garahan
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/jenang.jpg"
              alt="Jenang Waluh"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Jenang Waluh
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/Nasi-Langgi-32.jpg"
              alt="Nasi Langi"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Nasi Langi
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/lontong.webp"
              alt="Lontong Kupat"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Lontong Kupat
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/rol.jpg"
              alt="Prol Tape"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">Prol Tape</h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/wedang-cor.webp"
              alt="Wedang Cor"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Wedang Cor
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 7 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/suwar-suwir.jpg"
              alt="Suwar Suwir"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Suwar Suwir
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 8 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/pia.jpg"
              alt="Pia Tape"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">Pia Tape</h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 9 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/satecr.jpg"
              alt="Sate Cak RI"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Sate Cak RI
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 10 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/mie.jpg"
              alt="Mie Pangsit Rama"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Mie Pangsit Rama
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 11 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/mie-pojok-mangli.jpg"
              alt="Mie Bakso Pojok Mangli"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Mie Bakso Pojok Mangli
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
          {/* Card 12 */}
          <div className="border rounded-lg shadow-lg p-4 w-full bg-gray-50">
            <img
              src="image/gallery/gudeg-lumintu.jpg"
              alt="Gudeg Lumintu"
              className="w-full h-40 sm:h-64 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              Gudeg Lumintu
            </h3>
            <div className="flex justify-center items-center mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Kunjungi UMKM
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialDeals;
