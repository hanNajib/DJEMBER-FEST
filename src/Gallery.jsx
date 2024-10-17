import { useState, useEffect } from 'react';

const images = [
  {
    src: "payangan.webp",
    title: "Judul Gambar 1", 
    description: "Deskripsi untuk gambar 1."
  },
  {
    src: "love.webp",
    title: "Judul Gambar 2",
    description: "Deskripsi untuk gambar 2."
  },
  {
    src: "air-antrokan.jpeg",
    title: "Judul Gambar 3",
    description: "Deskripsi untuk gambar 3."
  },
  {
    src: "papuma1.jpg",
    title: "Judul Gambar 4",
    description: "Deskripsi untuk gambar 4."
  },
  {
    src: "love.webp",
    title: "Judul Gambar 5",
    description: "Deskripsi untuk gambar 5."
  },
];

function Gallery() {
  const [IndexSekarang, setIndexSekarang] = useState(0);
  const [isManual, setIsManual] = useState(false); // State untuk menentukan apakah manual

  const handleNext = () => {
    setIsManual(true); // Set to manual mode
    setIndexSekarang((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIsManual(true); // Set to manual mode
    setIndexSekarang((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Mengatur interval hanya jika tidak dalam mode manual
    if (!isManual) {
      const interval = setInterval(() => {
        setIndexSekarang((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [isManual]); // Dependensi pada isManual

  // Mengatur agar gallery kembali ke mode otomatis setelah hover
  const handleMouseEnter = () => {
    setIsManual(true);
  };

  const handleMouseLeave = () => {
    setIsManual(false); // Kembali ke mode otomatis
  };

  return (
    <div 
      className='w-full h-[91vh] relative overflow-hidden' 
      id='culture'
      onMouseEnter={handleMouseEnter} // Menambahkan event mouse enter
      onMouseLeave={handleMouseLeave} // Menambahkan event mouse leave
    >
      {/* Main Gallery */}
      <div className='w-full h-full'>
        <div
          className="w-full h-full transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(/image/gallery/${images[IndexSekarang].src})`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        ></div>
      </div>

      {/* Title and Description */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white">
        <h2 className="text-2xl font-bold">{images[IndexSekarang].title}</h2>
        <p className="mt-2">{images[IndexSekarang].description}</p>
      </div>

      {/* Thumbnails and Navigation */}
      <div className="absolute bottom-5 right-5 flex items-center space-x-2">
        {/* Prev Button */}
        <button 
          className="h-8 w-8 bg-gray-800 text-white flex justify-center items-center rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
          onClick={handlePrev}
        >
          &#8249;
        </button>

        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer transition-all duration-500 ease-in-out 
            ${IndexSekarang === index ? 'w-32 h-32' : 'w-16 h-16'} 
            border-2 ${IndexSekarang === index ? 'border-gray-300' : 'border-slate-700'}`}
            style={{
              backgroundImage: `url(/image/gallery/${image.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
            onClick={() => setIndexSekarang(index)}
          ></div>
        ))}

        {/* Next Button */}
        <button 
          className="h-8 w-8 bg-gray-800 text-white flex justify-center items-center rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Gallery;
