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
      img: "/image/jfc.jpg",
      judul: "Jember Dibalik Layar",
      deskripsi:
        "Jember, sebuah kota kecil di ujung timur Pulau Jawa, menyimpan kekayaan budaya yang melampaui pandangan sekilas tentang kesederhanaannya. Di balik kesunyian alamnya yang subur, kota ini ternyata menyimpan ragam tradisi dan seni yang masih terpelihara dengan baik. Salah satu contohnya adalah Jember Fashion Carnaval (JFC), yang telah mendunia dan dikenal sebagai ajang pameran kreativitas busana bertaraf internasional. Setiap tahunnya, karnaval ini menampilkan parade kostum-kostum spektakuler yang memadukan unsur-unsur budaya tradisional Indonesia dengan sentuhan modern, menjadikan Jember sebagai pusat mode yang tidak hanya bersaing secara lokal, tetapi juga global. Selain JFC, Jember memiliki kekayaan budaya lain yang lebih tradisional, seperti Tari Lahbako. Tari ini menggambarkan kehidupan para petani tembakau, yang telah lama menjadi salah satu sektor perekonomian utama di Jember. Melalui gerakan-gerakannya yang khas, Tari Lahbako memberikan penghargaan kepada kerja keras para petani yang turut mengangkat nama Jember sebagai penghasil tembakau berkualitas. Tidak hanya seni tari, Tota’an Merpati, permainan tradisional merpati, juga menjadi bagian dari kehidupan masyarakat Jember yang mengakar kuat. Permainan ini tidak hanya menghibur, tetapi juga memperkuat ikatan sosial di antara masyarakat setempat. Dalam setiap perlombaannya, terlihat betapa masyarakat Jember memiliki hubungan yang erat dengan alam dan hewan peliharaan mereka, yang menjadi bagian dari tradisi yang diwariskan dari generasi ke generasi. Dengan seluruh kekayaan budaya ini, Jember bukan hanya dikenal sebagai kota penghasil tembakau atau penyelenggara karnaval, tetapi juga sebagai kota yang memiliki warisan budaya yang kaya dan terus dipertahankan oleh masyarakatnya. Inilah yang menjadikan Jember sebagai destinasi yang tidak hanya menarik secara visual, tetapi juga penuh makna, karena budaya yang hidup di dalamnya adalah bagian penting dari identitas kota ini.",
    },
    {
      img: "/image/tembakau.jpg",
      judul: "Jejak Kota Tembakau",
      deskripsi:
        "Jember, yang sering disebut sebagai Kota Tembakau, memiliki sejarah panjang dalam industri tembakau yang sudah menjadi bagian integral dari identitas daerah ini. Terletak di ujung timur Pulau Jawa, Jember dikenal sebagai salah satu penghasil tembakau terbaik di Indonesia, terutama tembakau jenis Na Oogst yang banyak diekspor ke mancanegara, seperti Eropa dan Amerika. Sejak zaman kolonial Belanda, tanah Jember yang subur dan iklimnya yang ideal untuk pertanian telah menjadikan kota ini pusat utama produksi tembakau berkualitas. Para petani tembakau di Jember telah mewarisi teknik pengolahan tembakau secara turun-temurun, mulai dari penanaman, pemetikan, hingga proses fermentasi yang memerlukan keahlian khusus. Setiap tahapan pengolahan tembakau dilakukan dengan teliti untuk memastikan kualitas daun tembakau yang optimal, yang pada akhirnya diolah menjadi cerutu maupun produk tembakau lainnya. Selain aspek pertaniannya, industri tembakau juga berdampak besar pada perekonomian lokal, di mana banyak keluarga di Jember bergantung pada sektor ini untuk mata pencaharian mereka. Jember bahkan memiliki kawasan perkebunan tembakau yang luas, yang sering menjadi pemandangan ikonik dari daerah ini. Di tengah perkembangan zaman dan perubahan dalam tren konsumsi tembakau, Jember tetap mempertahankan posisinya sebagai produsen tembakau berkualitas tinggi, meski tantangan seperti persaingan internasional dan isu kesehatan semakin mempengaruhi industri ini. Namun, kota ini terus beradaptasi, mengembangkan inovasi dalam proses penanaman dan pengolahan tembakau untuk mempertahankan reputasi sebagai salah satu pusat tembakau terbaik di dunia. Jejak tembakau di Jember tidak hanya soal produksi, tapi juga melahirkan warisan budaya yang terkait erat dengan kehidupan masyarakat, termasuk seni dan tradisi lokal seperti Tari Lahbako, yang menggambarkan kehidupan petani tembakau dengan gerakan penuh makna. Dari ladang-ladang hijau yang membentang hingga festival dan acara budaya yang melibatkan tembakau, Jember telah membangun reputasinya sebagai kota yang terus berdenyut dengan aroma khas daun tembakau, mengukuhkan jejaknya sebagai Kota Tembakau yang tak tergantikan.",
    },
    {
      img: "/image/umk.jpg",
      judul: "Jember dan UMKM Andalan",
      deskripsi:
        "Jember, yang dikenal dengan kekayaan alam dan budayanya, juga memiliki potensi besar di sektor Usaha Mikro, Kecil, dan Menengah (UMKM). Kota ini telah lama menjadi pusat bagi pelaku usaha lokal yang berperan penting dalam menggerakkan roda perekonomian daerah. UMKM di Jember tumbuh subur, mencakup berbagai bidang mulai dari kuliner, kerajinan tangan, hingga produk olahan pertanian. Salah satu sektor yang paling menonjol adalah industri makanan dan minuman berbasis produk lokal, seperti olahan kopi, kakao, hingga camilan khas Jember seperti prol tape, yang menjadi daya tarik tersendiri bagi wisatawan. Selain itu, sektor kerajinan tangan juga berkembang pesat, dengan banyaknya produk kreatif berbahan dasar alam seperti bambu, rotan, dan batik yang dihasilkan oleh pengrajin lokal. UMKM di Jember tidak hanya menyerap banyak tenaga kerja lokal, tetapi juga menciptakan inovasi dalam produk yang dipasarkan ke berbagai daerah di Indonesia dan mancanegara. Pemerintah daerah juga terus mendorong perkembangan UMKM dengan memberikan pelatihan, pendampingan, serta akses permodalan bagi para pelaku usaha kecil. Dalam beberapa tahun terakhir, digitalisasi telah menjadi kunci dalam meningkatkan daya saing UMKM di Jember, terutama dengan adanya platform e-commerce yang memungkinkan produk lokal dipasarkan secara lebih luas. Program-program seperti festival UMKM dan pameran produk lokal juga sering diadakan untuk memperkenalkan produk-produk unggulan Jember ke pasar yang lebih besar. Selain itu, dukungan dari berbagai lembaga, baik pemerintah maupun swasta, semakin memperkuat ekosistem UMKM di Jember, sehingga banyak usaha kecil yang mampu bertahan dan berkembang meskipun menghadapi tantangan seperti pandemi dan persaingan pasar yang ketat. Dengan beragam inovasi dan dukungan tersebut, Jember terus menunjukkan bahwa UMKM memiliki peran vital dalam menggerakkan ekonomi daerah, sekaligus memperkaya identitas kota ini sebagai pusat kreativitas dan kewirausahaan.",
    },
    {
      img: "/image/masyarakat2.jpg",
      judul: "Jember Terbina, Jember Berkarya",
      deskripsi:
        "Jember, sebuah kabupaten di Jawa Timur, telah menunjukkan kemajuan signifikan berkat program-program pemerintah yang berfokus pada pemberdayaan masyarakat dan pengembangan potensi lokal. Dengan inisiatif 'Jember Terbina Jember Berkarya' pemerintah daerah mendorong masyarakat untuk berpartisipasi aktif dalam berbagai sektor, mulai dari pertanian hingga industri kreatif. Program ini tidak hanya memberikan pelatihan keterampilan, tetapi juga menciptakan akses terhadap modal usaha, yang memungkinkan warga untuk memulai bisnis dan berinovasi. Salah satu contoh sukses adalah pembentukan kelompok tani yang telah berhasil mengadopsi teknik pertanian modern, meningkatkan hasil panen, dan memasarkan produk mereka secara langsung ke konsumen. Selain itu, pemerintah juga menggalakkan pengembangan pariwisata berbasis komunitas yang melibatkan masyarakat lokal dalam pengelolaan dan promosi destinasi wisata. Dengan memanfaatkan keindahan alam dan budaya lokal, program ini tidak hanya meningkatkan pendapatan masyarakat, tetapi juga melestarikan warisan budaya Jember. Kegiatan seni dan budaya, seperti festival lokal dan pameran kerajinan, juga didorong untuk memperkuat rasa kebersamaan dan identitas daerah. Melalui kolaborasi antara pemerintah, sektor swasta, dan masyarakat, Jember semakin mantap dalam menciptakan lingkungan yang mendukung inovasi dan kreativitas. Keseluruhan inisiatif ini bertujuan untuk menjadikan Jember sebagai daerah yang mandiri dan berdaya saing, di mana setiap warga memiliki kesempatan untuk berkarya dan berkontribusi dalam pembangunan daerah. Dengan semangat gotong royong dan sinergi, Jember tidak hanya terbina tetapi juga berkarya, menjadi contoh bagi daerah lain dalam pengembangan masyarakat yang berkelanjutan.",
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
      <ArticleFormData img={Img} judul={Judul} deskripsi={Deskripsi} IsOpen={IsOpen} setIsOpen={setIsOpen} />
      <div className="bg-slate-200 pb-10 relative overflow-x-clip" id="article">
        <section className="w-full p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 -translate-y-16 place-items-center z-50">
          {kartuData.map((kartu, index) => (
            <Card
              key={index}
              img={kartu.img}
              judul={kartu.judul}
              deskripsi={kartu.deskripsi}
              onClick={() => handleOpenForm(kartu.img, kartu.judul, kartu.deskripsi)} // Menambahkan onClick agar modal terbuka
            />
          ))}
        </section>
        <div className="w-screen bg-neutral-800 h-40 -rotate-2 translate-y-50 scale-105 z-20 absolute"></div>
      </div>
    </>
  );
}
