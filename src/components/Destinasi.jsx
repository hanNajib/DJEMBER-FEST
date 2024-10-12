import { useInView } from "framer-motion"
import { useRef } from "react"
import PropTypes from 'prop-types'

export function DestinasiKanan({judul, lokasi, deskripsi, image}) {
    const refAtas = useRef(null)
    const isInView = useInView(refAtas)
    return(
      <>
        <div ref={refAtas} className="bg-gray-100 py-12 flex flex-col md:flex-row items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 text-left relative">
            <h2
            className="text-[4rem] md:text-[7rem] font-bebas_neue text-gray-800 absolute top-0" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
              {judul}
            </h2>

            <div
            className="mt-16 md:mt-36">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>{lokasi}</h2>
              <p className="text-gray-600 mt-4 max-w-2xl" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
                {deskripsi}
              </p>
              <p className="text-gray-800 mt-6 font-semibold" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>Enjoy Your Holiday...</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img src={image} alt="Pantai Papuma" className="ml-auto object-cover w-full h-auto" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}/>
          </div>
        </div>
      </div>
    </>
    )
}


export function DestinasiKiri({judul, lokasi, deskripsi, image}) {
  const refAtas = useRef(null)
  const isInView = useInView(refAtas)
  return(
    <>
       <div ref={refAtas} className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-start">
        <div className="w-full md:w-1/2">
          <img src={image} alt="Pantai Papuma" className="ml-auto object-cover w-full h-auto" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}/>
        </div>

        <div className="w-full md:w-1/2 text-left relative">
          <h2 className="text-[4rem] md:text-[7rem] font-bebas_neue text-gray-800 absolute top-0" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
            {judul}
          </h2>

          <div className="mt-16 md:mt-36">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>{lokasi}</h2>
            <p className="text-gray-600 mt-4 max-w-2xl" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
              {deskripsi}
            </p>
            <p className="text-gray-800 mt-6 font-semibold" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>Enjoy Your Holiday...</p>
          </div>
        </div>
      </div>
    </>
  )
}

DestinasiKanan.propTypes = {
  judul: PropTypes.string.isRequired,
  lokasi: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
DestinasiKiri.propTypes = {
  judul: PropTypes.string.isRequired,
  lokasi: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}