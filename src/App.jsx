

export default function App() {
  return (
    <div className="bg-neutral-800 overflow-x-hidden" id="home">
      <section
        className="home w-[100vw] h-[100vh] bg-gradient-to-tl from-slate-200 to-violet-100"
        id=""
      >
        <div
          className="absolute w-full h-[100vh] inset-0 bg-cover bg-right bg-fixed"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/image/revisi lagiiii (1).jpg')`, // Menggunakan lebih banyak dark overlay
            backgroundBlendMode: 'multiply',
          }}
        ></div>
        <div className="absolute w-full h-[105vh] bg-gradient-to-br from-slate-900 to-transparent bg-fixed"></div>

        <div className="w-[100%] flex pt-48 relative text-white"> {/* Pastikan text-white digunakan di sini */}
          <div className="text flex flex-col pl-5 md:pl-10 lg:pl-28">
            <p
              className="gradient-text md:whitespace-nowrap judul text-[4rem] mb-3 md:mb-0 font-bebas_neue font-semibold md:text-[10rem] text-white" // Pastikan text-white di sini
            >
              Djember Fest
            </p>
            <p className="text-[14px] w-[95%] md:w-[40rem] pl-2 md:text-[20px] font-medium relative bottom-8 text-white"> {/* text-white juga di sini */}
              Jember memikat dengan panorama alam dan budaya yang kaya. Nikmati festival seru, jelajahi wisata alam, dan cicipi kuliner khas. Jember, pengalaman unik yang siap mengubah perspektif Anda!
            </p>
          </div>
        </div>

        <div className="flex gap-7 relative top-2 left-1 scale-75 md:left-12 lg:left-28 md:justify-normal md:scale-100">
        <a
  href="#about"
  className="btn relative w-40 h-14 bg-gradient-to-tr from-indigo-800 to-sky-600 font-semibold shadow-lg border-slate-100 text-white rounded-lg text-2xl flex justify-center items-center text-[16px] hover:scale-95 hover:shadow-sm hover:shadow-slate-400 transition-all duration-300 overflow-hidden"
>
  Get Started
</a>


        
        </div>
      </section>
      <section className="bg-white"></section>
    </div>
  );
}
