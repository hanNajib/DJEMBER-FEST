import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-neutral-800 over">
      <Navbar></Navbar>
      <section
        className="home w-[100vw]] h-[100vh] bg-gradient-to-tl from-slate-200 to-violet-100 opacity-70" 
        id=""
      >
        
        <div
        className="absolute w-[100vw] h-[100vh] inset-0 bg-cover bg-right bg-fixed opacity-70"
        style={{
          backgroundImage: `linear-gradient(to right, #f5f3ff, #e2e8f0), url('/image/revisi lagiiii (1).jpg')`,
          backgroundBlendMode: 'multiply', 
        }}
      ></div>
        <div className="absolute w-[100vw] h-[105vh] bg-gradient-to-br from-slate-900 to-transparent bg-fixed "></div>
        <div className="w-[100%] flex pt-48 relative text-slate-50  ">
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
            <p className="text-[14px] w-[95%] md:w-[35rem] pl-2 md:text-[20px] relative bottom-8">
            Jember memikat dengan panorama alam dan budaya yang kaya. Nikmati festival seru, jelajahi wisata alam, dan cicipi kuliner khas. Jember, pengalaman unik yang siap mengubah perspektif Anda!
            </p>
          </div>
        </div>
        <div className="flex gap-7 relative top-2 left-1 scale-75 md:left-28 md:justify-normal md:scale-100 ">
          <a
            href=""
            className="w-40 h-14 bg-transparent border-[2px] font-semibold shadow-lg bg-slate- border-slate-100 text-white rounded-lg text-2xl flex justify-center items-center text-[16px]"
          >
            Get Started
          </a>
          <a
            href=""
            className="w-40 h-14 bg-gradient-to-r from-violet-700 to-blue-400 font-semibold shadow-lg text-white rounded-lg text-2xl flex justify-center items-center text-[16px]"
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
