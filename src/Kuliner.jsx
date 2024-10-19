import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
import Fillbutton from "./components/Button";

export default function Kuliner() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
 

  return (
    <div className="overflow-x-hidden">
      <div className="w-screen h-full lg:h-[150vh] pt-36 relative overflow-x-hidden overflow-y-hidden" id="umkm">
        <div className="w-full h-full bg-slate-300 absolute rotate-[2deg] scale-110"></div>
        <div className="absolute z-10 scale-125 opacity-20 mt-40">
          <img src="/image/makanrevisi.svg" alt="" />
        </div>
        <div className="relative h-full w-full bg-gradient-to-b from-slate-300 to-slate-400 mt-20">
          <div className="flex flex-col md:flex-row px-4 md:px-0 relative z-10 -translate-y-28 scale-90">
            <img
              src="/image/model.png"
              alt=""
              className="w-full md:w-full md:scale-75 md:-translate-y-10 lg:scale-100 lg:pb-10"
            />

            <div className="flex justify-center items-center w-full h-full md:w-screen md:-bottom-64 absolute lg:relative lg:scale-90 lg:-translate-y-56 -bottom-36 right-1">
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
              <div className="md:w-[80vw] lg:w-[50vw] lg:h-full w-screen md:h-[90vh] h-full top-0 lg:top-24 md:-top-5 scale-90 lg:scale-90 md:scale-100 bg-slate-50 p-6 md:p-16 rounded-3xl shadow-lg relative flex flex-col">
              <h1 className="text-3xl md:text-5xl font-bold text-neutral-800 font-sans">
                    Tahukah Kamu?
                  </h1>
                  <p className="text-base md:text-2xl lg:text-md pt-0 md:pt-10 leading-8">
                    Jember menyimpan sejuta kelezatan kuliner yang siap memanjakan
                    lidahmu, dengan hidangan unik kaya cita rasa lokal dan rempah
                    khas. Setiap sudutnya menyimpan kejutan kuliner, terutama dari
                    UMKM yang inovatif. Dari camilan tradisional hingga hidangan
                    modern, setiap sajian mendukung usaha lokal. Hmm, pasti penasaran
                    kan? Yuk, jelajahi kuliner Jember dan temukan kenikmatan yang tak
                    terlupakan!
                  </p>
                  <div className="relative mt-10 w-full hidden md:block">
                    <img src="/image/undraw_street_food_re_uwex.svg" alt="" className="w-10/12" />
                  </div>
                  <div className="transition-all mt-10">
                    <span
                      className="text-base md:text-lg text-neutral-800 border-2 border-neutral-800 p-3 font-semibold rounded-xl cursor-pointer"
                      onClick={handleFlip}
                    >
                      Jelajahi Kuliner UMKM
                    </span>
                  </div>
                </div>

                <div className="md:w-[80vw] lg:w-[50vw] w-screen lg:h-full md:h-[90vh] h-full top-0 lg:top-24 md:-top-5 scale-90 lg:scale-90 md:scale-100 bg-slate-50 p-6 md:p-16 md:pb-10 rounded-3xl shadow-lg relative overflow-clip">
                  <h1 className="text-3xl md:text-5xl font-bold text-neutral-800 font-sans">
                    Kuliner UMKM
                  </h1>
                  {/* Section for images */}
                  <div className="grid grid-cols-2 gap-1 mt-2">
                    <div className="p-4 w-full aspect-square bg-white shadow-2xl rounded-xl flex flex-col gap-2 scale-90"> 
                      <img src="image/gallery/pecel.jpg" alt="Gambar 1" className="rounded-lg w-full h-20 md:h-40 object-cover shadow-md" />
                      <p className="md:text-[20px] p-2 font-semibold ">Pecel pincuk</p>
                      <a href="https://gofood.co.id/jember/restaurant/warung-pecel-pincuk-jowo-trisno-sumbersari-40ae0855-f06d-4817-8db4-42b9dc94393e" className="text-xs md:text-base bg-red-500 text-slate-50 p-2 rounded-md w-full md:w-36 text-center">Kunjungi UMKM</a>
                    </div>  
                    <div className="p-4 bg-white shadow-2xl rounded-xl flex flex-col gap-2 scale-90"> 
                      <img src="image/gallery/jenang.jpg" alt="Gambar 1" className="rounded-lg w-full h-20 md:h-40 object-cover shadow-md" />
                      <p className="md:text-[20px] p-2 font-semibold">Jenang Waluh</p>
                      <a href="https://www.primadonajember.com/produk/jenang-waloh-labu-khas-jember/" className="text-xs md:text-base bg-red-500 text-slate-50 p-2 rounded-md w-full md:w-36 text-center">Kunjungi UMKM</a>
                    </div>
                    <div className="p-4 bg-white shadow-2xl rounded-xl flex flex-col gap-2 scale-90"> 
                      <img src="image/gallery/rol.jpg" alt="Gambar 1" className="rounded-lg w-full h-20 md:h-40 object-cover shadow-md" />
                      <p className="md:text-[20px] p-2 font-semibold">Prol Tape</p>
                      <a href="https://gofood.co.id/jember/restaurant/camilan-dan-oleh-oleh-jember-by-elza-putra-food-patrang-jember-e1cf6662-636f-4202-8835-52f6c33a723d" className="text-xs md:text-base bg-red-500 text-slate-50 p-2 rounded-md w-full md:w-36 text-center">Kunjungi UMKM</a>
                    </div>
                    <div className="p-4 bg-white shadow-2xl rounded-xl flex flex-col gap-2 scale-90"> 
                      <img src="image/gallery/wedang-cor.webp" alt="Gambar 1" className="rounded-lg w-full h-20 md:h-40 object-cover shadow-md" />
                      <p className="md:text-[20px] p-2 font-semibold">Wedang Cor</p>
                      <a href="https://gofood.co.id/jember/restaurant/warung-wedang-cor-p-dja-rawi-bentol-sumbersari-d99014b0-8982-48ae-8d29-4c26e2e46d46" className="text-xs md:text-base bg-red-500 text-slate-50 p-2 rounded-md w-full md:w-36 text-center">Kunjungi UMKM</a>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="md:mt-2 scale-75 md:scale-100 -translate-y-5 flex justify-between items-center">
                    <span
                      className="text-base md:text-lg md:scale-100 px-4 py-3 mt-5 text-neutral-800 border-2 border-neutral-800 font-semibold rounded-xl cursor-pointer"
                      onClick={handleFlip}
                    >
                      Kembali
                    </span>
                    <span
                      className="lg:bottom-10 md:bottom-1.5 right-16 scale-100"
                    >
                      <Fillbutton href="/makanan" fill="bg-slate-300">Lihat Lainnya</Fillbutton>
                    </span>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}