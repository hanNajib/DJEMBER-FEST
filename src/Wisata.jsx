import { useInView } from "framer-motion";
import { useRef } from "react";
import Fillbutton from './components/Button'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: false})
  return (
    <section ref={ref} className="pt-28 pb-20 bg-gray-100 md:px-10 lg:px-20 w-full overflow-hidden" id="destination">
      
      <div className="container mx-auto px-4 w-full">
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
            <h2 className="text-7xl md:text-9xl font-bebas_neue font-bold text-neutral-800 mb-4 duration-700 delay-200 overflow-hidden" 
              style={{
                width: isInView ? '100%' : '0px',
              }}
            >Destination</h2>
            <p className="text-gray-600 mb-4 duration-700 delay-200"
              style={{
                transform: isInView ? 'none' : 'translateX(200px)',
                opacity: isInView ? 100 : 0
              }}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
            </p>
            <p className="text-gray-600 mb-4 duration-700 delay-200"
              style={{
                transform: isInView ? 'none' : 'translateX(200px)',
                opacity: isInView ? 100 : 0
              }}
            >
              Every journey is a new experience that brings excitement and wonder. Let us guide you on this incredible adventure, where memories are made.
            </p>
          <Fillbutton href='/destination'>View More</Fillbutton>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
