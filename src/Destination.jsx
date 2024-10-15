import { DestinasiKanan, DestinasiKiri } from "./components/Destinasi";

export default function Destination() {
    return(
        <>
            <div className="bg-neutral-800 overflow-x-hidden" id="home">
                <section className="home w-[100vw] h-[100vh]" id="">
                    <div
                        className="absolute w-full h-[100vh] inset-0 bg-cover bg-right bg-fixed opacity-70"
                        style={{
                            backgroundImage: `url('image/gallery/bg-destinasi.jpg')`,
                            backgroundBlendMode: 'multiply', 
                        }}
                    ></div>
                  
                    <div className="absolute w-full h-[105vh] bg-fixed"></div>
                    <div className="w-[100%] h-full flex items-center justify-center relative">
                        <div className="text flex flex-col">
                            <p
                                className="sh judul text-[4rem]  text-slate-50 text-center md:mb-0 font-bebas_neue font-semibold md:text-[10rem]"
                               
                            >
                                Destination Djember
                            </p>
                        </div>
                    </div>
                </section>  
            </div>
  
            <div className="relative z-10">
                <DestinasiKanan
                    judul="Pantai Papuma"
                    lokasi="Wuluhan, Jember, Jawa Timur."
                    deskripsi="lorem Ipsum"
                    image="/image/gallery/papuma1.jpg"
                    className="transition-transform hover:scale-105"
                />
                <Divider />
                <DestinasiKiri
                    judul="Teluk Love"
                    lokasi="Ambulu, Jember, Jawa Timur"
                    deskripsi="lorem Ipsum"
                    image="/image/gallery/love.webp"
                    className="transition-transform hover:scale-105"
                />
                <Divider />
                <DestinasiKanan
                    judul="Gunung Gambir"
                    lokasi="Sumberbaru, Jember, Jawa Timur"
                    deskripsi="lorem Ipsum"
                    image="/image/gallery/gunung-gambir.webp"
                    className="transition-transform hover:scale-105"
                />
                <Divider />
                <DestinasiKiri
                    judul="Nusa Barung"
                    lokasi="Puger, Jember, Jawa Timur"
                    deskripsi="lorem Ipsum"
                    image="/image/gallery/Barung Island.webp"
                    className="transition-transform hover:scale-105"
                />
                <Divider />
                <DestinasiKanan
                    judul="Air Terjun Antrokan"
                    lokasi="Tanggul, Jember, Jawa Timur"
                    deskripsi="lorem Ipsum"
                    image="/image/gallery/air-antrokan.jpeg"
                    className="transition-transform hover:scale-105"
                />
                <Divider />
                <DestinasiKiri
                    judul="Jember Mini Zoo"
                    lokasi="Kaliwates, Jember, Jawa Timur"
                    deskripsi="lorem Ipsum"
                    image="/image/gallery/jemberminizoo.webp"
                    className="transition-transform hover:scale-105"
                />
                <Divider />
                <DestinasiKanan
                    judul="Pantai Payangan"
                    lokasi="Ambulu, Jember, Jawa Timur"
                    deskripsi="lorem Ipsum"
                    image="/image/gallery/payangan.webp"
                    className="transition-transform hover:scale-105"
                />
            </div>
        </>
    );
}

// Komponen Divider sebagai pemisah antar destinasi
function Divider() {
    return <hr className="my-8 border-t border-gray-500 w-[80%] mx-auto" />;
}
