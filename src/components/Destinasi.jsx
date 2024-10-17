import { useInView } from "framer-motion"
import { useRef } from "react"
import PropTypes from 'prop-types'
import Fillbutton from '../components/Button'

export function DestinasiKanan({judul, lokasi, deskripsi, image, href}) {
    const refAtas = useRef(null)
    const isInView = useInView(refAtas)
    return(
      <>
        <div ref={refAtas} className=" overflow-x-hidden py-12 flex flex-col md:flex-row items-center">
        <div className="container mx-auto flex flex-row items-start">
          <div className="w-full lg:w-1/2 text-left relative">
            

            <div
            className="mt-auto">
              <h2
            className="text-[2rem] md:text-[4rem] lg:text-[7rem] leading-tight overflow-hidden font-bebas_neue text-gray-800" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
              {judul}
            </h2>
              <h2 className="text-sm md:text-3xl font-bold text-gray-800" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>{lokasi}</h2>
              <p className="text-gray-600 mt-4 max-w-2xl text-xs md:text-base" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
                {deskripsi}
              </p>
              <Fillbutton fill="bg-slate-300" href={href}>Peta</Fillbutton>
              </div>
          </div>

          <div className="w-full md:w-1/2">
            <img src={image} alt={judul} className="ml-auto rounded-3xl object-cover mt-10 w-[15vh] h-[20vh] lg:w-[40rem] lg:h-[25rem] md:w-[30vw] md:h-[30vw]" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}/>
          </div>
        </div>
      </div>
    </>
    )
}


export function DestinasiKiri({judul, lokasi, deskripsi, image, href}) {
  const refAtas = useRef(null)
  const isInView = useInView(refAtas)
  return(
    <>
       <div ref={refAtas} className="container overflow-x-hidden mx-auto flex flex-row gap-10 lg:gap-20 md:gap-0 items-start">
        <div className="w-full md:w-1/3 md:mr-5 lg:mr-0 lg:w-1/2 ">
          <img src={image} alt={judul} className="m-0 rounded-3xl object-cover mt-10 w-[15vh] h-[20vh] lg:w-[40rem] lg:h-[25rem] md:w-[30vw] md:h-[30vw]" style={{ transform: isInView ? "none" : "translateX(-200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}/>
        </div>

        <div className="w-full md:w-1/2 text-left relative">

          <div className="mt-auto">
          <h2 className="text-[2rem] md:text-[4rem] lg:text-[7rem] font-bebas_neue text-gray-800" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
            {judul}
          </h2>
            <h2 className="text-sm md:text-3xl font-bold text-gray-800" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>{lokasi}</h2>
            <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl" style={{ transform: isInView ? "none" : "translateX(200px)", opacity: isInView ? 1 : 0, transition: "all .8s"}}>
              {deskripsi}
            </p>
            <Fillbutton fill="bg-slate-300" href={href}>Peta</Fillbutton>
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
  href: PropTypes.string.isRequired
}
DestinasiKiri.propTypes = {
  judul: PropTypes.string.isRequired,
  lokasi: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}