import { useInView } from "framer-motion";
import { useRef } from "react";

function Wisata() {
const refAtas = useRef(null)
// const refBawah = useRef(null)
const isInView = useInView(refAtas)
// const isInView = useInView(refAtas, {once: true})

  return (
    <div>
      <div ref={refAtas} className="bg-gray-100 py-12 flex flex-col md:flex-row items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 text-left relative">
            <h2
            className="text-[4rem] md:text-[7rem] font-bebas_neue text-gray-800 absolute top-0" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
              Destinasi Jember
            </h2>

            <div
            className="mt-16 md:mt-36">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>Papuma Beach</h2>
              <p className="text-gray-600 mt-4 max-w-2xl" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
                Pantai Papuma merupakan Kabupaten yang terletak di ujung timur Pulau Jawa yang memiliki keragaman suku budaya, 
                serta keindahan alam yang luar biasa. Berbagai wisata alam kami suguhkan untuk menemani liburan anda sekalian.
              </p>
              <p className="text-gray-800 mt-6 font-semibold" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>Enjoy Your Holiday...</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img src="image/gallery/papuma1.jpg" alt="Pantai Papuma" className="ml-auto object-cover w-full h-auto" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}/>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-start">
        <div className="w-full md:w-1/2">
          <img src="image/gallery/papuma2.jpg" alt="Pantai Papuma" className="ml-auto object-cover w-full h-auto" />
        </div>

        <div className="w-full md:w-1/2 text-left relative">
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
