import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: false})
  return (
    <section ref={ref} className="pt-28 pb-20 bg-gray-100 px-20 w-full overflow-x-hidden" id="destination">
      
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Images */}
          <div className="scale-95 md:w-1/2 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            {/* Portrait Image */}
            <div className="w-full md:w-1/3">
              <img 
                src="image/gallery/antrokan.jpg" 
                alt="image1" 
                className="rounded-lg shadow-lg object-cover h-96 w-full duration-700 delay-100"
                style={{
                  transform: isInView ? 'none' : 'translateX(-200px)',
                  opacity: isInView ? 100 : 0
                }}
              />
            </div>
            
            {/* Landscape Image */}
            <div className="w-full md:w-2/3 flex flex-col space-y-4">
              <div className="relative top-10 ">
                <img 
                  src="image/gallery/papuma1.jpg" 
                  alt="image2" 
                  className="rounded-lg shadow-lg object-cover h-48 w-96 duration-700 delay-100"
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
                  className="rounded-lg shadow-lg object-cover h-80 w-80 duration-700 delay-100"
                  style={{
                    transform: isInView ? 'none' : 'translateY(200px)',
                    opacity: isInView ? 100 : 0
                  }}
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-16">
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
          <button className="relative mt-4 px-6 py-3 bg-transparent text-white font-semibold rounded-lg overflow-hidden group border-2 border-neutral-800">
            <span className="absolute inset-0 bg-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 text-black">View Details</span>
          </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
