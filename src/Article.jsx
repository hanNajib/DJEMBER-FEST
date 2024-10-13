import Card from "./components/Card";

export default function Article() {
  return (
    <div className="bg-slate-200 pb-10 relative overflow-x-clip" id="article">
          <div
            className="absolute top-20 left-2 w-[500px] h-[500px] bg-[#4f61bb80] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob">
          </div>
          <div
            className="absolute top-20 right-32 w-[500px] h-[500px] bg-[#6876a080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000">
          </div>
          <div
            className="hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#4b7bba80] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000">
          </div>
          <div
            className="absolute bottom-10 right-52 w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000">
          </div>
      <section className="w-full p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 -translate-y-16 place-items-center z-50">
            <Card img="../public/image/jfc.webp" judul="Jember Dibalik Layar" deskripsi="Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain"/>
            <Card img="../public/image/tembakau.jpg" judul="Jejak Kota Tembakau" deskripsi="Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain"/>
            <Card img="../public/image/umkm.jpg" judul="Jember dan UMKM Andalan" deskripsi="Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain"/>
            <Card img="../public/image/rakyat.jpg" judul="Jember Terbina, Jember Berkarya" deskripsi="Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain"/>
        </section>
        <div className="w-screen bg-neutral-800 h-40 -rotate-2 translate-y-50 scale-105 z-20 absolute"></div>
    </div>
  );
}
