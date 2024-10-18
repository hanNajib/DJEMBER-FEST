import { useInView } from "framer-motion";
import { useRef } from "react";
import Fillbutton from './components/Button'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: false})
  return (
    <section ref={ref} className="pt-28 pb-20  md:px-10 lg:px-20 w-full overflow-hidden" id="destination">
      <div className="absolute opacity-[4%] scale-125">
      <div className="w-full h-full absolute bg-gradient-to-b from-transparent via-transparent to-slate-100"></div>
        <img src="public/image/svg-bg-destinasi.svg" alt="" />
      </div> 

      <div className="container mx-auto px-4 w-full">
      <h2 className="text-7xl md:text-9xl font-bebas_neue font-bold text-neutral-800 mb-4 duration-700 delay-200 overflow-hidden md:hidden flex flex-row gap-2" 
                style={{
                  width: isInView ? '100%' : '0px',
                }}
              >Destinasi  
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#262626" viewBox="0 0 16 16" className="h-16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="pb-10 pr-8 md:pr-0 md:pl-10 md:pb-20 md:scale-95 md:w-full lg:w-1/2 flex flex-row md:space-y-0 md:space-x-4 md:flex-row">
            <div className="w-full lg:w-1/3 translate-y-3 translate-x-3 md:translate-y-0 md:translate-x-0">
              <img 
                src="image/gallery/antrokan.jpg" 
                alt="image1" 
                className="rounded-lg shadow-lg object-cover w-32 md:w-56 lg:w-full h-56 md:h-96 duration-700 delay-100"
                style={{
                  transform: isInView ? 'none' : 'translateX(-200px)',
                  opacity: isInView ? 100 : 0
                }}
              />
            </div>
            
            <div className="w-1/2 md:w-2/3 flex flex-col space-y-4">
              <div className="relative top-10">
                <img 
                  src="image/gallery/papuma1.jpg" 
                  alt="image2" 
                  className="rounded-lg shadow-lg object-cover w-48 md:h-48 md:w-96 duration-700 delay-100"
                  style={{
                    transform: isInView ? 'none' : 'translateX(200px)',
                    opacity: isInView ? 100 : 0
                  }}
                />
              </div>
              <div className="relative top-10">
                <img 
                  src="image/gallery/gambir.jpg" 
                  alt="image3" 
                  className="rounded-lg shadow-lg object-cover w-40 h-40 md:h-80 md:w-80 duration-700 delay-100"
                  style={{
                    transform: isInView ? 'none' : 'translateY(200px)',
                    opacity: isInView ? 100 : 0
                  }}
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 md:mt-0 lg:ml-16">
            <div className="flex relative">
              <h2 className="hidden md:flex text-7xl md:text-9xl font-bebas_neue font-bold text-neutral-800 mb-4 duration-700 delay-200 overflow-hidden flex-row gap-2" 
                style={{
                  width: isInView ? '100%' : '0px',
                }}
              >Destinasi  
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#262626" viewBox="0 0 16 16" className="h-32 pb-5">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              </h2>
            </div>
            <p className="text-gray-600 mb-4 duration-700 delay-200"
              style={{
                transform: isInView ? 'none' : 'translateX(200px)',
                opacity: isInView ? 100 : 0
              }}
            >
             Destinasi jember menawarkan pemandangan alam yang memukau, dengan pantai berpasir putih dan air laut yang jernih, serta dipadukan dengan keindahan budaya lokal yang autentik. Ideal untuk mereka yang ingin melarikan diri dari rutinitas dan menikmati ketenangan alam.
            </p>
            <p className="text-gray-600 mb-4 duration-700 delay-200"
              style={{
                transform: isInView ? 'none' : 'translateX(200px)',
                opacity: isInView ? 100 : 0
              }}
            >
             Setiap perjalanan adalah pengalaman baru yang membawa kegembiraan dan keajaiban. Biarkan kami membimbing Anda dalam petualangan luar biasa ini, di mana kenangan tercipta.
            </p>
          <Fillbutton href='/destination' fill="bg-slate-300">Temukan destinasi anda</Fillbutton>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
