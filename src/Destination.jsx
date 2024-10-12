import Navbar from "./components/Navbar";
import { DestinasiKanan, DestinasiKiri } from "./components/Destinasi";
export default function Destination() {
    return(
        <>
      {/* <div
        className="absolute w-[100vw] h-[100vh] inset-0 bg-cover bg-right bg-fixed "
        style={{
          backgroundImage: ` url('/image/gallery/papuma2.jpg')`,
          backgroundBlendMode: 'multiply', // This blends the image and gradient smoothly
        }}
      ></div> */}
        <DestinasiKanan judul="Destinasi Jember" lokasi="Pantai Papuma" deskripsi="lorem Ipsum" image="/image/gallery/papuma1.jpg"></DestinasiKanan>
        </>
    )
}