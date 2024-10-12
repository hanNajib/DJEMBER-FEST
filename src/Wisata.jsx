function Wisata() {
  return (
    <div>
      <section className="bg-gray-100 py-12 flex flex-row items-center">
        <div className="container mx-auto flex flex-row items-start">
          {/* Teks bagian kiri */}
          <div className="w-1/2 text-left relative">
            {/* Teks "Destinasi Jember" yang ingin berada di atas */}
            <h2 className="text-[7rem] font-bebas_neue  text-gray-800  absolute top-0">
              Destinasi Jember
            </h2>

            {/* Konten teks lainnya tetap di tengah */}
            <div className="mt-36">
              <h2 className="text-3xl  font-bold text-gray-800">
                This is Jember
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Pantai Papuma merupakan Kabupaten yang terletak di ujung timur
                Pulau Jawa yang memiliki keragaman suku budaya, serta keindahan
                alam yang luar biasa. Berbagai wisata alam kami suguhkan untuk
                menemani liburan anda sekalian.
              </p>
              <p className="text-gray-800 mt-6 font-semibold">
                Enjoy Your Holiday...
              </p>
            </div>
          </div>

          {/* Gambar bagian kanan */}
          <div className="w-1/2">
            <img
              src="image/gallery/papuma1.jpg"
              alt="Pantai Papuma"
              className="ml-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wisata;
