import Card from "./components/Card";
import ArticleFormData from "./components/ArticleFormData";
import { useState } from "react";

export default function Article() {
  const [Img, setImg] = useState('');
  const [Judul, setJudul] = useState('');
  const [Deskripsi, setDeskripsi] = useState('');
  const [IsOpen, setIsOpen] = useState(false);

  const kartuData = [
    {
      img: "../public/image/jfc.webp",
      judul: "Jember Dibalik Layar",
      deskripsi:
        "Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain",
    },
    {
      img: "../public/image/tembakau.jpg",
      judul: "Jejak Kota Tembakau",
      deskripsi:
        "Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain",
    },
    {
      img: "../public/image/umkm.jpg",
      judul: "Jember dan UMKM Andalan",
      deskripsi:
        "Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain",
    },
    {
      img: "../public/image/rakyat.jpg",
      judul: "Jember Terbina, Jember Berkarya",
      deskripsi:
        "Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain",
    },
  ];


  const handleOpenForm = (img, judul, deskripsi) => {
    setImg(img);
    setJudul(judul);
    setDeskripsi(deskripsi);
    setIsOpen(true); 
  };

  return (
    <>
      <ArticleFormData img={Img} judul={Judul} deskripsi={Deskripsi} IsOpen={IsOpen}></ArticleFormData>
      <div className="bg-slate-200 pb-10 relative overflow-x-clip" id="article">
        <section className="w-full p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 -translate-y-16 place-items-center z-50">
          {kartuData.map((kartu, index) => (
            <Card
              key={index}
              img={kartu.img}
              judul={kartu.judul}
              deskripsi={kartu.deskripsi}
              onClick={() => handleOpenForm(kartu.img, kartu.judul, kartu.deskripsi)}
            />
          ))}
        </section>
        <div className="w-screen bg-neutral-800 h-40 -rotate-2 translate-y-50 scale-105 z-20 absolute"></div>
      </div>
    </>
  );
}
