import Navbar from "./components/Navbar";

export default function Destination() {
    return(
        <>
      <div
        className="absolute w-[100vw] h-[100vh] inset-0 bg-cover bg-right bg-fixed "
        style={{
          backgroundImage: ` url('/image/gallery/papuma2.jpg')`,
          backgroundBlendMode: 'multiply', // This blends the image and gradient smoothly
        }}
      ></div>
      
        </>
    )
}