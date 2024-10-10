import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-neutral-800">
      <Navbar></Navbar>
      <section
        className="home w-[100vw]] h-[105vh] bg-gradient-to-r from-slate-700 to-red-600" 
        id=""
      >
        
        <div
        className="absolute w-[100vw] h-[105vh] inset-0 bg-cover bg-right"
        style={{
          backgroundImage: `linear-gradient(to right,#f87171, transparent, #475569), url('/image/revisi-lagi.jpg')`,
          backgroundBlendMode: 'multiply', // This blends the image and gradient smoothly
        }}
      ></div>
        {/* <div className="absolute w-[100vw] h-[105vh] bg-gradient-to-bl from-transparent to-red-500 bottom-0"></div> */}
        <div className="w-[100%] flex pt-48 relative text-slate-50 ">
          <div className="text flex flex-col pl-5 md:pl-28 ">
            <motion.p
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 100,
                x: 0
              }}
              className=" judul text-[4rem] mb-3 md:mb-0 font-bebas_neue md:text-[10rem]"
              
            >
              Djember Fest
            </motion.p>
            <p className="text-[14px] w-[95%] md:w-[35rem] pl-2 md:text-[20px] relative bottom-8 font-semibold">
            Jember memikat dengan panorama alam dan budaya yang kaya. Nikmati festival seru, jelajahi wisata alam, dan cicipi kuliner khas. Jember, pengalaman unik yang siap mengubah perspektif Anda!
            </p>
          </div>
        </div>
        <div className="flex gap-7 relative top-2 left-1 scale-75 md:left-28 md:justify-normal md:scale-100">
          <a
            href=""
            className="w-40 h-14 bg-transparent border-[2px] font-semibold border-slate-100 text-white rounded-lg text-2xl flex justify-center items-center text-[16px]"
          >
            Get Started
          </a>
          <a
            href=""
            className="w-40 h-14 bg-slate-600 font-semibold text-white rounded-lg text-2xl flex justify-center items-center text-[16px]"
          >
            Get Started
          </a>
         
        </div>
      </section>
      <section className="bg-white">
      </section>
    </div>
  );
}
