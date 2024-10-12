import React, { useState } from 'react';

const images = [
  "papuma1.jpg",
  "papuma1.jpg",
  "papuma1.jpg",
  "papuma1.jpg",
  "papuma1.jpg"
];

function Gallery() {
  const [IndexSekarang, setIndexSekarang] = useState(1);

  return (
    <div className='w-screen h-screen relative overflow-x-hidden'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`
            ${IndexSekarang === index ? 'w-full h-full absolute bottom-0 right-0 z-10 duration-1000' : `w-32 h-32 absolute bottom-10 z-20 duration-700 delay-1000`}
            transition-all ease-in-out
          `}  
          style={{
            background: `url(image/gallery/${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            right: `${IndexSekarang === index ? `0` : `${(5 + (index * 10) - (index > IndexSekarang ? 10 : 0))}rem`}`
          }}
          onClick={() => setIndexSekarang(index)}
        ></div>
      ))}
      <div className="h-32 w-32 bg-slate-500 z-20 absolute" onClick={() => setIndexSekarang(IndexSekarang + 1)}></div>
    </div>
  );
}

export default Gallery;
