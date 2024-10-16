import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
import Fillbutton from "./components/Button";

export default function Kuliner() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNavigate = () => {
    navigate("/halaman-lain");
  };

  return (
    <div className="overflow-x-hidden">
      <div className="w-screen h-full lg:h-[115vh] bg-slate-100 pt-36 relative overflow-x-hidden overflow-y-hidden" id="umkm">
        <div className="w-full h-40 bg-slate-300 absolute rotate-[2deg] scale-110"></div>
        <div className="absolute z-10 scale-125 opacity-20 mt-40">
          <img src="../public/image/makanrevisi.svg" alt="" />
        </div>
        <div className="relative h-full w-full bg-gradient-to-b from-slate-300 to-slate-400 mt-20">
          <div className="flex flex-col md:flex-row px-4 md:px-0 relative z-10 -translate-y-28 scale-90">
            <img
              src="/image/model.png"
              alt=""
              className="w-full md:w-full md:scale-75 lg:scale-100"
            />

            <div className="flex justify-center items-center w-full h-full md:w-screen md:-bottom-64 absolute lg:relative lg:-translate-y-56 -bottom-36 right-1">
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
              <div className="md:w-[80vw] lg:w-[50vw] w-screen md:h-[75vh] h-[70vh] top-0 lg:top-24 md:-top-5 scale-90 lg:scale-90 md:scale-100 bg-slate-50 p-6 md:p-16 rounded-3xl shadow-lg relative">
              <h1 className="text-3xl md:text-5xl font-bold text-neutral-800 font-sans">
                    Tahukah Kamu?
                  </h1>
                  <p className="text-base md:text-lg lg:text-2xl pt-5">
                    Jember menyimpan sejuta kelezatan kuliner yang siap memanjakan
                    lidahmu, dengan hidangan unik kaya cita rasa lokal dan rempah
                    khas. Setiap sudutnya menyimpan kejutan kuliner, terutama dari
                    UMKM yang inovatif. Dari camilan tradisional hingga hidangan
                    modern, setiap sajian mendukung usaha lokal. Hmm, pasti penasaran
                    kan? Yuk, jelajahi kuliner Jember dan temukan kenikmatan yang tak
                    terlupakan!
                  </p>
                  <div className="mt-9 transition-all">
                    <span
                      className="text-base md:text-lg text-neutral-800 border-2 border-neutral-800 p-3 font-semibold rounded-xl cursor-pointer absolute bottom-10"
                      onClick={handleFlip}
                    >
                      Jelajahi Kuliner UMKM
                    </span>
                  </div>
                </div>

                <div className="md:w-[80vw] lg:w-[50vw] w-screen md:h-[75vh] h-[70vh] top-0 lg:top-24 md:-top-5 scale-90 lg:scale-90 md:scale-100 bg-slate-50 p-6 md:p-16 rounded-3xl shadow-lg relative">
                <h1 className="text-3xl md:text-5xl font-bold text-neutral-800 font-sans">
                    Kuliner
                  </h1>

                  {/* Section for images */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <img src="image/gallery/pecel.jpg" alt="Gambar 1" className="rounded-lg w-full h-40 object-cover shadow-md" />
                    <img src="image/gallery/jenang.jpg" alt="Gambar 2" className="rounded-lg w-full h-40 object-cover shadow-md" />
                    <img src="image/gallery/rol.jpg" alt="Gambar 3" className="rounded-lg w-full h-40 object-cover shadow-md" />
                    <img src="image/gallery/wedang-cor.webp" alt="Gambar 4" className="rounded-lg w-full h-40 object-cover shadow-md" />
                  </div>

                  {/* Buttons */}
                  <div className="mt-9 flex justify-between">
                    <span
                      className="text-base md:text-lg text-neutral-800 border-2 border-neutral-800 p-3 font-semibold rounded-xl cursor-pointer absolute bottom-10 left-10"
                      onClick={handleFlip}
                    >
                      Kembali
                    </span>
                    <span
                      className="absolute bottom-10 right-10"
                    >
                      <Fillbutton href="/makanan">View More</Fillbutton>
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
