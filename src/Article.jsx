import Card from "./components/Card";

export default function Article() {
  return (
    <div className="bg-slate-200 pb-10">
      <section className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 -translate-y-16 place-items-center">
            <Card img="https://i.pinimg.com/enabled/564x/f5/c3/05/f5c30525b780e0524b796c93d6aded8f.jpg" judul="Mobil Kuning" deskripsi="Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain"/>
            <Card img="https://i.pinimg.com/enabled/564x/f5/c3/05/f5c30525b780e0524b796c93d6aded8f.jpg" judul="Mobil Kuning" deskripsi="Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain"/>
            <Card img="https://i.pinimg.com/enabled/564x/f5/c3/05/f5c30525b780e0524b796c93d6aded8f.jpg" judul="Mobil Kuning" deskripsi="Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain"/>
            <Card img="https://i.pinimg.com/enabled/564x/f5/c3/05/f5c30525b780e0524b796c93d6aded8f.jpg" judul="Mobil Kuning" deskripsi="Mobil kuning merupakan sebuah kendaraan yang berwarna kuning, mobil memiliki 4 roda. selain warna kuning mobil juga memiliki banyak warna seperti merah hijau hitam putih dan lain lain"/>
        </section>
        <div className="w-screen bg-neutral-800 h-40 -rotate-2 translate-y-50 scale-105 z-20 absolute"></div>
    </div>
  );
}
