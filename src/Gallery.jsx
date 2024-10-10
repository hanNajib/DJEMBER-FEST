import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: 'https://via.placeholder.com/801x400', alt: 'Image 1' },
  { id: 2, src: 'https://via.placeholder.com/802x400', alt: 'Image 2' },
  { id: 3, src: 'https://via.placeholder.com/803x400', alt: 'Image 3' },
  { id: 4, src: 'https://via.placeholder.com/804x400', alt: 'Image 4' },
];

const currentImages = [];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative w-full h-full mx-auto">

      <div className="w-full h-full overflow-hidden relative">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition duration-700 ease-in-out transform scale-100"
        />

        <div className="absolute bottom-10 right-16 flex gap-2 bg-black bg-opacity-50 p-2 rounded-lg">
        <button
          className="absolute -left-12 top-1/2 -translate-y-1/2 transform  bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition z-10"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition z-10"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          ❯
        </button>
          {images.map((image, index) => (
            <motion.img
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 100
              }}
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={` w-32 h-32 object-cover cursor-pointer border-4 rounded-md transition-transform duration-300 ease-in-out ${
                currentIndex === index
                  ? 'scale-[500%] w-64 -translate-x-20 -translate-y-64 border-transparent'
                  : 'border-transparent opacity-80 hover:scale-105'
              }`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>


        {/*


         */}
      </div>
    </div>
  );
};

export default Carousel;
