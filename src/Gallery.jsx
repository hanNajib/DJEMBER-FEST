import React from 'react'



function Gallery() {
  return (
    <div className='w-screen h-screen relative'>
      <div className="w-screen h-screen absolute" style={{ background: 'url(image/gallery/papuma1.jpg) no-repeat center center', backgroundSize: 'cover'}}></div>
      <div className="w-screen h-screen absolute" style={{ background: 'url(image/gallery/papuma1.jpg) no-repeat center center', backgroundSize: 'cover'}}></div>
      <div className="w-screen h-screen absolute" style={{ background: 'url(image/gallery/papuma1.jpg) no-repeat center center', backgroundSize: 'cover'}}></div>
      <div className="w-screen h-screen absolute" style={{ background: 'url(image/gallery/papuma1.jpg) no-repeat center center', backgroundSize: 'cover'}}></div>
    </div>
  )
}

export default Gallery