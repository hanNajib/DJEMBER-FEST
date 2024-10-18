import { useState, useEffect } from 'react';

const images = [
  {
    src: "jfc_galery.jpg",
    title: "Jember Fashion Carnival", 
    description: "Jember Fashion Carnival (JFC) adalah ajang karnaval busana tahunan yang diadakan di Jember, Indonesia. Dikenal sebagai salah satu festival kostum terbesar di dunia, JFC menampilkan parade spektakuler dengan kostum kreatif dan megah yang terinspirasi dari budaya lokal dan internasional. Setiap tahunnya, ribuan peserta berpartisipasi, membawa tema yang berbeda, menjadikannya daya tarik wisata dan simbol kreativitas mode Indonesia."
  },
  {
    src: "musik-patrol.jpg",
    title: "Musik Tradisional Patrol",
    description: "Patrol adalah musik tradisional yang berasal dari Jawa Timur, termasuk Jember, dan biasanya dimainkan menggunakan alat-alat seperti kentongan bambu, tambur, dan angklung. Awalnya, musik patrol digunakan untuk ronda malam sebagai tanda keamanan desa, namun seiring waktu, musik ini berkembang menjadi bagian dari perayaan dan acara budaya, seperti saat Ramadan untuk membangunkan sahur. Irama musik patrol yang ritmis dan dinamis mencerminkan kekompakan serta semangat kebersamaan masyarakat setempat."
  },
  {
    src: "tari-lahbako.jpeg",
    title: "Tari Lahbako",
    description: "Tari Lahbako adalah tarian tradisional dari Jember yang menggambarkan kehidupan petani tembakau, komoditas unggulan di daerah tersebut. Penari mengenakan kostum khas petani dan memperagakan gerakan yang elegan, terinspirasi dari proses menanam hingga memanen tembakau. Tarian ini menjadi simbol budaya Jember dan penghormatan kepada para petani tembakau, serta sering ditampilkan dalam berbagai acara budaya, termasuk festival lokal."
  },
  {
    src: "pandalungan.jpg",
    title: "Kesenian Pandalungan",
    description: "Kesenian Pandalungan adalah ekspresi budaya khas Jember yang merupakan perpaduan antara budaya Jawa dan Madura. Kesenian ini mencakup musik, tarian, dan teater yang menggabungkan elemen tradisi dari kedua daerah. Dalam Pandalungan, terdapat penggunaan bahasa campuran dan alat musik yang beragam. Kesenian ini sering ditampilkan dalam berbagai acara budaya lokal, mencerminkan keberagaman dan kekayaan budaya masyarakat Jember."
  },
  {
    src: "merpati.webp",
    title: "Tota'an Merpati",
    description: "Tota’an adalah tradisi unik di Kecamatan Semboro, Jember, yang menjadikan burung merpati sebagai simbol damai dan kesetiaan. Diadakan dua kali setahun, acara ini mempertemukan para pecinta burung merpati untuk saling bertukar informasi seputar perawatan burung sambil menikmati hidangan. Tota’an dimulai dengan melepas sepasang merpati dari dua daerah, diikuti pelepasan ribuan merpati milik peserta."
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
      <div className="absolute bottom-20 left-20 lg:top-auto top-0 shadow-2xl transform text-white z-10 w-[40rem]">
        <h2 className="text-[3rem] font-bold">{images[IndexSekarang].title}</h2>
        <p className="mt-2">{images[IndexSekarang].description}</p>
      </div>

      <div className="absolute bottom-0 w-full h-[100vh] bg-gradient-to-b from-transparent to-neutral-950">
      </div>

     
      {/* Thumbnails and Navigation */}
      <div className="absolute bottom-20 right-20 flex flex-col items-center space-x-2">
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
