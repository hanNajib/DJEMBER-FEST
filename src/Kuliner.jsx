import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

export default function Kuliner() {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNavigate = () => {
    navigate("/halaman-lain"); // Replace with your desired route
  };

  return (
    <div className="overflow-x-hidden">
      <div className="w-screen h-auto bg-slate-100 pt-36 relative overflow-x-hidden" id="umkm">
        <div className="w-full h-40 bg-slate-300 absolute rotate-[2deg] scale-110"></div>
        <div className="absolute z-10 scale-125 opacity-20 mt-40">
          <img src="../public/image/makanrevisi.svg" alt="" />
        </div>
        <div className="relative h-auto w-full bg-gradient-to-b from-slate-300 to-slate-400 mt-20">
          <div className="flex flex-col md:flex-row px-4 md:px-32 gap-10 relative z-10">
            <img
              src="/image/model.png"
              alt=""
              className="w-full md:"
            />

            <div className="flex justify-center items-center w-full h-full md:w-[40rem]">
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                <div className="w-[40rem] h-[45rem] top-24 bg-slate-50 p-6 md:p-16 rounded-3xl shadow-lg relative">
                  <h1 className="text-[2.5rem] md:text-[5rem] font-bold text-neutral-800 font-sans">
                    Tahukah Kamu?
                  </h1>
                  <p className="text-[16px] md:text-[20px]">
                    Jember menyimpan sejuta kelezatan kuliner yang siap memanjakan
                    lidahmu, dengan hidangan unik kaya cita rasa lokal dan rempah
                    khas. Setiap sudutnya menyimpan kejutan kuliner, terutama dari
                    UMKM yang inovatif. Dari camilan tradisional hingga hidangan
                    modern, setiap sajian mendukung usaha lokal. Hmm, pasti penasaran
                    kan? Yuk, jelajahi kuliner Jember dan temukan kenikmatan yang tak
                    terlupakan!
                  </p>
                  <div className="mt-9 hover:scale-95 transition-all">
                    <span
                      className="text-[16px] md:text-[20px] text-neutral-800 border-[3px] border-neutral-800 p-3 font-semibold rounded-xl cursor-pointer"
                      onClick={handleFlip}
                    >
                      Jelajahi Kuliner UMKM
                    </span>
                  </div>
                </div>

                <div className="w-[40rem] h-[45rem] top-24 bg-slate-50 p-6 md:p-16 rounded-3xl shadow-lg relative">
                  <h1 className="text-[2.5rem] md:text-[5rem] font-bold text-neutral-800 font-sans">
                    Kuliner
                  </h1>

                  {/* Section for images */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <img src="image/gallery/pecel.jpg" alt="Gambar 1" className="rounded-lg w-full h-40 object-cover shadow-md"  />
                    <img src="image/gallery/jenang.jpg" alt="Gambar 2" className="rounded-lg w-full h-40 object-cover shadow-md" />
                    <img src="image/gallery/rol.jpg" alt="Gambar 3" className="rounded-lg w-full h-40 object-cover shadow-md" />
                    <img src="image/gallery/wedang-cor.webp" alt="Gambar 4" className="rounded-lg w-full h-40 object-cover  shadow-md" />
                  </div>

                  {/* Buttons */}
                  <div className="mt-9 flex justify-between">
                    <span
                      className="text-[16px] md:text-[20px] text-neutral-800 border-[3px] border-neutral-800 p-3 font-semibold rounded-xl cursor-pointer"
                      onClick={handleFlip}
                    >
                      Kembali
                    </span>
                    <span
                      className="text-[16px] md:text-[20px] text-white bg-neutral-800 p-3 font-semibold rounded-xl cursor-pointer"
                      onClick={handleNavigate}
                    >
                      Halaman Lain
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
