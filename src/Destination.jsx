import { DestinasiKanan, DestinasiKiri } from "./components/Destinasi";
export default function Destination() {
    return(
        <>

    <div className="bg-neutral-800 over overflow-x-hidden" id="home">
      <section
        className="home w-[100vw] h-[100vh]" 
        id=""
      >
        
        <div
        className="absolute w-full h-[100vh] inset-0 bg-cover bg-right bg-fixed opacity-70"
        style={{
          backgroundImage: `url('image/gallery/papuma1.jpg')`,
          backgroundBlendMode: 'multiply', 
        }}
      ></div>
        <div className="absolute w-full h-[105vh]  bg-fixed "></div>
        <div className="w-[100%] h-full flex items-center justify-center relative text-slate-50  ">
          <div className="text flex  flex-col  ">
            <p
              className=" gradient-text judul text-[4rem] text-center md:mb-0 font-bebas_neue font-semibold md:text-[10rem]"
              
            >
              Destination Djember
            </p>
           
          </div>
        </div>

      </section>  
    </div>
  

        <DestinasiKanan judul="Destinasi Jember" lokasi="Pantai Papuma" deskripsi="lorem Ipsum" image="/image/gallery/papuma1.jpg"></DestinasiKanan>
        <DestinasiKiri judul="Destinasi Jember" lokasi="Pantai Papuma" deskripsi="lorem Ipsum" image="/image/gallery/love.webp"></DestinasiKiri>
        <DestinasiKanan judul="Destinasi Jember" lokasi="Pantai Papuma" deskripsi="lorem Ipsum" image="/image/gallery/gambir.jpg"></DestinasiKanan>
        <DestinasiKiri judul="Destinasi Jember" lokasi="Pantai Papuma" deskripsi="lorem Ipsum" image="/image/gallery/Barung Island.webp"></DestinasiKiri>
        <DestinasiKanan judul="Destinasi Jember" lokasi="Pantai Papuma" deskripsi="lorem Ipsum" image="/image/gallery/antrokan.jpg"></DestinasiKanan>
        <DestinasiKiri judul="Destinasi Jember" lokasi="Pantai Papuma" deskripsi="lorem Ipsum" image="/image/gallery/jemberminizoo.webp"></DestinasiKiri>
        <DestinasiKanan judul="Destinasi Jember" lokasi="Pantai Papuma" deskripsi="lorem Ipsum" image="/image/gallery/payangan.webp"></DestinasiKanan>
        <DestinasiKiri judul="Destinasi Jember" lokasi="Pantai Papuma" deskripsi="lorem Ipsum" image="/image/gallery/papuma1.jpg"></DestinasiKiri>
        </>
    )
}